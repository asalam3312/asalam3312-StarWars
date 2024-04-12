import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="dropdown">
				<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown link
				</a>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{store.favorites && store.favorites.length > 0 && store.favorites.map((item) => {
						return (
							<div className="d-flex">
								<li key={item.uid}><a className="dropdown-item" href="#">{item.name}</a>
									<button onClick={(e) => {
										e.stopPropagation()
										actions.deleteFavorite(item.name)
									}}>x</button>
								</li>
							</div>
						)
					})}
				</ul>
			</div>
		</nav>
	);
}
