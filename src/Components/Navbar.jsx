import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
 
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 0 !important;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const LogoContainer = styled.div`
  padding:20px;
  background-color: white;
  border-radius: 39% 61% 27% 73% / 63% 28% 72% 37%   ;
  /* clip-path: ellipse(94% 30% at 26% 18%); */
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  background-color: #da4ea2 !important;
  color: #ffffff !important;
`;

function hire(){
  const element = document.getElementById("contact");
    element.scrollIntoView();
}

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <LogoContainer>
            <Logo src="./public/img/logo.png" />
            <span style={{color:'black', fontWeight:'bold',marginLeft:'20px',fontSize:'20px'}}>Cosmo Studios</span>
          </LogoContainer>
          {/* <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List> */}
        </Links>
        <Icons>
          <Button onClick={hire} className='btn'>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar