import React, { useState, useEffect } from "react";
import * as d3 from "d3";

const Pie = ({ data, x, y }) => {
  return <g transform={`translate(${x}, ${y})`} />;
};

export default Pie;
