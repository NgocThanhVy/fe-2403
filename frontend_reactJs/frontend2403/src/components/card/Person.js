import React from 'react';
import PersonDisplay from './PersonDisplay';


const Person = () => {
    const info = [
        {
            id: '1',
            name: 'John',
            age: 22,
            slogan: ""
        },
        {
            id: '2',
            name: 'Anna:',
            age: 2,
            slogan: ""
        },
        {
            id: '3',
            name: 'Jade',
            age: 21,
            slogan: ""
        }

    ];
    return (
        <div className='person'>
            {
                info.map((item, index) => {
                    return (
                        <PersonDisplay person={item} key={item.id}>
                            <h1>this is apple</h1>
                        </PersonDisplay>
                    );
                })}
        </div>
    );

};

export default Person;  