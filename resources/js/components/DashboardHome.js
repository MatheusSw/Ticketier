import React, {useState, useEffect} from "react";
import axios from "axios";

function DashboardHome() {
    const [user, setUser] = useState('');

    return (
        <>
            <div className="pb-5 border-b border-gray-200 my-12">
                <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                    <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                        Open Tickets
                    </h3>
                    <p className="ml-2 mt-1 text-sm text-gray-500 truncate">for you</p>
                </div>
            </div>

        </>
    )
}

export default DashboardHome;
