import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    tittle: "React Commerce",
    image:
      "https://images.pexels.com/photos/18332437/pexels-photo-18332437/free-photo-of-forest-trees-around-stream.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit ratione delectus accusamus corporis porro hic odio quae error eveniet, totam ad repellendus dolorem, enim iure earum animi facilis impedit.",
  },
  {
    id: 2,
    tittle: "Javascript App",
    image:
      "https://images.pexels.com/photos/28168593/pexels-photo-28168593/free-photo-of-montagne.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit ratione delectus accusamus corporis porro hic odio quae error eveniet, totam ad repellendus dolorem, enim iure earum animi facilis impedit.",
  },
  {
    id: 3,
    tittle: "Health App",
    image:
      "https://images.pexels.com/photos/27703479/pexels-photo-27703479/free-photo-of-a-ferris-wheel-is-in-the-middle-of-a-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit ratione delectus accusamus corporis porro hic odio quae error eveniet, totam ad repellendus dolorem, enim iure earum animi facilis impedit.",
  },
  {
    id: 4,
    tittle: "Cricket Club",
    image:
      "https://images.pexels.com/photos/21415109/pexels-photo-21415109/free-photo-of-photo-of-athletes-walking-on-the-field-during-a-cricket-match.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit ratione delectus accusamus corporis porro hic odio quae error eveniet, totam ad repellendus dolorem, enim iure earum animi facilis impedit.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const ybl = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y: ybl }}>
            <h1>{item.tittle}</h1>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const ypr = useSpring(scrollYProgress, {
    damping: 100,
    stiffness: 200,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: ypr }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
