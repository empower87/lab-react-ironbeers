import React from 'react';


function NewBeer(props) {
    return (
        <div>
            <form>
                <input type="text">Name</input>
                <input type="text">Tagline</input>
                <input type="text">Description</input>
                <input type="text">First Brewed</input>
                <input type="text">Brewer Tips</input>
                <input type="text">Attenuation Level</input>
                <input type="text">Contributed By</input>
            </form>

        </div>
    );
}

export default NewBeer;