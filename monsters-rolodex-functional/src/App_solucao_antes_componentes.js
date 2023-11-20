import { Component } from "react";
import "./App.css";

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
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={onSearchChange}
				/>
				{filteredMonsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
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
