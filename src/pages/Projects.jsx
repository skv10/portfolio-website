import React from 'react';
import img1 from "../images/1.png";
import img2 from "../images/2.png";
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
        name:"TV Movie MAJE",
        imageUrl:img2
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