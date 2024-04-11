const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			characters: null,
			planets: null,
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			/* fetchCharactersData: async()=>{
				// let store = getStore()
				try{
					const response = await fetch("https://www.swapi.tech/api/people");
					console.log(response)
					const data = await response.json()
					if(response.ok){
			//acá estaba el setStore			
						const characterData = []
						for (const eachCharacter of data.results){
							const responseEachCharacter = await fetch(`https://www.swapi.tech/api/people/${eachCharacter.uid}`)
							characterData = await responseEachCharacter.json()
							if(characterData.ok){
								characterData.push(characterData.result.properties)
							
							}
							console.log(characterData)
						}
						setStore({characters: data.results}) //remplazar este por todos ellos info detallada y luego hacer el setStore a esa información
						return true
					}
					setStore({characters: false})
					return false
				}catch(e){
					console.error("An error happended fetching characters data", e)
					setStore({characters: false})
					return false
				}
			}, */
			fetchCharactersData: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();
					if (response.ok) {
						const charactersData = [];
						for (const character of data.results) {
							const responseEachCharacter = await fetch(`https://www.swapi.tech/api/people/${character.uid}`); // respuesta en general
							const characterData = await responseEachCharacter.json(); //respuesta traducida a js
							if (responseEachCharacter.ok) { //si la respuesta general es ok
								charactersData.push(characterData.result.properties); // respuesta traducida hace push 
							}
						}
						setStore({ characters: charactersData }); // Seteamos todos los datos de los personajes en el store
						return true;
					}
					setStore({ characters: false });
					return false;
				} catch (e) {
					console.error("An error happened fetching characters data", e);
					setStore({ characters: false });
					return false;
				}
			},

			fetchMoreCharactersData: async()=>{
				try{
					const response = await fetch(`https://www.swapi.tech/api/people/${store}`);
			
					const data = await response.json()
					console.log(data)
					if(response.ok){
						// setStore()
					}
				}catch(e){
					console.error(e)
				}
			},

			addFavorite: (name, uid)=>{
				const store = getStore()

				setStore({favorites: [...store.favorites, {"name": name, "uid": uid}]})
			},
			deleteFavorite: (name)=>{
				const store = getStore()

				setStore({favorites: store.favorites.filter(item => item.name != name)}) //retorna mismo array pero con nombre distinto al que quiero borrar
			},

			fetchPlanetsData: async()=>{
				try{
					const response = await fetch("https://www.swapi.tech/api/planets");
					console.log(response)
					const data = await response.json()
					if(response.ok){
						setStore({planets:data.results})
					}
					setStore({planets: false})
					return false
				}catch(e){
					console.error("An error happended fetching planets data",e)
					setStore({planets: false})
					return false
				}
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
