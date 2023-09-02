import React, { Suspense,useRef } from "react";
import styled from 'styled-components';
import { Vector3,MathUtils } from "three";
import { Canvas, useThree,useFrame} from "@react-three/fiber";
import { OrbitControls, Sphere, Icosahedron,MeshDistortMaterial,Text,Text3D} from "@react-three/drei";


const Section = styled.div`
height:100vh;

@media (width>1400px) {
scroll-snap-align: center;
}

position:relative;

`;

const Container = styled.div`
  height:100%;
  width: 100%;
`

const ItemContainer = styled.div`
bottom:0;
  position: absolute;
  height:30%;
  width: 100%;

  display: flex;
  justify-content: center;
  
 
  @media (width>700px) {
 gap:50px;
}

`;

const CardWrapper = styled.div`
  height: 50%;
  width: 30%;
  @media (width<600px) {
width:50%;
}
  max-height: fit-content;
  position: relative;
`
const Card = styled.div`
  height: 100%;
  width: 100%;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 20px;
`

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 1, camera.position.z), 0.01))
}

function stopGoEased( x, downtime, period ) {

  const cycle = ( x / period ) | 0;
  const tween = x - cycle * period;
  const linStep = easeInOutCubic( linearStep( tween, downtime, period ) );
  return cycle + linStep;

}

function easeInOutCubic( x ) {

  return x ** 2 * 3 - x ** 3 * 2;

}

function linearStep( x, edge0, edge1 ) {

  const w = edge1 - edge0;
  const m = 1 / w;
  const y0 = - m * edge0;
  return MathUtils.clamp( y0 + m * x, 0, 1 );

}

function Crystals({position}){
  const crystal = useRef();
  const mesh = useRef();

  useFrame(({clock}) => {
    const t = clock.getElapsedTime();
    // crystal.current.rotation.x+=delta;
    mesh.current.emissiveIntensity = Math.sin( t * 3 ) * .5 + 0;
    crystal.current.position.y = 0 + Math.sin( t * 2 ) * .2;
    crystal.current.rotation.y = stopGoEased( t, 2, 4 ) * 2 * Math.PI;
  })
  return(
      <Icosahedron scale={2}  ref={crystal} position={[position,0,1]} args={[0.2]}>
              <meshPhongMaterial ref={mesh} color={0x2379cf} emissive={0x143542} shininess={20} specular={0xffffff}/>
    </Icosahedron>
    
  )
}

const Estimates = () => {

  

  return (
    <Section>
      <Container>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 4, 7]} />
            <Sphere args={[1, 100, 200]} scale={2.4} position={[0,0,-3]}>
                <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
                />
            </Sphere>
        
            <Crystals position={4.5}/>
            <Crystals position={-4.5}/>
            <Text position={[0,1,2]} scale={0.3} color="white" anchorX="center" anchorY="middle">Want To Get an Estimate?</Text>
            <Text textAlign="center" position={[0,0.1,1]} scale={0.2} color="white" anchorX="center" anchorY="middle">{'This question is the most common.\n Leave your query right away to get estimates for your game development project.'}</Text>
        
            <Rig/>
          </Suspense>
        </Canvas>
      </Container>
      <ItemContainer>
        <CardWrapper>
        <img style={{ position:'absolute',maxWidth : '100%' , maxHeight :  '100%' }} src="./public/img/trophy.png"></img>
          <Card>
            <h2>Gaming Industry Experts</h2>
            <br></br>
            <p>We‘re a community of like-minded and passionate game experts</p>
          </Card>
        </CardWrapper>
        <CardWrapper>
        <img style={{ position:'absolute',maxWidth : '100%' , maxHeight :  '100%' }} src="./public/img/starFigure.png"></img>
          <Card>
            <h2>Client Oriented Studio</h2>
            <br></br>
            <p>100% of our cleints are ready to recommend us online.</p>
          </Card>
        </CardWrapper>
      </ItemContainer>
    </Section>
  )
}

export default Estimates