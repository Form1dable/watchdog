import React from "react";
import {ListItem, Value, Property} from "./TelemetryStyles";

export default function TelemetryMetric({property, value}) {

    return (
        <ListItem>
            <Property>{property}</Property>
            <Value>{value}</Value>
        </ListItem>
    )
}