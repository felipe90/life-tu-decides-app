import React, { useState } from "react";
import Radium from "radium";
import "./ShareButton.scss";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const shareButton = (props) => {
  const styles = {
    width: "90px",
    height: "90px",
    borderRadius: "100px",
    border: "",
    textAlign: "center",
    cursor: "pointer",
    background:
      "linear-gradient(0deg, rgba(0,28,88,0) 0%, rgba(205,48,209,1) 70%)",
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      style={styles}
      className="ShareButton"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
      <img src="/icons/share.svg" alt="share icon" />
      {children}
    </Button>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}>
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={CustomToggle}
        id="dropdown-custom-components"></Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Orange
        </Dropdown.Item>
        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Radium(shareButton);
