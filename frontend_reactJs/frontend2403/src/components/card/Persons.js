import React from 'react';
import PersonsItem from './PersonsItem';

const Persons = () => {
    const data = [
        {
            id: 1,
            Name: 'John',
            Age: 36,
            Slogan: ""
        },
        {
            id: 2,
            Name: 'Anan',
            Age: 3,
            Slogan: ""
        },
        {
            id: 3,
            Name: 'nick',
            Age: 6,
            Slogan: ""
        }
    ];
    return (
        <div className="person">
            {
                data.map((item) => {
                    return (
                        <PersonsItem key={item.id} persons={item}>
                            <h1>This is slogan</h1>
                        </PersonsItem>
                    )


                })
            }
        </div>


    )
}

export default Persons;