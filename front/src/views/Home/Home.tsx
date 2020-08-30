import React, { useState , useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import Header from '../../components/templates/Header/Header';
import Content from "../../components/templates/Content/Content";
import './Home.css';

const filterTuples: [string, string, string, string] = ['Sans filtre', 'Nom', 'Sexe', 'Planète'];

const Home: React.FunctionComponent = () => {
    const [name, setName] = useState({oldName: '', newName: ''});
    const [skip, setSkip] = useState(0);
    const [activeButton , setActiveButton] = useState(true);
    const [people, setPeople] = useState({result : []});

    const searchNameAPI = async () => {
        let valueSkip: number = skip;
        const getPeopleByName : AxiosResponse = await axios.get(`http://localhost:4000/api/v1/people/all?name=${name.newName}`);

        if(name.newName !== name.oldName)  valueSkip = 0;
        if(getPeopleByName.data.type === "error") return setPeople({result: []});
        if(getPeopleByName.data.result.length !== 5) setActiveButton(false);

        if(getPeopleByName.data.result.length === 5){
            const countPeople: AxiosResponse = await axios.get(`http://localhost:4000/api/v1/people/all?name=${name.newName}&skip=${valueSkip + 5}`);
            if(countPeople.data.result.length === 5) {
                setSkip(valueSkip + 5);
                console.log(countPeople)
            }
            setActiveButton(true);
        }

        setPeople({result: getPeopleByName.data.result});
    };

    const seeMorePeopleName = async () => {
        const getPeopleByName : AxiosResponse = await axios.get(`http://localhost:4000/api/v1/people/all?name=${name.newName}&skip=${skip}`);

        const arrayPeople: Array<object> = people.result;
        getPeopleByName.data.result.map((item: object) => arrayPeople.push(item));
        //@ts-ignore
        setPeople({result: arrayPeople});

        const checkFuturPeople: AxiosResponse = await axios.get(`http://localhost:4000/api/v1/people/all?name=${name.newName}&skip=${skip + 5}`);
        if(checkFuturPeople.data.type === "error") return setActiveButton(false);

        if(checkFuturPeople.data.result.length === 5)
            setSkip(skip + 5);
        else
            setActiveButton(false);
    };

    useEffect(() => {
        (async () => {
            await searchNameAPI();
        })();
    },[name])

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
                    value={name.newName}
                    onChangeInput={(e: any) => setName({ newName: e.target.value, oldName: name.newName})}
                />
                {!people.result.length ? (
                    <div data-testid='loadPeople-test'>0 people trouvé</div>
                ): (
                    <div data-testid="getPeople-test">
                        <Content peoples={people.result} onClickButton={seeMorePeopleName} activateButton={activeButton}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
