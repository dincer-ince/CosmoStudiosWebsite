import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { BufferGeometry, Vector3 } from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { CameraControls, PerspectiveCamera } from '@react-three/drei';


const Section = styled.div`
height:100vh;

scroll-snap-align: center;
position: relative;
`;
const Container = styled.div`
  height:100%;
  width: 100%;
  top:0px;
  left:0px;
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Box({position,acceleration}) {

  const mesh = useRef()



  useFrame((state, delta) => {
    mesh.current.position.z-=acceleration*delta;
    if(mesh.current.position.z<-10){
      mesh.current.position.z=1
    }
  })

  return (<>
  <mesh
      position={position}
      ref={mesh}>
      <circleGeometry args={[0.1,12]} />
      <meshStandardMaterial  color={'white'} />
    </mesh>
  </>
    
  )
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.9))
}

const EstimateCard= styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height:100%;
  width: 1400px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
`;

const Card = styled.div`
background: rgba(${props=>props.color},0.35);
/* width: 100%; */
flex:4;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3.5px );
-webkit-backdrop-filter: blur( 3.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
align-self: ${props=>props.align};
text-align: ${props=>props.text};
padding: 20px;


&:hover {
  background: rgba(${props=>props.color},0);
  }
`

const Split = styled.div`
display: flex;
`


const PrincipleImg = styled.div`
/* width:30%; */
flex:1;
display: flex;
justify-content: center;
align-items: center;
`

function CardValues({align,text,title,textAlign,color}){

  if(align ==='end'){
    return(<Split>
      <PrincipleImg>
      <img width={150} height={150} src='/img/octopus.png'/>
      </PrincipleImg>
      
    <Card color={color} text={textAlign} align={align}>
      <h4>{title}</h4>
      <br></br>
      <p>{text}</p>
    </Card></Split>)
  }
  else{
    return(<Split>
    <Card color={color} text={textAlign} align={align}>
      <h4>{title}</h4>
      <br></br>
      <p>{text}</p>
    </Card>
    <PrincipleImg>
      <img width={150} height={150} src='/img/astronaut.gif'/>
      </PrincipleImg>
    </Split>)
  }
  
}


const Title=styled.h1`
  align-self: center;
  font-weight: bolder;
  font-size: 5rem;
  margin-bottom: -30px !important;
  
`

const Values = () => {

  let stars=[];
  for(let i=0;i<100;i++){
    let position=[Math.random() * 40-20,Math.random() * 40-20,Math.random()*5-5]
    let acceleration=Math.random()*10+3
    let star= {
      key:i,
      pos:position,
      acc:acceleration
    }
    
    stars.push(star);
  }
  console.log(stars)
  return (
    <Section>
      <Canvas camera={{fov:140,position: [0, 0, 0]}}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      
        {stars.map((x)=>(<Box key={x.i} position={x.pos} acceleration={x.acc}/>))}
        <Rig/>
      </Canvas>
      <EstimateCard>
        <Title>WHY CHOOSE US</Title>
        <CardValues color={ '255, 255, 255' } textAlign={'end'} align={'start'} text={'We are open, and we never tend to hide things; thus, we invite our customers to our slack and time-tracking tools, so they can see real data and discussions at any time they want to.'} title={'FULL TRANSPARENCY'}/>
        <CardValues color={'74, 144, 226'} align={'end'} title={'HIGHEST QUALITY POSSIBLE'}text={'We think that each game deserves not to have bugs at all, and our QA engineers do not let any, even tiny bug, show up in production.'}/>
        <CardValues color={'208, 2, 27'} textAlign={'end'} align={'start'} title={'EASY ACCESS TO PROJECT PROGRESS'} text={'We believe that the only way to build a reliable relationship is to show clients real-time progress charts, invite them to task-tracking systems and allow seeing real tasks statuses.'} />
        <CardValues color={'248, 231, 28'} align={'end'} title={'FLAWLESS AND FAST COMMUNICATION'} text={'We always provide quick, regular follow-ups and updates to customers to keep them informed and don`t let them wait for long replies.'} />
      </EstimateCard>
    </Section>
  )
}

export default Values