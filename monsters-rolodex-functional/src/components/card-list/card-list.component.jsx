import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ itens }) => (
	<div className="card-list">
		{itens.map((item) => {
			return <Card item={item} key={item.id} />;
		})}
	</div>
);

export default CardList;
