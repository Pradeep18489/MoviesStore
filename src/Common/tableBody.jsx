import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  getItem = (item, column) => {
    if (column.content) {
      return column.content(item);
    } else {
      return _.get(item, column.path);
    }
  };

  getKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.getKey(item, column)}>
                {this.getItem(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
