import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 2em;
`

const Property = styled.span`
  font-weight: 500;
  opacity: 0.9;
`

const Value = styled.span`
  opacity: 0.7;
`

export default function TelemetryMetric({property, value}) {

    return (
        <ListItem>
            <Property>{property}</Property>
            <Value>{value}</Value>
        </ListItem>
    )
}