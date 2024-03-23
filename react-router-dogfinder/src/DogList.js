import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <ul>
        {dogs.map(dog => 
            <li style={{marginBottom: '1rem'}}>
                <Link 
                    style={{textDecoration: 'none'}}
                    to={`/dogs/${dog.name.toLowerCase()}`}>
                    Name: {dog.name} | Age: {dog.age}
                </Link>
            </li>
        )}
    </ul>
  );
}

export default DogList;