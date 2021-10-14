import React from "react";
import { useContext as useDappContext } from "@elrondnetwork/dapp";
import { Navbar as BsNavbar, NavItem, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { routeNames } from "routes";
import { ReactComponent as ElrondLogo } from "assets/img/elrond.svg";
import { dAppName } from "config";
import Account from "./Account";
import Settings from "./Settings";
import { ReactComponent as Union } from "assets/img/Union.svg";

const Navbar = () => {
  const { loggedIn } = useDappContext();

  return (
    <BsNavbar className="bg-white shadow-sm px-4 py-3">
      <div className="container">
        <NavItem className="d-flex align-items-center nav-logo">
          <ElrondLogo className="elrond-logo" />
          <span className="dapp-name">{dAppName}</span>
        </NavItem>

        <Nav className="ml-auto">
          {loggedIn === true ? (
            <div
              className="d-flex align-items-center logged-in"
              style={{ minWidth: 0 }}
            >
              <Account />
              {/* <Settings /> */}
            </div>
          ) : (
            <div className="connect-btns">
              <Link
                to={routeNames.unlock}
                className="btn primary"
                data-testid="loginBtn"
              >
                <span>
                  <Union />
                </span>
                Connect now
              </Link>
            </div>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

export default Navbar;
