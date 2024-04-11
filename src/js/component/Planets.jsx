import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Planets = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.fetchPlanetsData()
    }, [])
    return (
        <>
            <div className="container mt-2">
                <h2 className="danger">Planets</h2>
                hr
            </div>
            <container className="py-2 overflow-auto">
                <d-flex className="flex-row flex-nowrap">
                    {
                        store.planets && store.planets > 0 && store.planets.map((item, index)=>{
                            <div className="card" style={{minwidht:"18rem"}}key={index}>
                                <img src="" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-tittle">{item.name}</h5>
                                    <p className="card-text">{item.population}</p>
                                    <p className="card-text">{item.terrain}</p>
                                    <div className="d-flex justyfy-content-between">
                                        <button >Learn more!</button>
                                        <button className="warning">❤</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </d-flex>
            </container>
        </>
    )
}

