import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DogDetails = ({ dogs, names }) => { 
    const INITIAL_STATE = {name: '', age: null, src: '', facts: []}
    const [dog, setDog] = useState(INITIAL_STATE);
    const {name} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!names.includes(name.toLowerCase())) navigate('/dogs');
        function getDog() {
            setDog(dogs.filter(dog => dog.name.toLowerCase() === name)[0]);
        }
        if(name) getDog();
    }, [name]);

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} style={{width: '200px'}}/>
            <h3>Age: {dog.age}</h3>
            <ul>
                {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
        </div>
    );
}

export default DogDetails;