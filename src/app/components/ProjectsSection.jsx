"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

 
 
  {
    id: 1,
    title: "Mern Ai Bot",
    skill1: "React js",
    skill2: "OpenAI",
    skill3: "Node js/Express js",
    skill4: "MongoDB",
    description: "Secure and scalable AI chatbot, integrating advanced authentication features.Demonstrated proficiency in building production-ready SaaS applications, emphasizing robust security , scalability principles and realtime doubt solving",
    image: "/images/projects/5.jpg",
    tag: ["All",  "Web"],
    gitUrl: "https://github.com/Prekshah30/Mern-Ai-bot",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Stock Market Analyzer",
    skill1: "React js",
    skill2: "Tinker Api",
    skill3: "Node js",
    skill4: "MongoDB",
    description: "A Stock Market Analyzer with real-time stock data , a dynamic news section and a dashboard, personalised portfolio for users along with stock trading functionality.",
    image: "/images/projects/dashboard.png",
    tag: [ "All", "Web"],
    gitUrl: "https://github.com/Prekshah30/Stock-market-SE",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Kissan Connect",
    skill1: "React native",
    skill2: "Weather API",
    skill3: "MongoDB",
    skill4: "Node js",
    description: "App for benefitting the farmers and making them aware of the existing district wise schemes,projects based on their location , along with real time weather prediction , market price data and an Admin Dashboard ",
    image: "/images/projects/7.jpg",
    tag: ["All",  "Mobile"],
    gitUrl: "https://github.com/DEEPVYAS03/SIH_CodeCrafters",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "RealEstate Website",
    skill1: "React js",
    skill2: "Next js",
    skill3: "Chakra UI",
    skill4: "Rapid API",
    description: " A Real Estate Application with rental homes and for-sale properties, advanced property filtering, property details page for an enhanced and seamless user experience.",
    image: "/images/projects/2.jpg",
    tag: ["All",  "Web"],
    gitUrl: "https://github.com/Prekshah30/RealEstate",
    // previewUrl: "/",
  },
  {
    id: 5,
    title: "Car Showroom Website",
    skill1: "Next js",
    skill2: "Typescipt",
    skill3: "Tailwind css",
    skill4: "Material UI",
    description: " An application for car enthusiasts which implements advanced search and filtering capabilities , created custom filter,combobox and modal elements.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Prekshah30/CarShowroom",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "Youtube Clone",
    skill1: "React js",
    skill2: "Rapid API",
    skill3: "styled sections",
    skill4: "Material UI",
    description: "Videos played straight from the YouTube Clone App, stunning video sections, custom categories and channel pages.",
    image: "/images/projects/1.1.jpg",
    tag: [ "All", "Web"],
    gitUrl: "https://github.com/Prekshah30/youtube_clone",
    // previewUrl: "/",
  },
  {
    id: 7,
    title: "AI Assistant",
    skill1: "React Native",
    skill2: "OpenAI",
    skill3: "Tailwind css",
    skill4: "DALL-E",
    description: " AI Voice Assistant with voice to text functionality and a realtime chatbot.",
    image: "/images/projects/8.jpg",
    tag: [ "All", "Mobile"],
    gitUrl: "https://github.com/Prekshah30/AI--voice-assistant",
    // previewUrl: "/",
  },
  {
    id: 8,
    title: "Student Companion",
    skill1: "React Native",
    skill2: "ZegoCloud",
    skill3: "Node js",
    skill4: "AWS",
    description: "Student platform for seamless file storage, chat, and video functionalities to facilitate cross-functional team project development. It includes a mentor recommendation system based on students skillsets and dynamic meeting scheduling.",
    image: "/images/projects/10.jpg",
    tag: [ "All", "Mobile"],
    gitUrl: "https://github.com/Prekshah30/student-managementapp",
    // previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard className="text-white flex flex-row justify-center items-center gap-2 py-6"
              key={project.id}
              title={project.title}
              skill1={project.skill1}
              skill2={project.skill2}
              skill3={project.skill3}
              skill4={project.skill4}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;


