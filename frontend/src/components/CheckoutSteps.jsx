import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>
              <strong>SignIn</strong>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>SignIn</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>
              <strong>Shipping</strong>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link>
            <strong>Shipping</strong>
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <NavLink>
              <strong>Payment</strong>
            </NavLink>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <strong>Payment</strong>
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <NavLink>
              <strong>Place Order</strong>
            </NavLink>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <strong>place Order</strong>
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
