import React, { Component } from "react";
import Switch from "../../src";

export default class DEMO extends Component {
	render() {
		return (
			<div
				style={{
					height: 400,
				}}
			>
				<Switch defaultChecked autoFocus />
				<Switch size="small" /> <Switch disabled /> <Switch checked disabled />
				<Switch checkedChildren="on" unCheckedChildren="off" />
			</div>
		);
	}
}
