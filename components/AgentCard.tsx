import Link from "next/link";
import Image from "next/image";
import { Agent } from "@/lib/data";
import { ExternalLink, Terminal } from "lucide-react";

interface AgentCardProps {
  readonly agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="group border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white flex flex-col h-full hover:scale-[1.02]">
      {/* Image de prévisualisation */}
      {agent.imageUrl && (
        <div className="relative w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
          <Image
            src={agent.imageUrl}
            alt={agent.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {/* Icône personnalisée ou par défaut */}
            {agent.iconUrl ? (
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-md ring-2 ring-slate-100">
                <Image
                  src={agent.iconUrl}
                  alt={`${agent.name} icon`}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded-lg shadow-md">
                <Terminal className="w-6 h-6" />
              </div>
            )}
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
            {agent.author}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {agent.name}
        </h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
          {agent.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 px-3 py-1.5 rounded-full font-medium border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t mt-auto">
          <Link 
            href={`/agent/${agent.id}`}
            className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 group/link"
          >
            <span>Voir les détails</span>
            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
          {agent.repoUrl && (
            <a 
              href={agent.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-700 transition-colors p-2 rounded-lg hover:bg-slate-100"
              title="Voir le repository"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
