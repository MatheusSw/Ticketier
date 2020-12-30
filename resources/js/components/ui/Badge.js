import React from "react";
import classNames from "classnames";

function Badge({text, color, className='',...rest}) {
    return <p className={classNames('px-2 inline-flex text-xs leading-5 font-semibold rounded-full', color, className )} {...rest}>
        {text}
    </p>
}

export default Badge;
