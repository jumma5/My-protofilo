import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectPanel = ({ project, onClose }: Props) => {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="glass fixed right-0 top-0 z-50 flex h-full w-full flex-col overflow-y-auto shadow-2xl sm:max-w-lg"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Parallax-style header */}
            <div className="relative h-56 flex-shrink-0 overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-6 p-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{project.tag}</p>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              {/* Features */}
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Key Features
                </h3>
                <ul className="space-y-1.5 text-sm text-foreground/80">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="border-border/50 bg-secondary/60 text-foreground/80 shadow-[0_0_8px_hsl(var(--shimmer)/0.15)]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* AI Workflow */}
              <div className="rounded-lg border border-border/50 bg-secondary/30 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Sparkles className="h-4 w-4" />
                  AI-Workflow
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.aiWorkflow}</p>
              </div>
            </div>

            {/* Sticky footer */}
            <div className="sticky bottom-0 flex gap-3 border-t border-border/50 bg-card/80 p-4 backdrop-blur-lg">
              {project.liveUrl && (
                <Button asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectPanel;
