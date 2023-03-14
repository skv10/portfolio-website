import React from 'react';
import img1 from "../images/TIC_TAC_TOE.png";
import img2 from "../images/TV_Maje.png";
import img3 from "../images/Portfolio_Website.png";
import { Card } from 'react-bootstrap';
import {motion} from "framer-motion";

const Projects = () => {
 
    const projectList =[
        {
        id:1,
        name:"TIC TAC TOE",
        imageUrl:img1
    },
    {
        id:2,
        name:"Display List of Actor and Shows from TV Maje",
        imageUrl:img2
    },
    {
      id:3,
      name:"A Simple Portfolio Website with Animation React.js",
      imageUrl:img3
  }
]


  return (
    <motion.div className='projects'
    animate={{scale:[2,1], rotate:[90,0]}}
    transition={{duration:0.5,ease:"easeInOut"}}
    >
        <h2>Projects</h2>
        <div className='wrapper'>
               {projectList.map((item) => {

                return <motion.div key={item.id} whileHover={{scale:1.1,transitions:{duration:0.5}}}>
                   <Card>
                     <Card.Img variant='top' src={item.imageUrl}></Card.Img>
                     <Card.Body>
                        <Card.Title>
                            {item.name}
                        </Card.Title>
                     </Card.Body>
                   </Card>
                 </motion.div>

               })}
        </div>
    </motion.div>
  )
}

export default Projects