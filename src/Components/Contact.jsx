import React, { useRef, forwardRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import Earth from "./Earth";
import { BufferGeometry, Vector3, SphereGeometry } from "three";
import { CameraControls, OrbitControls, Stage } from "@react-three/drei";
const Section = styled.div`
  height: 100vh;
  @media (width>1400px) {
    scroll-snap-align: center;
  }
  min-height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* @media (width<700px) {
  height:200vh;
} */
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1500px;
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-direction: row;
  @media (width<700px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  padding: 40px;
  padding-top: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  flex: 5;
  justify-content: end;
  @media (width<700px) {
    flex: 1;
  }
`;

const Footer = styled.div`
  height: 300px;
  width: 1400px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50% / 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media (width<1400px) {
    height: max-content;
    width: 100%;
    border-radius: 0px;
  }
`;

const ModalBody = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

function FormBuild() {
  return (
    <FormContainer>
      <h2 className="mb-3">Contact Us Today</h2>
      <div className="mb-3">
        <label className="form-label">Your Name</label>
        <input
          type="email"
          className="form-control"
          id="Name"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label className="form-label">What do you want to talk about?</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button style={{backgroundColor:'#da4ea2'}} className="btn btn-secondary btn-lg">SEND MESSAGE</button>
    </FormContainer>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 1, mouse.y * 1, camera.position.z),
      0.02
    )
  );
}

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <FormBuild />
        <Canvas style={{ flex: 5 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Earth />
          <Rig />
        </Canvas>
      </Container>
      <div
        className="modal fade"
        id="exampleModal"
        
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <ModalBody className="">asd</ModalBody>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-lg btn-secondary"
        style={{backgroundColor:'#da4ea2'}}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Click For more Information
      </button>
    </Section>
  );
};

export default Contact;
