import React, {useState} from "react";


function DashboardHome() {

    return (
        <>
            <div className="grid grid-cols-2 gap-24">
                <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="sm:flex sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Create new ticket
                                </h3>
                                <div className="mt-2 max-w-xl text-sm text-gray-500">
                                    <p>
                                        Got into trouble again? Send your team a ticket!
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-caramel focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-caramel">
                                    To ticket creation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="sm:flex sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Manage subscription
                                </h3>
                                <div className="mt-2 max-w-xl text-sm text-gray-500">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Change plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="pb-5 border-b border-gray-200 my-12">
                <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
                    <h3 class="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                        Open Tickets
                    </h3>
                    <p class="ml-2 mt-1 text-sm text-gray-500 truncate">for you</p>
                </div>
            </div>

        </>
    )
}


export default DashboardHome;
