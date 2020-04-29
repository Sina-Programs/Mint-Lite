import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Path = styled.path`
  fill: ${(props) => d3.schemePaired[props.index]};
  cursor: pointer;
  stroke: black;
`;

const Arc = ({ arcData }) => {
  const [radiusAdd, setRadiusAdd] = useState(0);
  const arc = d3
    .arc()
    .innerRadius(15 + radiusAdd)
    .outerRadius(200 + radiusAdd);

  const mouseOver = () => {
    setRadiusAdd(20);
  };

  const mouseOut = () => {
    setRadiusAdd(0);
  };

  return (
    <Path
      d={arc(arcData)}
      index={arcData.data.index}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    />
  );
};

const Pie = ({ data, x, y }) => {
  const pie = d3.pie().value((d) => d.value);

  return (
    <g transform={`translate(${x}, ${y})`}>
      {pie(data).map((d, i = 0) => (
        <Arc arcData={d} key={i++} />
      ))}
    </g>
  );
};

export default Pie;
