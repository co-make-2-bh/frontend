import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavbarMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/listings" style={{ cursor: "pointer" }}>
                Listing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/createIssue" style={{ cursor: "pointer" }}>
                Add New Issue
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" style={{ cursor: "pointer" }}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
