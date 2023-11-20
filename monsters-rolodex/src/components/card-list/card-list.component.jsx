import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
	render() {
		const { itens } = this.props;

		return (
			<div className="card-list">
				{itens.map((item) => {
					return <Card item={item} key={item.id} />;
				})}
			</div>
		);
	}
}

export default CardList;
