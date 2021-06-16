import React, { Component } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import PropTypes from "prop-types";
class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isLiked, onLike, id } = this.props;
    return (
      <>
        <span onClick={() => onLike(id)}>
          {isLiked ? (
            <AiOutlineHeart className="heart-icon" size="2rem" color="red" />
          ) : (
            <AiFillHeart className="heart-icon" size="2rem" color="red" />
          )}
        </span>
      </>
    );
  }
}

Like.propTypes = {
  isLiked: PropTypes.bool,
  onLike: PropTypes.func,
  id: PropTypes.number,
};
export default Like;
