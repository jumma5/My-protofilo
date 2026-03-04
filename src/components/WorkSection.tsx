import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import ProjectPanel from "./ProjectPanel";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const WorkSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Selected Works
        </motion.h2>

        {/* Asymmetrical grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelected(project)}
              data-cursor-hover
              className={`glass group relative overflow-hidden rounded-xl text-left transition-shadow hover:shadow-[0_0_30px_hsl(var(--shimmer)/0.1)] ${
                i % 3 === 0 ? "sm:row-span-2 sm:min-h-[420px]" : "sm:min-h-[200px]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {project.tag}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectPanel project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default WorkSection;
