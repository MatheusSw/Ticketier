import React from "react";
import Badge from "./Badge";

function StatusBadge({status, className='', ...rest}) {
    const status_color = {
        "Open": "green",
        "Work in progress": "blue",
        "Closed": "yellow"
    };

    const color = `bg-${status_color[status.name]}-100 text-${status_color[status.name]}-800`

    return <Badge text={status.name} color={color} className={className} {...rest}/>
}

export default StatusBadge;
