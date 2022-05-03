import React from "react";
import "./AboutUsStyles.css";
import aboutus from "./about-us.png";
import test2 from "./test2.png";
export default function AboutUsComponent() {
	return (
		<div>
			<div className="about-us-banner">
				<img className="banner-image" src={aboutus} alt={aboutus} />
				<center>
					<h1>ABOUT US</h1>
				</center>
				<center>
					<h2>
						Redback Operations aims to harness the power of IoT, AI and 3D game
						worlds to push
						<br />
						your exercise routine into the future
					</h2>
				</center>
			</div>
			<div className="ui middle aligned stackable grid container">
				<div className="row">
					<div className="eight wide column">
						<h3 className="ui header">RedBack Operations</h3>
						<p>
							Redback Operations aims to harness the power of IoT, AI and 3D
							game worlds to push your exercise routine into the future. We aim
							to provide a community-driven exercise and well-being gaming
							experience with competitive elements. By developing cutting-edge
							technologies and advances in the space of IoT sensors, AI and Game
							development, Redback Operations seeks to provide users with a
							fully immersive experience where they can engage with other users
							both casually and competitively or enjoy individual exercise
							routines all the while receiving real-time feedback and tips on
							how to improve their performance and be the best person that they
							can be.
						</p>
						<h3 className="ui header">Our Mission</h3>
						<p>
							To be able to realize these objectives, Redback Operations has
							enlisted the skills and attributes of data scientists and
							analysts, IoT specialists, Game developers, cyber security
							specialists, web development, and DevOps experts all guided to
							success by a core team of project managers.
						</p>
					</div>
					<div className="six wide right floated column">
						<img
							src={test2}
							alt={test2}
							className="ui large bordered rounded image"
						/>
						//photo above is a testing photo used for the porpose later
					</div>
				</div>
			</div>
		</div>
	);
}
