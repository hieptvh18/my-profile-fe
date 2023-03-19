import React, { useState } from "react";
import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "bootstrap";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="container-fluid dashboard-wrapper">
      <header className="d-flex justify-content-between">
        <h2>Dashboard</h2>
        <div className="header-right notifi">
          <div className="dropdown">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBell} fontSize={"25px"} />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  1 customer subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      
      <section className="row">
        <aside className="main-content__sidebar col-2">
          <ul className="">
            <li className="sidebar-nav__item">
              <a href="/admin/dashboard" className="sidebar-nav__item-link">
                Dashboard
              </a>
            </li>
            <li className="sidebar-nav__item">
              <a href="/admin/profile" className="sidebar-nav__item-link">
                Profile
              </a>
            </li>
            <li className="sidebar-nav__item">
              <a href="" className="sidebar-nav__item-link">
                Blog
              </a>
            </li>
            <li className="sidebar-nav__item">
              <a href="/admin/contact" className="sidebar-nav__item-link">
                Contact
              </a>
            </li>
          </ul>
        </aside>
        <div className="col-10">
        <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AdminLayout;
