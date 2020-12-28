import React, {useState} from "react";

function StackedList() {

    return (
        <>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    <li>
                        <a href="#" className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6">
                                {/*TODO Add some sort of avatar, otherwise the UI looks to simplistic and boring*/}
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-800 truncate">
                                        Erro na tramitação dos SMTCS
                                        <span className="ml-1 font-medium text-xs text-gray-400">
                                            #943526
                                        </span>
                                    </p>
                                    <div className="ml-2 flex-shrink-0 flex items-center">
                                        <p className="text-xs text-gray-400 font-medium pr-2">
                                            Impact
                                        </p>
                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Medium
                                        </p>
                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-500 ml-2">
                                            WIP
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500 max-w-md">
                                            {/*Ticket truncated description*/}
                                            <span className="truncate">Some of the bottle was NOT marked 'poison,' it is all the way wherever she wanted much to know, but the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it</span>
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        {/* Heroicon name: calendar */}
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFD393"
                                             aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <p>
                                            Last updated on
                                            <time className="pl-1 font-medium" dateTime="2020-01-07">January 7,
                                                2020</time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default StackedList;
