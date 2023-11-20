import "./App.css";
import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.trim().toLocaleLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [searchField, monsters]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h2 className="app-title">Monsters Rolodex</h2>

			<SearchBox
				onChangeHangler={onSearchChange}
				placeholder="Search Monsters"
				className=""
			/>

			<CardList itens={filteredMonsters} />
		</div>
	);
};

export default App;
