import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"


const Global = createGlobalStyle`
  body {
    margin: 0;
  }
`

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: white;
    border-radius: 5px;
    transform-origin: 1px;
    position: realtive;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const MenuLinks = styled.nav`
   display: fixed;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100vh;
   width: 100%;
   background: white;
   position: fixed;
   top: 0;
   right: 0;
   width: 100%;
   transition: transform 300ms;
   transform: ${({ nav }) => (nav ? "translateX(0)": "translateX(100%)")};


   ul {
     list-style-type: none;
   }

   li {
    margin-top: 1rem;
   }

   a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 300ms;

    :hover {
        color: #6ab4ff
    }
   }
`

function Hamburger() {
  const [nav, showNav] = useState(false);

    return (
        <div>
        <Global />
        <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
           <div />
           <div />
           <div />
        </MenuIcon>
        <MenuLinks nav={nav}>
         <ul>
            <li>
             <div className="font-jedi" a href="/">Home</div>
            </li>
            <li>
             <div className="font-jedi" a href="characters">Characters</div>
            </li>
            <li>
             <div className="font-jedi" href="weapons">Weapons</div>
            </li>
            <li>
             <div className="font-jedi" a href="ships">Ships</div>
            </li>
            <li>
             <div className="font-jedi" a href="planets">Planets</div>
            </li>
            <li>
             <div className="font-jedi" a href="timeline">Timeline</div>
            </li>
        </ul> 
        </MenuLinks>
        </div>
    )
}

export default Hamburger