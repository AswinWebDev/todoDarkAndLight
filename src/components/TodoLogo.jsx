import styled from "styled-components";
import { VeryLightGray } from "../colors";

const Container = styled.div`

color: ${VeryLightGray};

letter-spacing: 0.8rem;
font-size: 3rem;
font-Weight: 700;

`;
const TodoLogo = () => {
    
    return (
        <Container>
            TODO
        </Container>
    );
    }
    export default TodoLogo;