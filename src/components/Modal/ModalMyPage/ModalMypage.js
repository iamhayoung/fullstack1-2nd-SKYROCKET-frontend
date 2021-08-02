import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';

function ModalMyPage({ onClick }) {
  return (
    <ModalScreen>
      <Header onClick={onClick}></Header>
      <Body onClick={onClick}></Body>
    </ModalScreen>
  );
}

const ModalScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  position: fixed;
  z-index: 2000;
  inset: 0px;
`;

export default ModalMyPage;
