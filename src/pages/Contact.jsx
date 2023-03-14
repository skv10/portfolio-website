import React from 'react'
import { Row,Col,Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import {motion} from "framer-motion";
const Contact = () => {

    const onSubmit =() => {
   
    };
  return (
    
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.2}} className="contact">
        <h2>Contact</h2>
        <Row>
            <Col>
            <div className='contact-form'>
            <Form onSubmit={onSubmit}>
              <FormGroup className='mb-3' controlId='validationCustom01'>
                 <FormLabel>Name</FormLabel>
                 <FormControl required type="text" placeholder='Name'></FormControl>
              </FormGroup>
              <FormGroup className='mb-3' controlId='validationCustom02'>
                 <FormLabel>Email</FormLabel>
                 <FormControl required type="email" placeholder='Email'></FormControl>
              </FormGroup>
              <FormGroup className='mb-3' controlId='validationCustom03'>
                 <FormLabel>Message</FormLabel>
                 <FormControl required as="textarea" placeholder='Message'></FormControl>
              </FormGroup>


              <Button type='submit'>Submit Form</Button>
             
            </Form>
            </div>
            </Col>

            <Col>
            <div className='contact-data'>
                <p>
                 if you want to work with me or Hire as freelancer - email me on sameershukla1999@gmail.com
                </p>
                <p>
                I can create the Frontend (Angular,React) and Backend (node.js ) 
                </p>
            </div>
            </Col>
        </Row>
    </motion.div>
  )
}

export default Contact