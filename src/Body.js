import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();

	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body__info">
				<img
					// src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png"
					src={discover_weekly?.images[0].url}
					alt=""
				/>

				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>
						{discover_weekly?.description ||
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci illo, illum numquam autem officia corporis dicta ex laboriosam obcaecati dolores."}
					</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon />
					<FavoriteIcon />
					<MoreHorizIcon />
				</div>
			</div>
		</div>
	);
}

export default Body;
