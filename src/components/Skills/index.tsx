/* eslint-disable @next/next/no-img-element */
"use client"; // Enables client-side rendering for motion

import { motion } from "framer-motion";

type Skill = {
  name: string;
  description: string;
  icon: string;
};

const skills: Skill[] = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: "/icons/react.svg",
  },
  {
    name: "Next.js",
    description: "The React framework for production.",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript at any scale.",
    icon: "/icons/typescript.svg",
  },
  {
    name: "React Native",
    description: "Build native apps using React.",
    icon: "/icons/react.svg",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    icon: "/icons/tailwind.svg",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome’s V8 engine.",
    icon: "/icons/nodejs.svg",
  },
];

export default function SkillsPage() {
  return (
    <section className="py-20 bg-gray-100" id="skills">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Delays between each card appearing
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {skill.name}
              </h3>
              <p className="text-gray-700">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
