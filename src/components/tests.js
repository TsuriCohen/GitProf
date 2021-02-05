import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import editorContent from "../editorContent";

const Container = styled.div`
    width: 50%;
    height: 51%;
    padding: 13px;
    // border-right: 1.5px solid rgba(15, 15, 15, 0.4);
    font-family: 'Lato', sans-serif;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: lem;
`;

const ResultArea = styled.div`
    width: 100%;
    height: 100%;
    border: 1.5px solid rgba(15, 15, 15, 0.4);
    font-saze: 17px;
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

export function Tests(props) {

    const { markdownText } = useContext(editorContent);

    const { setMarkdownText } = useContext(editorContent);

    const onInputChange = e => {
        const newValue = e.currentTarget.value;
        setMarkdownText(newValue);
    };

    return <Container>
        <Title>Text</Title>
        <textarea onChange={onInputChange} />
        <Title>Converted Text3</Title>
        <ResultArea>
            <ReactMarkdown  source={"# my name is " + markdownText}/>
        </ResultArea>
    </Container>
}