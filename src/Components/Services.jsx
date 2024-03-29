
import React, { useState,useRef } from "react";
import styled from 'styled-components';
import Unity from './Unity'
import TwoDArt from "./TwoDArt";
import HountedHouse from './HauntedHouse'

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

// const data = [
//   "Unity Development",
//   "2D ART",
//   "3D ART",
//   "Animation",
//   "Mobile Development",
//   "Concept Art"
// ];


const data = [
  {key:"Unity Development",value:UnityRender(),description:"Unity game development is one of the many services we offer at Cosmo Studios. With many-year expertise in game development, our team can turn your creative ideas into excellent software and design unforgettable and totally breathtaking gameplay. We make a vibrant, immersive world with Unity engine to make your game outcompete."},
  {key:"2D ART",value:<TwoDArt/>,description:"Our company designs 2D characters and environments from scratch, creates the concept, and integrates vector art into your video game. With thousands of hours spent on 2D art and development, we know how to bring visionary ideas into stunning video games."},
  {key:"3D ART",value:HountedHouseRender (),description:"3D art is another service we offer at Cosmo Studios. Our talented artists can create stunning 3D models, textures, animations, and effects for your game. Whether you need realistic characters, stylized environments, or anything in between, we can deliver high-quality 3D art that suits your vision and budget. We use the latest tools and techniques to make your game look amazing and run smoothly."},
  //{key:"Animation",value:<Unity/>},
  {key:"Mobile Development",value:<Unity/>, description:"Mobile development is also a service we offer at Cosmo Studios. Our experienced developers can create engaging and addictive games for iOS and Android devices. We can optimize the game performance and graphics for different screen sizes and resolutions, as well as implement various features such as touch controls, accelerometer, camera, GPS, and more. We can also help you with publishing and monetizing your game on the App Store and Google Play. We make your game accessible and enjoyable for mobile users."},
  {key:"Concept Art",value:<Unity/>, description:"Concept art is also a service we offer at Cosmo Studios. Our creative artists can produce original and captivating concept art for your game. We can help you with the visual development of your game idea, from sketches to final illustrations, from characters to environments, from props to UI. We can also work with different styles and genres, such as fantasy, sci-fi, horror, cartoon, etc. We make your game more appealing and immersive with concept art."}
];


const Section = styled.div`
@media (width>1400px) {
height:100vh;

scroll-snap-align: center;
}
min-height: max-content;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const ListItem = styled.span`
  width: fit-content;
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    background-color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.4s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.div`
  height:90%;
  width: 100%;
  color:white;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

`;

const Title = styled.h2`
  margin-top: 1rem;
  padding: 20px;
  text-align: end;
`
const Desc = styled.p`
  border-top: 1px solid;
  /* height:50%; */
  font-size: 18px;
  padding: 20px;
  text-align: end;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 0px !important;
`;

function UnityRender(){
  return(<Canvas id="unity">
    <Stage environment="city" intensity={0.6}>
      <Unity/>
    </Stage>
    <OrbitControls
autoRotate
/>
  </Canvas>);
}

function HountedHouseRender(){
  return(<Canvas id="hounted-house">
    <Stage environment="forest" intensity={0.6}>
      <HountedHouse/>
    </Stage>
    <OrbitControls
autoRotate
/>
  </Canvas>);
}


const Services = () => {
  const [work, setWork] = useState(data[0]);


  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item.key} text={item.key} onClick={() => setWork(item)}>
                {item.key}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <ItemContainer>
            
            {work.value}
            <Title>{work.key}</Title>
            <Desc>{work.description}</Desc>
          </ItemContainer>
        </Right>
      </Container>
    </Section>
  );
}




export default Services