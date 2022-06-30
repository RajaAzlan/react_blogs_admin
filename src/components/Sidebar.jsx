import React from 'react';
import { Newspaper } from 'react-bootstrap-icons';
import 'assets/scss/layout/_sidebar.scss';
import { NavLink } from 'react-router-dom';
function sidebar() {
  return (
    <aside className="sidebar position-fixed">
      <div className="logo position-relative">
        <p className="text-center mb-0 text-uppercase">Blogs Admin</p>
      </div>
      <div className="sidelinks-wrapper">
        <ul className="list-unstyled p-0">
          <li>
            <NavLink
              to="/blogs"
              activeClassName="active"
              className="d-flex flex-wrap align-items-center"
            >
              <Newspaper className="position-relative" />
              <p className="mb-0">Blogs</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default sidebar;
