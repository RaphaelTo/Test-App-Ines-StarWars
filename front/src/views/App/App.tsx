import React from 'react';
import Header from '../../components/templates/Header/Header';
import './App.css';

const filterTuples: [string, string, string, string] = ['Sans filtre', 'Nom', 'Sexe', 'Planète'];

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
        <div className="container">
            <Header
                listItems={filterTuples}
                navigationSearchLabelFor='name'
                navigationSearchLabelContent='Nom: '
                navigationSearchInputId='name'
                navigationSearchInputType='text'
                placeholder='Veuillez renseigner le nom'
            />
        </div>
    </div>
  );
};

export default App;
