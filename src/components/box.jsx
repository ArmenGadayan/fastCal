import React, { Component } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { Icon, IconSize } from "@blueprintjs/core";

const Box = () => {
  return (
    <div>
      <Card interactive={true} elevation={Elevation.TWO}>
        <h5>
          <a href="#">Card heading</a>
        </h5>
        <p>Card content</p>
        <Button>Submit</Button>
      </Card>
    </div>
  );
};

export default Box;
