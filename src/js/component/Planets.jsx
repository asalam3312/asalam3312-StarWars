import React, { useState, useEffect } from "react";
import "../../styles/cards.css";

export const Planets = () => {
    const [planetsData, setPlanetsData] = useState({ name: '', population: '', terrain: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/planets");
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                    const data = await response.json()
                    const { resoult } = data;

                    if (resoult && resoult.lenght > 0) {
                        const { name, population, terrain } = resoult[0]
                        setPlanetsData({ name, population, terrain })
                   
                }
            } catch (e) { console.error("An error happened fetching planets info") }
        }
        fetchData()
    }, []);

    return (
        <div className="theCards card">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAANlBMVEXMzMyVlZWWlpbLy8uamprHx8enp6fExMSjo6O8vLySkpKqqqqcnJy5ubmenp7BwcG0tLSvr69znrIuAAAD50lEQVR4nO3Z6W7zNhCFYXHRQlHr/d9sZ4aknTRKkQJFvkJ6nx+JF8mID4Yckuk6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+dkNJeH47rmvrXG31a0/jNTWOSS8P7I+TK17NuX9c9XN52Q0eMuTxKk3dxaomNQ3RxW69uCesWnY+5Rt1nebYdrw9cnFtyf3XjDUXnBnuwb05N9YsP9szvF7fs3t5zQ6mxXJ7VpNdoz/Iz6u9wvsQXztlNh0R42utpdvEYvFsu7pFkp3RKyVlio3PxzJKovddPzg/ynku/9AX+qDC1+PrNzX2XYi0/KalDX4sX5SdRjXaFJX3qb/mc2QKTD9iCvpZ/70v8OSnGGp8U0SZxLm6xwBYL7nT++HJPmDWh7vBlhA4uJq3iEuZqwY3lkrsLeT7r3CejVX9PZdj1UkSjhfK1inoZ5e/4wuY2CTrJgNYPPLVqtUD9A+Lbox9LbK18Bjev9oYN4rVNjMepaaz2c/RRm8ZZbhg3C1oHrV6YS/yLzgS3d865r/HVssnlV5Lcemujk+XmnSR3xFkDC7bmC0O5cl8s6N3mPHtVB79MpFc9+15kiO4tvppbrSktu9C9Oolk5A95zb/XgbLOWbTOUo1PJs3eGq/F1zrJrZ3z0Lf46qjV+ILFlz/Ep0F7bz2ikcFuhVkv0fjGEp8uvJ8QX4i6OPlRfN2o+4wPexDNyVpti2/7e3yXG5Y7OXTS/2F8upmIx7ubyuTobX/32PhkqZu7H8Yn6UWpv/N189D2eo+Nb40+haALFy2q7ObWOr7Gp+klmf/mlt84+9paHzv3yXY3Cu+9rnvfnfdi4ZI27bLj9pr9XsX3WrgsbtPOO7w6790XLsdspKPquUpdNtcilGVcja8cq+zp/bOzRtK6cF02t3VfXTbLuu+7s8K7GFclsW2rJjXb/qxOgWMZkodvRfbZ+T6R6uumzZddx1lOrmScP2DT1r1bxz7bprWdsZQ97/mxW7y1JbOZ7JBhrbvjwwZ/mN3yrPikMUSrus1G3eR80i2Yv2ig4dN5VLZr6pxpk2Y5f3hWfBLVfISznkLJxCgBaMO92PmPsoVLo7D39Kxl3NsZgUyF0qOnMoM+QItPh1/c2hFy1zvnN8nk6tRTWrbfxFIiinalTX2dFeOy+XpqeH/9PJf4QrZ/YbS8yv8srg49g6vqKjDZlUvttLry0w3KL/zp/wf9kOtXDccwDe+vnfI0nFeHdvuQq9o+9jxN+bVO6c9pGu6+Zr4U+vDts3/Uf4r5X9wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Af+Ar+eIUOYXcu0AAAAAElFTkSuQmCC" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planetsData.name}</h5>
                <p className="card-text">Population {planetsData.population}</p>
                <p className="card-text">Terrain: {planetsData.terrain}</p>
                <div className='d-flex justify-content-between'>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    <button>❤</button>
                </div>
            </div>
        </div>
    )
}

