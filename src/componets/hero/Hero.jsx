import "./hero.scss";
import { motion } from "framer-motion";

const textVariants ={
    initial:{
        x: -500,
        rotate:0,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        rotate: 360,
        opacity:0,
        transition:{
            duration:2,
            repeat:Infinity
        },
    },
}

const slideVariants ={
    initial:{
        x: 0,
        
    },
    animate:{
        x: "-220%",
       
        transition:{
            duration:10,
            repeat:Infinity,
            repeatType:"mirror",
        },
    },
   
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer"  variants={textVariants}
         initial="initial" animate="animate">
          <motion.h1 variants={textVariants}>Aswin Chandran</motion.h1>
          <motion.h2 variants={textVariants}>Football Player and Cricketer</motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <button>See latest</button>
            <button>Contact Me</button>
          </motion.div>
          <motion.img  variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingText" variants={slideVariants} 
       initial="initial" animate="animate" >
        Writer and Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt=""></img>
      </div>
    </div>
  );
};

export default Hero;
