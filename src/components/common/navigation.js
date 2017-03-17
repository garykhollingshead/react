import React from "react";
import {Link, IndexLink} from "react-router";
import {Menu} from "antd";

const navigation = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      >
      <Menu.Item>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
      </Menu.Item>
      <Menu.Item>
        <Link to="/programs" activeClassName="active">Brands</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/programs" activeClassName="active">Products</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/programs" activeClassName="active">Customers And Programs</Link>
      </Menu.Item>
    </Menu>
  );
};

export default navigation;