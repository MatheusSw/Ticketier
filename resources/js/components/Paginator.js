import React from "react";
import _ from "lodash";
import {NavLink} from "react-router-dom";

function Paginator({paginatorInfo, children, data, ...rest}) {
    const pageClasses = {
        currentClass: "border-caramel text-caramel border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium",
        defaultClass: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
    };

    return (
        <>
        {children(data)}
        <footer className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
            <div className="-mt-px w-0 flex-1 flex">
                <NavLink to={`/dashboard/home/page/${paginatorInfo.currentPage - 1}`}
                         className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                              clipRule="evenodd"/>
                    </svg>
                    Previous
                </NavLink>
            </div>
            <div className="hidden md:-mt-px md:flex">
                {/*TODO Limit the pages, otherwise it'll overflow the entire page*/}
                {_.times(paginatorInfo.lastPage, (page) => {
                    page += 1; //Index 0
                    return (
                        <NavLink to={`/dashboard/home/page/${page}`}
                                 className={(page === paginatorInfo.currentPage ? pageClasses.currentClass : pageClasses.defaultClass)}
                                 aria-current="page"
                                 key={page}>
                            {page}
                        </NavLink>
                    )
                })
                }
            </div>
            <div className="-mt-px w-0 flex-1 flex justify-end">
                <NavLink to={`/dashboard/home/page/${paginatorInfo.currentPage + 1}`}
                         className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Next
                    <svg className="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"/>
                    </svg>
                </NavLink>
        </div>
        </footer>
</>
)
    ;
}

export default Paginator;
