import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cards.css";
import { Navigate, useNavigate } from "react-router";


//Creo que debería utilizar un useNavigate para que el button "Learn more!" me lleve a /About sin embargo al tratar de vincularlo me surgen dudas de 
//como hacerlo. Creo que tengo que usar un navigate en vez de un link porque debo traer la inforación del card.uid para que siempre lleve una distinta. 
//Sin embargo cada vez que lo intento rompo todo, no paso del tratar de vincular el card con el navigate y por ende el resto no me es posible aún

export const Planets = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    useEffect(() => {
        actions.fetchPlanetsData()
    }, [])
    console.log(store.planets)

    const handleLearnMoreAboutPanets=(uid)=>{
        navigate(`/AboutPlanets/${uid}`)
    }
    return (
        <>
            <div className="container mt-2">
                <h2 className="text-danger">Planets</h2>
                <hr />
            </div>
            <div className="container py-2 overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {
                        store.planets && store.planets.length > 0 && store.planets.map((planet, index) => {
                            const properties = planet.properties
                            return (
                                <div className="theCards card mx-1" style={{ minWidth: "18rem" }} key={index}>
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-tittle">{properties.name}</h5>
                                        <p className="card-text">{properties.population}</p>
                                        <p className="card-text">{properties.terrain}</p>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn-primary" onClick={()=>{handleLearnMoreAboutPanets(planet.uid)}}>Learn more!</button>
                                            <div className="warning" onClick={() => actions.addFavorite(properties.name, planet.uid)}>❤</div>
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


