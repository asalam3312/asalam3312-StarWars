import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'

export const Vehicles = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.fetchVehiclesData();

    }, [])
    console.log(store.vehicles)
    return (
        <>
            <div className="container mt-2">
                <h2 className="text-danger">vehicles</h2>
                <hr />
            </div>
            <div className="container py-2 overflow-auto">
                <div className='d-flex flex-row flex-nowrap'>
                    {
                        store.vehicles && store.vehicles.length > 0 && store.vehicles.map((vehicle, index) => {
                            
                            const properties = vehicle.properties
                            return (
                                <div className="theCards card mx-1" style={{ minWidth: "18rem" }} key={index}>
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..." /> 
                                    <div className="card-body">
                                        <h5 className="card-title">{properties.name}</h5>
                                        <p className="card-text">Gender: {properties.crew}</p>
                                        <p className="card-text">Hair color: {properties.model}</p>
                                        <p className="card-text">Eyes Color: {properties.passengers}</p>
                                        <div className='d-flex justify-content-between'>
                                            <button className="btn btn-primary" onClick={() => { handleLearnMore(vehicle.uid) }}>Learn more!</button>
                                            <a className="like btn-sm" onClick={() => actions.addFavorite(properties.name, vehicle.uid)}>❤</a>
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
