import styled from "styled-components";
import BackgroundImageLight from "../assets/images/bg-desktop-light.jpg";
import BackgroundImageDark from "../assets/images/bg-desktop-dark.jpg";

import BackgroundMobileLight from "../assets/images/bg-mobile-light.jpg";
import BackgroundMobileDark from "../assets/images/bg-mobile-dark.jpg";
const Background = styled.header`
background-image:url(${props=>props.darkMode?BackgroundImageLight:BackgroundImageDark});
background-size: cover;
background-position: top;
height: 50vh;
position: relative;
width: 100%;
@media (max-width: 500px) {
    height: 30vh;
    background-image:url(${props=>props.darkMode?BackgroundMobileLight:BackgroundMobileDark});
    background-size: auto;
background-position: 0% 0%;
    
    `;
const BackgroundImage =({darkMode})=>{
    return(
        <Background darkMode={darkMode}>
            
        </Background>
    )
}
export default BackgroundImage;