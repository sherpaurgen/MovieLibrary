import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item); // content: <Like ...> or <Delete .../> check moviesTable.jsx
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
////
// data item is below
// [
// {
//   _id: "5b21ca3eebkjsdf099",
//   title: "Aero Fun",
//   genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
//   numberInStock: 7,
//   dailyRentalRate: 3.5,
// },........... ]
// columns ma yo cha [
//   { path: "title", label: "Title" },
//   { path: "genre.name", label: "Genre" },
//   { path: "numberInStock", label: "Stock" },
//   { path: "dailyRentalRate", label: "Rate" }, ....]
//  check https://lodash.com/docs/#get
// var object = { 'a': [{ 'b': { 'c': 3,'vv':[9,8,7] } }] };
//
// _.get(object, 'a[0].b.vv[1]');
// gives => 8
