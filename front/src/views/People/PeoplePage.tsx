import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import PeopleID from "../../components/atoms/PeopleID/PeopleID";
import './PeoplePage.css';

const PeoplePage: React.FunctionComponent = () => {

    const [people, setPeople] = useState();
    const { id } = useParams();

    const getPeopleId = async () => {
        const personnage = await axios.get(`http://localhost:4000/api/v1/people/byId/${id}`);
        setPeople(personnage.data.result);
    };

    useEffect(() => {
        (async () => {
            await getPeopleId()
        })();
    });

    return (
        <>
            <div className='people-page-title'>
                <p>ID: </p>
                <p>Name: </p>
                <p>Height :</p>
                <p>Mass: </p>
                <p>Hair color :</p>
                <p>Skin color :</p>
                <p>Eye color :</p>
                <p>Birth year :</p>
                <p>Gender :</p>
                <p>Homeworld :</p>
                <p>Created :</p>
                <p>Edited :</p>
                <p>Url :</p>
                <p>Films :</p>
                <p>Species :</p>
                <p>Starships :</p>
                <p>Vehicles :</p>
            </div>
            <PeopleID people={people}/>
            </>
    )
};

export default PeoplePage;