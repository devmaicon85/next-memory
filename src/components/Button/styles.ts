import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: #024c93;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, 0.2);

    width: 50px;

    svg {
        width: 70%;
        height: 70%;
        color: #fff;
    }
`;

export const Label = styled.div`
    height: inherit;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 20px;
`;
