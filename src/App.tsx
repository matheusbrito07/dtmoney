import React, { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/DashBoard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal'
import { createServer } from 'miragejs'
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
