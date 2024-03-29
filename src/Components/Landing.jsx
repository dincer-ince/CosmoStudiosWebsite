import React, { Suspense } from "react";
import styled from 'styled-components';
import Navbar from './Navbar';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (width>1400px) {


scroll-snap-align: center;
}

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
height: 100%;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 0px;
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  margin-bottom: 0px !important;
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Landing = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
            <Left>
                <Title>Think. Make. Solve.</Title>
                <WhatWeDo>
                    <Line src="./public/img/line.png" />
                    <Subtitle>Cosmo Studios</Subtitle>
                </WhatWeDo>
                <Desc>We enjoy creating delightful, human-centered digital experiences.</Desc>
            </Left>
            <Right>
                <Canvas>
                    <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 200]} scale={2.4}>
                        <MeshDistortMaterial
                        color="#3d1c56"
                        attach="material"
                        distort={0.5}
                        speed={2}
                        />
                    </Sphere>
                    </Suspense>
                </Canvas>
                <Img src="./public/img/octopus.png"/>
            </Right>
        </Container>
    </Section>
  )
}

export default Landing