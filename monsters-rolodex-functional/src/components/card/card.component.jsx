import "./card.styles.css";

const Card = ({ item }) => {
	const { name, email, id } = item;

	return (
		<div className="card-container" key={id}>
			<img
				alt={`Monster ${name}`}
				src={`https://robohash.org/${id}?set=set2`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
