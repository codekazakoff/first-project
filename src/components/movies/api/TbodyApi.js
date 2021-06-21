import React, { Component } from "react";
import PropTypes from "prop-types";
import TrApi from "./TrApi";

class TbodyApi extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { api, onLike, onDelete, onUpdate } = this.props;
    return (
      <>
        {api.map(({ id, userId, title, completed }, index) => (
          <TrApi
            key={id || index}
            id={id}
            index={index}
            userId={userId}
            title={title}
            completed={completed}
            onLike={onLike}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </>
    );
  }
}

TbodyApi.propTypes = {
  api: PropTypes.array,
  onLike: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default TbodyApi;
