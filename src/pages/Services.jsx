import React from 'react'
import img1 from "../images/front_end_developer.png";
import img2 from "../images/back_end_developer.jpg";
import { Card } from 'react-bootstrap';
import {motion} from "framer-motion";

const Services = () => {

    const serviceList =[
        {
        id:1,
        name:"Front-End Development (Angular or React.js)",
        imageUrl:img1
    },
    {
        id:2,
        name:"Back-end Development (Node.js)",
        imageUrl:img2
    }];
  return (
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.2}}>

    <div className='services'>
        <h2>Services</h2>
        <div className='wrapper'>
               {serviceList.map((item) => {

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
    </div>
    </motion.div>

  )
}

export default Services