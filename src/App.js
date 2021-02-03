import React, { Component, useState } from 'react';
import "./styles.css";
import styled from "styled-components";
import hinata from './original.jpg';
import { MarkedInput } from './components/markedInput';
import { Result } from './components/result';
import { MarkedHeaderInput } from './components/headerMd';
import EditorContent from './editorContent';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
  `;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: lem;
  `;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  `;

export default function App() {

  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <EditorContent.Provider value={contextValue}>
    <AppContainer>
      <Title>Markdown Editor</Title>
      <EditorContainer>
        <MarkedHeaderInput />
        <MarkedInput/>
        <Result />
      </EditorContainer>
    </AppContainer>
    </EditorContent.Provider>
  )
}