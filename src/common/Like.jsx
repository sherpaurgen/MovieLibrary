import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

export default class Like extends Component {
  render() {
    let classes = fasHeart;
    if (!this.props.liked) classes = farHeart;

    const movie = this.props.movie;

    return (
      <FontAwesomeIcon
        icon={classes}
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
      />
    );
  }
}
