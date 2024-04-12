import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';



export const Characters = () => {

    const { store, actions } = useContext(Context);


    useEffect(() => {
        actions.fetchCharactersData()
    }, [])
    console.log(store.characters)

    return (
        <>
            <div className="container mt-2">
                <h2 className="text-danger">Characters</h2>
                <hr />
            </div>
            <div className="container py-2 overflow-auto">
                <div className='d-flex flex-row flex-nowrap'>
                    {
                        store.characters && store.characters.length > 0 && store.characters.map((character, index) => {
                            
                            const properties = character.properties
                            return (
                                <div className="theCards card mx-1" style={{ minWidth: "18rem" }} key={index}>
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." /> 
                                    <div className="card-body">
                                        <h5 className="card-title">{properties.name}</h5>
                                        <p className="card-text">Gender: {properties.gender}</p>
                                        <p className="card-text">Hair color: {properties.hair_color}</p>
                                        <p className="card-text">Eyes Color: {properties.eye_color}</p>
                                        <div className='d-flex justify-content-between'>
                                            <button className="btn btn-primary" onClick={() => { handlerLearnMore }}>Learn more!</button>
                                            <div className="warning" onClick={() => actions.addFavorite(properties.name, character.uid)}>❤</div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>

        </>
    )
}



