import React from "react";
import Badge from "./Badge";

function ImpactBadge({impact, className='', ...rest}) {
    const impact_color = {
        "Low": "green",
        "Medium": "yellow",
        "High": "red"
    };

    const color = `bg-${impact_color[impact.name]}-100 text-${impact_color[impact.name]}-800`

    return <Badge text={impact.name} color={color} className={className} {...rest}/>
}

export default ImpactBadge;
