import React from 'react';
import './PeopleID.css';

interface IPropsPeopleID {
    people?: any
}

const PeopleID: React.FunctionComponent<IPropsPeopleID> = ({people= {
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/"
    ],
    "species": [],
    "starships": [],
    "vehicles": [
        "http://swapi.dev/api/vehicles/30/"
    ],
    "_id": "5f4bd42454174903ed490b5b",
    "name": "Leio Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
    "homeworld": "http://swapi.dev/api/planets/2/",
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z",
    "url": "http://swapi.dev/api/people/5/",
    "__v": 0
}}) => {

    return (
      <>
          <div className="people-id">
              <p>{people._id}</p>
              <p>{people.name}</p>
              <p>{people.height}</p>
              <p>{people.mass}</p>
              <p>{people.hair_color}</p>
              <p>{people.skin_color}</p>
              <p>{people.eye_color}</p>
              <p>{people.birth_year}</p>
              <p>{people.gender}</p>
              <p>{people.homeworld}</p>
              <p>{people.created}</p>
              <p>{people.edited}</p>
              <p>{people.url}</p>
              {people.films.map((film: string, key: number) => (
                  <select key={key}>
                      <option>{film}</option>
                  </select>
              ))}
              {people.species.map((specie: string, key: number) => (
                  <select key={key}>
                      <option>{specie}</option>
                  </select>
              ))}
              {people.starships.map((starship: string, key: number) => (
                  <select key={key}>
                      <option>{starship}</option>
                  </select>
              ))}
              {people.vehicles.map((vehicle: string, key:number) => (
                  <select key={key}>
                      <option>{vehicle}</option>
                  </select>
              ))}
          </div>
      </>
  )
};

export default PeopleID;