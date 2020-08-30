import React from "react";
import { Link } from "react-router-dom";
import "./People.css";

interface IPropsPeople {
  peoples?: Array<object>;
}

const People: React.FunctionComponent<IPropsPeople> = ({
  peoples = [
    {
      name: "Default name",
      height: "Default height",
      mass: "Default mass",
    },
  ],
}) => {
  return (
    <div className="atom-people">
      {peoples.map((people: any, key: number) => (
        <Link to={`/people/${people._id}`}>
          <div className="atom-people-items" key={key}>
            <p data-testid="people-test">{people.name}</p>
            <p data-testid="people-test">{people.height}</p>
            <p data-testid="people-test">{people.mass}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default People;
