import styled from "styled-components"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Estimates from "./Components/Estimates"
import Landing from "./Components/Landing"
import Services from "./Components/Services"
import Values from "./Components/Values"

const Container = styled.div`
  height:100vh;
  scroll-snap-type:y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color:white;
  background: url("./public/img/bg.jpeg");
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
    <Container>
      <Landing/>
      <Services/>
      {/* <About/> */}
      
      <Estimates/>
      <Values/>
      <Contact/>
    </Container>
  )
}

export default App
