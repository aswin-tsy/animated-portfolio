import './services.scss';
import { motion } from "framer-motion";

const variants= {
    initial: {
        x: -500,
        y:0,
        opacity:0
    },
    final: {
        x: 0,
        y:0,
        opacity:1,
        transition:{
            staggerChildren:0.5,
            duration:1,
        }
    },

}

const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial="initial" whileInView="final" >
        <motion.div variants={variants} className="textContainer">
            <p>I focus on helping your brand grow <br/> and move forward</p>
            <hr/>
        </motion.div>
        <motion.div variants={variants} className="tittleContainer">
            <motion.div className="tittle">
                <img src="/people.webp" alt="" />
                <p><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</p>
            </motion.div>
            <motion.div className="tittle2">
              
                <p><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</p>
                <button>WHAT WE DO</button>
            </motion.div>
            
        </motion.div>
        <motion.div variants={variants} className="listContainer">
            <motion.div whileHover={{background:"lightgray", color:"black"}} className="box">
                <h1>Branding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid dolore, incidunt adipisci a dolores doloribus ab perferendis natus rerum temporibus recusandae vitae provident excepturi expedita velit est id sint!
                Autem placeat et illo quibusdam ad quas officiis fugit saepe dolor rerum, perferendis quo, tenetur eum distinctio tempore ducimus eos soluta ullam esse? Animi alias ipsum accusantium amet nam officia!.</p>
                <button>Go</button>
            </motion.div>
            <motion.div whileHover={{background:"lightgray", color:"black"}} className="box">
                <h1>Branding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid dolore, incidunt adipisci a dolores doloribus ab perferendis natus rerum temporibus recusandae vitae provident excepturi expedita velit est id sint!
                Autem placeat et illo quibusdam ad quas officiis fugit saepe dolor rerum, perferendis quo, tenetur eum distinctio tempore ducimus eos soluta ullam esse? Animi alias ipsum accusantium amet nam officia!.</p>
                <button>Go</button>
            </motion.div>
            <motion.div whileHover={{background:"lightgray", color:"black"}} className="box">
                <h1>Branding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid dolore, incidunt adipisci a dolores doloribus ab perferendis natus rerum temporibus recusandae vitae provident excepturi expedita velit est id sint!
                Autem placeat et illo quibusdam ad quas officiis fugit saepe dolor rerum, perferendis quo, tenetur eum distinctio tempore ducimus eos soluta ullam esse? Animi alias ipsum accusantium amet nam officia!.</p>
                <button>Go</button>
            </motion.div>
            <motion.div whileHover={{background:"lightgray", color:"black"}} className="box">
                <h1>Branding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid dolore, incidunt adipisci a dolores doloribus ab perferendis natus rerum temporibus recusandae vitae provident excepturi expedita velit est id sint!
                Autem placeat et illo quibusdam ad quas officiis fugit saepe dolor rerum, perferendis quo, tenetur eum distinctio tempore ducimus eos soluta ullam esse? Animi alias ipsum accusantium amet nam officia!.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services;
