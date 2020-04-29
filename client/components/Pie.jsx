import React, { useState, useEffect } from "react";
import * as d3 from "d3";

const Pie = ({ data, x, y }) => {
  const pie = d3.pie().value((d) => d.value);

  console.log(pie(data));

  return (
    <g transform={`translate(${x}, ${y})`}>
      {pie(data).map((d) => (
        <Arc arcData={d} />
      ))}
    </g>
  );
};

export default Pie;
