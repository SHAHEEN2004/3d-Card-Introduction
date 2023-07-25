import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <motion.div transition={{ layout: { duration: 1, type: "spring" } }} layout onClick={() => setIsOpen(!isOpen)} className='card' style={{ borderRadius: "1rem", boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}>
        <motion.h2 layout="position"  >Introduction of Shaheen Parveen  </motion.h2>
      
          {isOpen && (
            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className='expand'
            >
              <p>Hello everyone, <br /><br />

My name is Shaheen Parveen, and I am delighted to introduce myself. I am currently a student pursuing my BCA (Bachelor of Computer Applications) in the 2nd year at Pioneer Degree College in Hyderabad. <br /><br />

During my academic journey, I have not only focused on my coursework but also taken the initiative to enhance my skills in the field of web development. As a result, I have successfully completed a Frontend Development course from Relevel, where I honed my abilities in HTML, CSS, JavaScript, and React.js. Additionally, I have also gained proficiency in programming languages such as C, C++, and Python, further expanding my technical expertise. <br /> <br />

In addition to my programming skills, I am well-versed in utilizing various tools and technologies, including Postman and GitHub, to facilitate efficient project development and collaboration. Furthermore, I possess proficiency in using Microsoft Word, Excel, and PowerPoint, which has been instrumental in my academic and personal projects. <br /><br />

As an aspiring technologist, I am constantly eager to learn and grow in this ever-evolving field of technology. My passion for programming and problem-solving motivates me to seek new challenges and contribute to the advancement of the digital world. <br /> <br />

Thank you for your time, and I look forward to engaging and collaborating with all of you. <br /><br />

Best regards,
Shaheen Parveen</p>
              
            </motion.div>
          )}
      
      </motion.div>
    </div>
  );
}

export default App;
