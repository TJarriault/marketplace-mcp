import { agents } from "@/lib/data";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Copy, Terminal, ExternalLink, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyButton from "@/components/CopyButton";

export async function generateStaticParams() {
  return agents.map((agent) => ({
    id: agent.id,
  }));
}

export default async function AgentDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketplace
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="bg-slate-900 text-white p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm font-medium text-blue-200">
                    {agent.author}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{agent.name}</h1>
                <p className="text-slate-300 text-lg max-w-2xl">{agent.description}</p>
              </div>
              <div className="flex gap-3">
                {agent.repoUrl && (
                  <a
                    href={agent.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Repository
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">About this Agent</h2>
                <p className="text-slate-600 leading-relaxed">
                  {agent.fullDescription}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Capabilities</h2>
                <div className="bg-slate-50 border rounded-lg p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Context-aware interactions with the {agent.tags[0]} system.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Secure execution environment with defined permissions.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Seamless integration with major LLM clients (Claude Desktop, etc.).</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-slate-50 border rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Installation</h3>
                {agent.installCommand ? (
                  <div className="space-y-2">
                    <p className="text-sm text-slate-600">Run the following command:</p>
                    <div className="bg-slate-900 rounded-md p-3 group relative">
                      <code className="text-green-400 font-mono text-sm break-all pr-8 block">
                        {agent.installCommand}
                      </code>
                      <div className="absolute top-2 right-2">
                        <CopyButton text={agent.installCommand} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">See repository for installation instructions.</p>
                )}
              </div>

              <div className="bg-slate-50 border rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white border rounded-full text-sm text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
