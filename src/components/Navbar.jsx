import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImUserTie, ImGithub, ImLinkedin } from "react-icons/im";
import { TbPokeball } from "react-icons/tb";
import "./Navbar.css";

const NaviBar = () => {
  return (
    <>
      <Navbar className="navbar-light naviBar" expand="lg">
        <Container>
          <Link className="btn navBtn" to="/">
            <TbPokeball /> Pokedex
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="btn navBtn" to="/about">
                <ImUserTie /> About
              </Link>
              <a className="btn navBtn" href="https://github.com/higashi04">
                <ImGithub /> Github Profile
              </a>
              <a
                className="btn navBtn"
                href="https://www.linkedin.com/in/cesar-higashi-8638b317b/"
              >
                <ImLinkedin /> LinkedIn Profile
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NaviBar;
