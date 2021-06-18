import React, { Component } from "react";

class ApiTableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>title</th>
          <th>Complated</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  }
}
export default ApiTableHeader;
