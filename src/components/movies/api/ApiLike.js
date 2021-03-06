import React, { Component } from "react";
import PropTypes from "prop-types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

class ApiLike extends Component {
  render() {
    const { isLiked, onLike, id } = this.props;
    return (
      <span onClick={() => onLike(id)}>
        {isLiked ? (
          <AiFillHeart className="heart-icon" size="2rem" color="red" />
        ) : (
          <AiOutlineHeart className="heart-icon" size="2rem" color="red" />
        )}
      </span>
    );
  }
}
ApiLike.propTypes = {
  isLiked: PropTypes.bool,
  onLike: PropTypes.func,
  id: PropTypes.number,
};

export default ApiLike;
