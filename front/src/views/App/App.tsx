import React from 'react';
import Header from '../../components/templates/Header/Header';
import './App.css';



const filterTuples: [string, string, string, string] = ['Sans filtre', 'Nom', 'Sexe', 'Planète'];

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
        <Header
            listItems={filterTuples}
            navigationSearchLabelFor='name'
            navigationSearchLabelContent='Nom: '
            navigationSearchInputId='name'
            navigationSearchInputType='text'
            placeholder='Veuillez renseigner le nom'
        />
    </div>
  );
};

export default App;
