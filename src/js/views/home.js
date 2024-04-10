import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";

export const Home = () => (
	<div>
		<h1>characters</h1>
		<Characters />
		<h1>Planets</h1>
		<Planets />
	</div>
);
