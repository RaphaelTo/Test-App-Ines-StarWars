import React, { useState ,useCallback, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/templates/Header/Header';
import Content from "../../components/templates/Content/Content";
import './App.css';

const filterTuples: [string, string, string, string] = ['Sans filtre', 'Nom', 'Sexe', 'Planète'];

const App: React.FunctionComponent = () => {

    const [people, setPeople] = useState({result : []});

    const fetchPeopleAPI = useCallback(async () => {
        const fetchData = await axios.get('http://localhost:4000/api/v1/people/all');
        setPeople({result: fetchData.data.result});
    },[]);

    useEffect(() => {
        fetchPeopleAPI();
    },[fetchPeopleAPI]);

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
                {!people.result.length ? (
                  <div data-testid='loadPeople-test'>0 people trouvé</div>
                ): (
                    <div data-testid="getPeople-test">
                        <Content peoples={people.result}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
