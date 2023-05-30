
import styled from "styled-components"
import CheckBoxIcon from '../assets/images/icon-check.svg'
import { LightGrayishBlue,brightBlue } from "../colors"
const Container = styled.div`
width: 20px;
height: 20px;
border: 1px solid ${props=>props.status===true?LightGrayishBlue:"transaparent"};
border-radius: 50%;
${props=>props.status === true && `
&:hover {
border: 1px solid ${brightBlue};
border-radius: 50%;
}
`}
display: flex;
justify-content: center;
align-items: center;
${props=>props.status===false && 
    `background: linear-gradient(to bottom,${brightBlue}, hsl(235, 19%, 35%))`};
    `
const CheckBoxImg = styled.img`
display:${props=>props.status===true?"none":"block"};
`
const CheckBox = ({status}) => {
  return (
    <Container status = {status}>
        <CheckBoxImg status={status} src={CheckBoxIcon} alt='checkbox icon'/>
    </Container>
  )
}

export default CheckBox