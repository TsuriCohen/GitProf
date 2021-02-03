import React, { useContext } from "react";
import styled from "styled-components";
import editorContent from "../editorContent";

const Container = styled.div`
    width: 50%;
    height: 50%;
    padding: 13px;
    font-family: 'Lato', sans-serif;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: lem;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    border: 1.5px solid rgba(15, 15, 15, 0.4);
    font-saze: 17px;
`;

const ResultArea = styled.div`
    width: 100%;
    height: 100%;
    border: 1.5px solid rgba(15, 15, 15, 0.4);
    font-saze: 17px;
`;

export function MarkedInput(props) {
const { setMarkdownText } = useContext(editorContent);

const onInputChange = e => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
};

    return (
    <Container>
        <Title>Markdown Text</Title>
        <TextArea onChange={onInputChange} />
    </Container>);
}
