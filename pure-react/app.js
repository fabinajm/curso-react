const Person = (props) => {
	return React.createElement("div", { key: "dv" + props.id }, [
		React.createElement("h1", { key: "h1" + props.id }, props.name),
		React.createElement("p", { key: "p" + props.id }, props.occupation),
	]);
};
const App = () => {
	return React.createElement("div", {}, [
		React.createElement(
			"h1",
			{ className: "title", key: "1" },
			"React IS Rendered"
		),
		React.createElement(
			Person,
			{ name: "Fabio", occupation: "developer", id: 1, key: "person1" },
			null
		),
		React.createElement(
			Person,
			{ name: "Fabio 2", occupation: "developer", id: 2, key: "person2" },
			null
		),
		React.createElement(
			Person,
			{ name: "Fabio 3", occupation: "po", id: 3, key: "person3" },
			null
		),
	]);
};

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(React.createElement(App));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
