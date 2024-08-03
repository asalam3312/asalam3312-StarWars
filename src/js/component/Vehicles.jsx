import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router'

export const Vehicles = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    const handleLearnMore = (uid) => {
        navigate(`AboutVehicles/${uid}`)
    }
    useEffect(() => {
        actions.fetchVehiclesData();

    }, [])
    console.log(store.vehicles)
    return (
        <>
            <div className='container'>
                <h2>Vehicles</h2>
                <hr />
            </div>
            <div className="container py-2 overflow-auto">
                <div className="d-flex flex-nowrap flexrow">
                    {
                        store.vehicles && store.vehicles.length > 0 && store.vehicles.map((vehicle, index) => {
                            const properties = vehicle.properties
                            return (
                                <div className="theCards card mx-1" style={{ minWidth: "18rem" }} key={index}>
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} />
                                    <div>
                                        <h5>Name:{properties.name}</h5>
                                        <p>Model:{properties.model}</p>
                                        <p>Crew:{properties.crew}</p>
                                        <p>Cargo capacity: {properties.cargo_capacity}</p>
                                        <p>vehicle class: {properties.vehicle_class}</p>
                                        <div className='d-flex justify-content-between'>
                                            <div onClick={() => { handleLearnMore(vehicle.uid) }}>Learn More!</div>
                                            <div onClick={() => { actions.addFavorite(properties.name, properties.model) }}>Add to trolley</div>
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
