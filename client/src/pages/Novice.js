import React from "react";
import axios from "axios";
import News from "../components/rss/News";

class Novice extends React.Component {
	render() {
		return (
			<React.Fragment>
				<News />
			</React.Fragment>
		);
	}
}
export default Novice;
