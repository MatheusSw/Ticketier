import React from "react";
import Badge from "./Badge";

function ImpactBadge({impact}) {
    const impact_dict = {
        "Low": "green",
        "Medium": "yellow",
        "High": "red"
    };

    const color = `bg-${impact_dict[impact.name]}-100 text-${impact_dict[impact.name]}-800`

    return <Badge text={impact.name} color={color}/>
}

export default ImpactBadge;
