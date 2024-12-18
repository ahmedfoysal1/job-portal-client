import { easeInOut } from "motion";
import { motion } from "motion/react"
import team1 from '../../assets/Team/team 1.jpg'
import team2 from '../../assets/Team/team 2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
        <motion.img
          src={team1}
          animate={{y : [0, 50, 0]}}
          transition={{duration: 10, repeat: Infinity}}
          className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-4 shadow-2xl"
        />
        <motion.img
          src={team2}
          animate={{x : [0, 50, 0]}}
          transition={{duration: 10, delay:5, repeat: Infinity}}
          className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-4 shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <motion.h1 
          animate={{x: [0,50,0]}}
          transition={{duration: 5, delay: 2, repeat: Infinity}}
          className="text-5xl font-bold">latest <motion.span 
          animate={{color : ['#e7ef6a','#6aefd5','#ef6ae5']}}
          transition={{duration: 1.5,repeat: Infinity}}
          >
            jobs
            </motion.span> for you</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
