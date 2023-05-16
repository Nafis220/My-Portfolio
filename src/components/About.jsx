// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//         I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life!
//       </motion.p>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speen: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain ' />
          <h3 className='text-white text-[20px] font-bold text-center block'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>{" "}
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to my portfolio website! I am a frontend focused full-stack web
        application developer with expertise in JavaScript. <br /> I thrive on
        crafting efficient and user-friendly web experiences that bring ideas to
        life. <br /> <br /> In the frontend, I leverage powerful JavaScript
        libraries to create dynamic and interactive interfaces that captivate
        users. By using React.js and other frameworks, I strive to deliver
        seamless experiences that engage and delight. <br /> <br /> On the
        backend, I rely on the flexibility and scalability of Node.js to build
        robust and efficient server-side logic. I love diving into the
        intricacies of backend development, crafting APIs, managing databases,
        and ensuring smooth data flow throughout the application. When it comes
        to databases, I'm well-versed in both NoSQL and graph databases. I
        understand the unique advantages of each and can design data models that
        optimize performance and enable efficient querying. <br /> <br />{" "}
        Additionally, I have a strong foundation in cloud computing. I can
        deploy applications to cloud platforms like Amazon Web Services (AWS),
        Microsoft Azure, or Google Cloud Platform, ensuring high availability,
        scalability, and security.
        <br />
        <br /> Throughout my career, I have worked on a diverse range of
        projects, from e-commerce platforms to social media applications. I take
        pride in delivering solutions that meet client requirements and exceed
        expectations. Feel free to explore my portfolio to get a glimpse of my
        previous work and the technologies I specialize in. If you have any
        questions or would like to discuss potential collaborations, please
        don't hesitate to reach out. I'm excited to be part of your journey in
        building exceptional web applications.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
