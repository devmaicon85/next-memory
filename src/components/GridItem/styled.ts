import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
};
export const Container = styled.div<ContainerProps>`
    background-color: ${(props) =>
        props.showBackground ? "#024c93" : "#E2E3E3"};

    height: 100px;
    border-radius: 20px;

    cursor: pointer;

    img {
        width: 65px !important;
        max-height: 65px !important;
    }

    svg {
        width: 50px !important;
        height: 50px !important;
        color: #fff;
    }
`;

export const Flipper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 0.8s;
`;
