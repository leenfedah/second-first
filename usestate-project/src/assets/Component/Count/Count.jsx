import React from "react";
import { Button } from "bootstrap";
import { Container } from "react-bootstrap";
import { useState } from "react";


export default function Count(){
    const [index,setIndex ] =useState(0);
    return(
        <Container className="text-center">
   <p>{index}</p>
   <Button
   variant="primary"
   onClick={function(){
    setIndex(index+1);
    if (index==10) {
      setIndex(index+10)
    } else {
      setIndex(index+100)
    }
    }}
    >
      Add 1
      </Button>
      
      <p>{index==1000}</p>
      <Button
      variant="primary"
      onClick={function(){
      setIndex(index-100);
      if(index==100){
        setIndex(index-10)
      } else{
        setIndex(index-1)
      }
    }}
    >

  Add  2
  </Button>
  </Container>

       

    );
}

