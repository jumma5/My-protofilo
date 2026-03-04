import { motion } from "framer-motion";
import { techStack } from "@/data/projects";

const StackSection = () => {
  const core = techStack.filter((t) => t.category === "core");
  const ai = techStack.filter((t) => t.category === "ai");

  return (
    <section id="stack" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          My Stack
        </motion.h2>

        {/* Core grid */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {core.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px hsl(var(--shimmer) / 0.15)" }}
              data-cursor-hover
              className="glass flex flex-col items-center justify-center gap-2 rounded-xl p-6 text-center"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
              <span className="text-xs text-muted-foreground">{tech.description}</span>
            </motion.div>
          ))}
        </div>

        {/* AI Tools */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-xl font-semibold text-foreground"
        >
          AI-Assisted Development
        </motion.h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {ai.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              data-cursor-hover
              className="gradient-border flex flex-col items-center gap-3 rounded-xl p-6 text-center"
            >
              <span className="text-4xl">{tech.icon}</span>
              <span className="text-sm font-semibold text-foreground">{tech.name}</span>
              <span className="text-xs text-muted-foreground">{tech.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
