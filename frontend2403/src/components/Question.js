import React, { useState } from "react";
import './styles/Question.css';

function Question() {

    const [inputs, setInputs] = useState("");
    const [isSubmit, setIsSubmit] = useState("");
    const [error, setError] = useState("");
    const [count, setCount] = useState(0);



    const capitalize = (inputs) => {
        return String(inputs).charAt(0).toUpperCase() + String(inputs).slice(1)
    }

    const capitalizeSentence = (sentence) => {
        let words = sentence.split(' ')

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        }
        return words.join(' ')
    }
    const onInput = (event) => {
        setInputs(capitalizeSentence(event.target.value));

    }


    // const onSubmits = () => {
    //     if (!inputs.length) {
    //         setError('this is not a valid')
    //     } else {
    //         setIsSubmit(inputs)
    //         setError('')

    //     }
    //     alert('Please enter')
    // };


    // const onKey = (event) => {
    //     if (event.key === 'Enter') {
    //         onSubmits()

    //     }
    // }




    const onSubmits4 = () => {
        if (!inputs || !inputs.length) {
            setError('this is not a valid')
        } else {
            setIsSubmit(capitalizeSentence(inputs))
            setError('')

        }

    };


    const onKey4 = (event) => {
        if (event.key === 'Enter') {
            onSubmits4()

        }
    }

    const handleCoppy = (event) => {
        event.preventDefault()
        alert('Coppy me')
        setCount(next => next + 1)

    };

    const handleError = (event) => {
        event.target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAP1BMVEXs7/Tr7vPu8fbt8PXo6/Dl6O3x9Pnh5Onc3+TV2N3Mz9T09/zGyc7DxsvZ3OG/wsevsreprLG3ur+eoaaVmJ39NwdcAAADRElEQVR4nO3ci27iMBAFUM+MH7Ed8oL//9adMdCl0u6qSKDE7D0SrYSEyMX2eJKGuvBBnP8gjj6I+yjyQfb+LAEAAAAAAAAAAAD+V3tfH34lxx8EYY4KYY7qs8LsXU5fae9tDgD2tPctIq+EMEeFMEeFMEe1984AAAAAAAAAcGR7n7e/EsIcFcIcFcI89Qbu+tN+ef/e6vnesu89iaPbFnB/vP1t30P0qOV65Bwjx8peo8k9X1/sNgMbBomxVh5y8MQkzNJlGGabWlKr5HE7n8dATtdNp3dSiA6CJQrjcrlcziXQ9Z8QcId5qIWJnHVU1rnk5EVHJgSKvPehPY+kstQ4LOf1NFG0CEI+2OAIW23Y+wCfYaMSa9oua0lR2exqYVJwrFW7szDClcZ1LaHG+5FT8CElq9F9VWjtL7hOyzrqrBJ/bwh01QxJ61pXUYyPsaxLqqJr/rb3W0FLg9YCor5qGlH12zpqcdbtUvcX6290QHRoBs/2VEdEpKZlzew1jW78LYxuPk7DBCbfVxiuumS2FOlrEMhCsU9T0nnXVRjS/nJalsHC3DZ9Wyi6xww5Mfuu1oweOQ+bhnFtcrWnrCYzTTmJ+J0P70niOG1LbpXsPjIWJuScnBbrnQ/vKTqfOMxLaaNyn1MakFLJwXV3WuOjlG0OzGyNmZVlbaJ1ll3DdIWsO5vmLbf+WdqJmv4mm2W+s25GmxnxHMp2GkIU3zZNLWuUpjxYO9NXB0AaQdxw0jQxWvevnXKMPuskI83VWRirAJHyvI1D0Bi6cqJPuZTBWYPT16qh9oUW8dM8z6NOLe39pzKeyuQj+96uN7VPnijqHqlxTqWUUX/mQXtp+n1FrRMsreuPlUnn1kmNY7lOuLaLdhXmRnSpUEjDlPOkp2Uce7w4c6PtmF0AiFrN2uVZ3XD6amS+Ed0xW9cs1jGL6/Ri85Vd/m8nZVqbWx8g/c6zFuXhbydWr/sNY8tE2t8EqPWZ3NUZ5j90OyQAAAAAAAAAAAAAAAAAAPCxvm43eLjroN2v+/XE41cr3cPjL69xP33N9bk/vsbRD1/z/W3wDdqjQpijQpijQpijQpijQpij2rvPBQAAAAAAAAAAAACAd/kFigQ9lc65MvsAAAAASUVORK5CYII="

    };


    return (
        <>
            <div className="question">
                {/* <h1>Question 3</h1>
                <p>Display3:{isSubmit}</p>
                <div className="question3">
                    <input
                        type="text"
                        placeholder="abc"
                        className="question3_input"
                        value={inputs}
                        onChange={onInput}
                        onKeyDown={onKey}
                    />
                    <button onClick={onSubmits} className="question3_button">Button</button>

                </div>
                <div className="question3_error">{error}</div> */}


                <h1>Question 4: </h1>
                <p>Display4:{isSubmit}</p>
                <div className="question3">
                    <input
                        type="text"
                        placeholder="abc"
                        className="question3_input"
                        value={inputs}
                        onChange={onInput}
                        onKeyDown={onKey4}
                    />
                    <button onClick={onSubmits4} className="question3_button">Button</button>

                </div>
                <div className="question3_error">{error}</div>
                <p onCopy={handleCoppy}>Coppy me!</p>
                <p>Count:{count}</p>

                <div className="question3">
                    <img src="0.gstatic.com/images?q=tbn:ANd9GcTN6FOuwamIbgS0-ed-fjvllqBjujbCrKRVsQ&s" onError={handleError} />
                </div>
            </div>

        </>
    )

}

export { Question };