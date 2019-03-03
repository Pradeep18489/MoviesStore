import React, { Component } from "react";
class TableHeader extends Component {
  raiseSort = path => {
    let sortColumn = { ...this.props.sortColumn };
    if (path === sortColumn.path) {
      sortColumn.order = this.props.sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  getSortIcon = column => {
    if (column.path !== this.props.sortColumn.path) {
      return null;
    }
    if (this.props.sortColumn.order === "asc") {
      return <i className="fa fa-sort-asc" />;
    }

    return <i className="fa fa-sort-desc" />;
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              style={{ cursor: "pointer" }}
            >
              {column.label}
              {this.getSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
