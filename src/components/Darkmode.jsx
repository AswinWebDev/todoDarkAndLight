import styled from 'styled-components'
import MoonIconSvg from '../assets/images/icon-moon.svg'
import SunIconSvg from '../assets/images/icon-sun.svg'
const DarkmodeContainer = styled.div`
`;
const MoonIcon = styled.img``;
const SunIcon = styled.img``;
const Darkmode = ({darkMode, setDarkMode}) => {
  
  return (

    <DarkmodeContainer onClick={()=>{
        setDarkMode(!darkMode)
    }}>
        {darkMode?<MoonIcon src={MoonIconSvg} alt='moon icon' />:<SunIcon src={SunIconSvg} alt='sun icon'/>}
        
    </DarkmodeContainer>
  )
}

export default Darkmode