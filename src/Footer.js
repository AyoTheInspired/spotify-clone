import React from "react";
import "./Footer.css";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import {Grid, Slider} from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Usher_-_Confessions_album_cover.jpg/220px-Usher_-_Confessions_album_cover.jpg"
					alt=""
					className="footer__albumLogo"
				/>
				<div className="footer__songInfo">
					<h4>Yeah!</h4>
					<p>Usher</p>
				</div>
			</div>

			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PlayCircleOutlineOutlinedIcon
					fontSize="large"
					className="footer__icon"
				/>
				<SkipNextIcon className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>

			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>

					<Grid item>
						<VolumeDownIcon />
					</Grid>

					<Grid item xs>
						<Slider className="mui__icon"/>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
