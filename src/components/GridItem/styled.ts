import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
};
export const Container = styled.div<ContainerProps>`
    background-color: ${(props) =>
        props.showBackground ? "#1550FF" : "#E2E3E3"};

    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
        width: 40px !important;
        height: 40px !important;
    }
`;
