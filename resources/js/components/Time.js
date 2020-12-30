import React from "react";
import moment from "moment";

function Time({dateTime, locale = 'en', written = true, format = 'Do MMM YYYY H:mm:ss', ...rest}) {

    if (locale !== 'en'){
        moment.locale(locale);
    }

    let date = moment(dateTime);
    const attrDateTime = date.format('DD MMM YYYY H:mm:ss'); //To ensure Accessibility, probably not optimal, and I'm open to suggestions

    if (written) {
        date = date.startOf('hour').fromNow(); //an hour ago, 12 hours ago, X months ago, etc...
    } else {
        date = date.format(format); //Default is 29th Sep 2020 11:28:35 (24-hour)
    }

    return (
        <time dateTime={attrDateTime} {...rest}>
            {date}
        </time>
    );
}

export default Time;
