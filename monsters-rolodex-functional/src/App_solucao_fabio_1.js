import { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		};

		console.log("constructor");
	}

	componentDidMount() {
		console.log("componentDidMount");
		this.loadMonster();
	}

	loadMonster(search) {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				this.setState(() => {
					if (search)
						return {
							monsters: users.filter((user) =>
								user.name.trim().toLocaleLowerCase().includes(search.trim())
							),
						};
					else return { monsters: users };
				});
			});
	}

	render() {
		console.log("render");
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						const search = event.target.value.toLocaleLowerCase();
						this.loadMonster(search);
					}}
				/>
				{this.state.monsters.map((monster) => {
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
