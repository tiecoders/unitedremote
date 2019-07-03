import React from 'react';
import { NavBar } from './components/NavBar';
import { RepositoryList } from './components/RepositoryList';

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <RepositoryList />
      </div>
    </>
  );
}

export default App