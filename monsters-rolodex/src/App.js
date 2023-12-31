import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};

		console.log("constructor");
	}

	componentDidMount() {
		console.log("componentDidMount");

		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				this.setState(() => {
					return { monsters: users };
				});
			});
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		console.log("render");

		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.trim().toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<h2 className="app-title">Monsters Rolodex</h2>
				<SearchBox
					onChangeHangler={onSearchChange}
					placeholder="Search Monsters"
					className="ß"
				/>
				<CardList itens={filteredMonsters} />
			</div>
		);
	}
}

export default App;

/*
<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Hi {this.state.name.firstName} {this.state.name.lastName} is work at{" "}
						{this.state.company}.
					</p>
					<button
						
						onClick={async () => {
							await this.setState({
								name: { firstName: "Fabio 2", lastName: "Abinajm" },
							});
							console.log(this.state);
					}}
					
						onClick={() => {
							this.setState(
								(state, props) => {
									return {
										name: { firstName: "Fabio 2", lastName: "Abinajm" },
									};
								},
								() => {
									console.log(this.state);
								}
							);
						}}
					>
						Alterar Nome
					</button>
				</header >
*/
