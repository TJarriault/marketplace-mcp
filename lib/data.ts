
export interface Agent {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  author: string;
  repoUrl: string;
  tags: string[];
  iconUrl?: string;
  imageUrl?: string;
  installCommand?: string;
}

export const agents: Agent[] = [
  {
    id: "postgres-explorer",
    name: "Postgres Explorer",
    description: "A powerful agent to query and manage your PostgreSQL databases safely.",
    fullDescription: "Postgres Explorer allows you to run read-only queries against your database, inspect schema definitions, and analyze query performance. Perfect for developers who need quick access to data without leaving their IDE.",
    author: "DevOps Team",
    repoUrl: "https://github.com/internal/postgres-explorer",
    tags: ["Database", "Postgres", "SQL"],
    installCommand: "npx @internal/postgres-explorer",
  },
  {
    id: "git-wizard",
    name: "Git Wizard",
    description: "Automate complex git workflows and resolve conflicts with AI.",
    fullDescription: "Git Wizard analyzes your commit history to suggest commit messages, helps in resolving merge conflicts by understanding code context, and automates release tagging.",
    author: "Tooling Squad",
    repoUrl: "https://github.com/internal/git-wizard",
    tags: ["Git", "Productivity", "VCS"],
    installCommand: "pip install git-wizard-mcp",
  },
  {
    id: "aws-manager",
    name: "AWS Cloud Manager",
    description: "Manage EC2 instances and S3 buckets directly from your chat context.",
    fullDescription: "Stop switching contexts to the AWS Console. This agent lets you list instances, check status, view logs, and manage S3 objects using natural language.",
    author: "Cloud Infra",
    repoUrl: "https://github.com/internal/aws-manager",
    tags: ["AWS", "Cloud", "Infrastructure"],
    installCommand: "docker run -d mcp/aws-manager",
  },
  {
    id: "jira-integrator",
    name: "Jira Integrator",
    description: "Create, update and query Jira tickets without leaving your editor.",
    fullDescription: "Seamlessly integrate your project management into your coding workflow. Fetch ticket details by ID, update status, and log time automatically.",
    author: "Product Team",
    repoUrl: "https://github.com/internal/jira-integrator",
    tags: ["Jira", "Project Management"],
    installCommand: "npm install -g @mcp/jira",
  },
  {
    id: "swagger-docs",
    name: "Swagger Docs",
    description: "Access API documentation and generate client code on the fly.",
    fullDescription: "Connect this agent to your Swagger/OpenAPI endpoint to query endpoints, understand request parameters, and generate usage examples in your preferred language.",
    author: "API Guild",
    repoUrl: "https://github.com/internal/swagger-docs",
    tags: ["API", "Documentation", "OpenAPI"],
    installCommand: "mcp install swagger-docs",
  },
  {
    id: "mcp-looker",
    name: "MCP Looker",
    description: "Visualize and analyze your data with powerful dashboard integrations.",
    fullDescription: "MCP Looker provides seamless integration with your data sources to create beautiful, interactive dashboards. Query your metrics, create visualizations, and share insights with your team. Perfect for data analysts and business intelligence professionals who need real-time data exploration capabilities.",
    author: "Data Analytics Team",
    repoUrl: "https://github.com/internal/mcp-looker",
    tags: ["Analytics", "Dashboard", "BI", "Visualization"],
    iconUrl: "/images/agents/looker-icon.png",
    imageUrl: "/images/agents/looker-dashboard.png",
    installCommand: "npm install -g @mcp/looker",
  },
];
