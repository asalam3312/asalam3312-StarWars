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
			character: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
					fetchData: async()=>{
					let store = getStore()
					try{
						const response = await fetch("https://www.swapi.tech/api/people");
						if(!response.ok){
							throw new Error(response.statusText)
						}
						const data = await response.json()
						const {resoult} = data;
						if(resoult && resoult.lenght > 0){
							const {name, gender, hair_color, eye_color}= resoult[0]
							setCharactersData({name, gender, hair_color, eye_color})
						}
						console.log(data)
						setStore({character: [...store.character, data]})
					}catch(e){
						console.error("An error happended fetching characters data", e)
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
