import React, {useState, useEffect} from "react";
import axios from "axios";
import StackedList from "./StackedList.js";

function DashboardHome() {
    const [user, setUser] = useState('');

    return (
        <>
            <div className="pb-3 mb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
                <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                    <h3 className="text-lg leading-6 font-medium text-gray-800">
                        Tickets
                    </h3>
                    <p className="ml-2 mt-1 text-sm text-gray-400 truncate">assigned to you</p>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-4">
                    <label htmlFor="search_tickets" className="sr-only">Search</label>
                    <div className="flex rounded-md shadow-sm">
                        <div className="relative flex-grow focus-within:z-10">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFD393" aria-hidden="true">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" name="search_tickets" id="search_tickets" className="focus:ring-caramel focus:border-black block w-full rounded-md pl-10 sm:hidden border-caramel" placeholder="Search" />
                            <input type="text" name="search_tickets" id="search_tickets" className="hidden focus:ring-caramel focus:border-black w-full rounded-md pl-10 sm:block sm:text-sm border-caramel" placeholder="Search tickets" />
                        </div>
                        {/*TODO Add sort filter*/}
                    </div>
                </div>
            </div>
            <StackedList/>
        </>
    )
}

export default DashboardHome;
