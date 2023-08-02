import React from 'react'
import passport from '../images/download.jpg'
import Typewriter from 'typewriter-effect'
import { motion, Variants } from 'framer-motion'
import "../../mycss.css"

const Display = () => {

  const wordVariants: Variants = {
    initial: {
      fontSize: '10px', // Initial font size (small)
    },
    animate: {
      fontSize: '40px', // Final font size (big)
    },
  };

  return (
    <div className='relative'>

      <div className='flex justify-center pt-1 relative'>
        <motion.img

          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className=' md:w-10/12 w-11/12 md:mr-[rem] h-[35rem] justify-center object-cover'
          src={passport} alt="" />

        <p className='absolute md:text-3xl text-xl w-full text-center text-neutral-200 font-bold'>
          <Typewriter
            options={{
              strings: [
                "NoberTechx Hub",
                "Get Latest Articles on Technology",
                "We are here to motivate upcoming Techies"
              ],
              autoStart: true,
              loop: true,
              delay: 1,
              cursor: "",
              deleteSpeed: 40

            }}
          />
        </p>



      </div>
      <motion.div className='absolute top-[16rem] left-[4rem] text-left flex justify-start md:text-3xl text-sm font-bold text-white'
        initial={{ x: 0 }} // Initial position of the word
        animate={{ x: 100 }} // Animation position
        transition={{ duration: 5, repeat: Infinity }} // Animation duration and repeat
        variants={wordVariants}
      // Custom styling
      >


        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('The Goal is Technology').start();
          }}
          options={{
            // strings:["Absolute"],
            autoStart: true,
            loop: true,


          }}
        />
      </motion.div>


    </div>
  )
}

export default Display