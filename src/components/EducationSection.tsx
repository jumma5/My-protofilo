import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="px-6 py-32">
    <div className="mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass mx-auto max-w-xl rounded-2xl p-8 text-center"
      >
        <GraduationCap className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
        <h3 className="text-lg font-semibold text-foreground">Informatics Engineering</h3>
        <p className="mt-2 text-muted-foreground">
          3rd-year student at the Syrian Virtual University (SVU)
        </p>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
