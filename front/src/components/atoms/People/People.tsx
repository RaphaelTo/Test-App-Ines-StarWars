import React from 'react';

interface IPropsPeople {
    peoples?: Array<object>
}

const People: React.FunctionComponent<IPropsPeople> = ({peoples = [
    {
        name: 'Default name',
        height: 'Default height',
        mass: 'Default mass'
    }
]}) => {
    return (
        <div>
            {peoples.map((people:any, key: number) => (
                <div key={key}>
                    <p data-testid="people-test">{people.name}</p>
                    <p data-testid="people-test">{people.height}</p>
                    <p data-testid="people-test">{people.mass}</p>
                </div>
            ))}
        </div>
    )
};

export default People