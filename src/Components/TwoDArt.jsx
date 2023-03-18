import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    align-items: normal;
    height: 100%;
    position: relative;
    overflow: hidden;
`
const SpaceShip = styled.img`
    top:50%;
    left:50%;
    position: absolute;
    width: 200px;
    height: auto;
    animation: spaceship 2s infinite ease alternate;
    @keyframes spaceship {
    0% {
      transform: translateY(-50%);
      transform: translateX(50%);
    }
    25% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(50%);
      transform: translateX(-50%);
    }
    75% {
      transform: translateY(20px);
    }
  }
`

// const Moon = styled.img`
//     top:50%;
//     left:50%;
//     position: absolute;
//     width: 200px;
//     height: auto;
//     animation: spaceship 2s infinite ease alternate;
//     border:2px solid black;
//     border-radius: 100%;
//     @keyframes spaceship {
//     0% {
//       transform: translateY(-50%);
//       transform: translateX(50%);
//     }
//     25% {
//       transform: translateY(20px);
//     }
//     50% {
//       transform: translateY(50%);
//       transform: translateX(-50%);
//     }
//     75% {
//       transform: translateY(20px);
//     }
//   }
// `

const Moon = styled.div`
    top:20px;
    left:20px;
    background: url('/img/moon.png');
    background-size:cover;
    background-position: center center;
    /* backdrop-filter: blur( 4px ); */
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
    position: absolute;
    width: 200px;
    height: 200px;
    animation: Moon 3s infinite ease alternate;
    border:2px solid black;
    border-radius: 100%;
    overflow: hidden;

    @keyframes Moon {
    to {
      transform: translate(30px,30px) rotate(15deg);
    }
  }
    
`

const Overlay = styled.div`
    height: 100%;
    width: 100%;

    backdrop-filter: brightness(0.8);
    -webkit-backdrop-filter:brightness( 0.8 );
`

const Stars = styled.div`
    top:-25px;
    left:-25px;
    background: url('/img/starBackground.png');
    background-size:cover;
    background-position: center center;
    position: absolute;
    width: 120%;
    height: 120%;
    animation: Stars 2s infinite ease alternate;
    overflow: hidden;

    @keyframes Stars {
    25% {
      transform: translate(20px,20px);
    }
    50%{
        transform: translateX(-15px);
    }
  }
    
`

const TwoDArt = () => {
  return (
    <Container>
        <Stars/>
        <SpaceShip src='./public/img/spaceship.gif'/>
        <Moon>
            <Overlay/>
        </Moon>
        
    </Container>
  )
}

export default TwoDArt