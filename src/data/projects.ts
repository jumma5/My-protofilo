export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
  techStack: string[];
  aiWorkflow: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "Modern E-commerce Platform",
    tag: "Frontend · E-commerce",
    description:
      "A high-performance online store with real-time inventory, dynamic filtering, and a seamless checkout experience built for scale.",
    features: [
      "Server-side rendering for SEO",
      "Real-time inventory tracking",
      "Stripe payment integration",
      "Admin dashboard with analytics",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    aiWorkflow:
      "Used Cursor AI for rapid component scaffolding and v0.dev to prototype the product card layout, cutting UI development time by 60%.",
    liveUrl: "https://e-commerce-app-dun-five.vercel.app/",
    githubUrl: "https://github.com/jumma5/e-commerce-app.git",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: "weather",
    title: "Weather Dashboard",
    tag: "Frontend · Data Viz",
    description:
      "An elegant weather application featuring animated visualizations, geolocation, and 7-day forecasts with hourly breakdowns.",
    features: [
      "Geolocation-based weather",
      "Animated weather icons",
      "7-day & hourly forecasts",
      "Dark/light theme toggle",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    aiWorkflow:
      "Leveraged Google AI Studio to generate optimized API integration patterns and Cursor to refactor the charting logic for performance.",
    liveUrl: "https://weather-app-2f2v.vercel.app/",
    githubUrl: "https://github.com/jumma5/weather-app.git",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
  },
];

export interface TechItem {
  name: string;
  icon: string;
  category: "core" | "ai";
  description: string;
}

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️", category: "core", description: "UI Library" },
  { name: "Next.js", icon: "▲", category: "core", description: "React Framework" },
  { name: "TypeScript", icon: "TS", category: "core", description: "Type Safety" },
  { name: "Tailwind CSS", icon: "🎨", category: "core", description: "Utility-first CSS" },
  { name: "JavaScript", icon: "JS", category: "core", description: "Core Language" },
  { name: "Node.js", icon: "🟢", category: "core", description: "Runtime" },
  { name: "Git", icon: "📦", category: "core", description: "Version Control" },
  { name: "Cursor", icon: "🤖", category: "ai", description: "AI Code Editor" },
  { name: "v0.dev", icon: "✨", category: "ai", description: "AI UI Generator" },
  { name: "Google AI Studio", icon: "🧠", category: "ai", description: "AI Prototyping" },
];
