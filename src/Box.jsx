import React, {Component} from "react";

class Box extends Component{
	render() {
		return(
			<div className="box">
				<img src={this.props.img}></img>
        	<center>{this.props.name}</center>
        	<h4>{this.props.profession}</h4>
        	<h6>{this.props.poste}</h6>
			</div>
		);
	}
}

export default Box;