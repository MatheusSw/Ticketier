import React, {useState} from "react";
import {Transition} from "@headlessui/react";
import Home from "./Home";

function Dashboard() {
    const [isDropdownOpen, setDropdown] = useState(false);
    const [isMobileDropdownOpen, setMobileDrop] = useState(false);

    return (
        <>
            <div className="min-h-screen bg-white">
                <nav className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <img className="block lg:hidden h-8 w-auto"
                                         src="/images/full-width-logo.svg"
                                         alt="Ticketier Logo"/>
                                    <img className="hidden lg:block h-8 w-auto"
                                         src="/images/full-width-logo.svg" alt="Ticketier Logo"/>
                                </div>
                                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                    {/* Current: "border-caramel text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    <a href="#"
                                       className="border-caramel text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Dashboard
                                    </a>
                                    <a href="#"
                                       className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Tickets
                                    </a>
                                    <a href="#"
                                       className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Help
                                    </a>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                <button
                                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-caramel"
                                >
                                    <span className="sr-only">View notifications</span>
                                    {/* Heroicon name: bell */}
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                    </svg>
                                </button>
                                {/* Profile dropdown */}
                                <div className="ml-3 relative">
                                    <div>
                                        <button
                                            className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-caramel"
                                            id="user-menu" aria-haspopup="true"
                                            onClick={() => setDropdown(!isDropdownOpen)}
                                            onBlur={() => setDropdown(false)}>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full"
                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                 alt="User profile picture"/>
                                        </button>
                                    </div>
                                    <Transition
                                        show={isDropdownOpen}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        {(ref) => (
                                            <div
                                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu"
                                                ref={ref}>
                                                <a href="#"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-caramel-light"
                                                   role="menuitem">
                                                    Your Profile
                                                </a>
                                                <a href="#"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-caramel-light"
                                                   role="menuitem">
                                                    Settings
                                                </a>
                                                <a href="#"
                                                   className="block px-4 py-2 text-sm text-gray-700 border-t hover:bg-caramel-light"
                                                   role="menuitem">
                                                    Sign out
                                                </a>
                                            </div>
                                        )}
                                    </Transition>

                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <button
                                    className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-caramel"
                                    onClick={() => setMobileDrop(!isMobileDropdownOpen)}>
                                    <span className="sr-only">Open main menu</span>
                                    {/*
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                  */}
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                    {/*
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                  */}
                                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`${isMobileDropdownOpen ? "block" : "hidden"} sm:hidden`}>
                        <div className="pt-2 pb-3 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                            <a href="#"
                               className="bg-caramel-light block pl-3 pr-4 py-2 text-base font-medium">
                                Dashboard
                            </a>
                            <a href="#"
                               className="text-gray-600 hover:bg-gray-50 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium">
                                Tickets
                            </a>
                            <a href="#"
                               className="text-gray-600 hover:bg-gray-50 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium">
                                Help
                            </a>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                         alt=""/>
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">Tom Cook</div>
                                    <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                                </div>
                                <button
                                    className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">View notifications</span>
                                    {/* Heroicon name: bell */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-3 space-y-1">
                                <a href="#"
                                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                                    Your Profile
                                </a>
                                <a href="#"
                                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                                    Settings
                                </a>
                                <a href="#"
                                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="py-10">
                    <header>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                                Dashboard
                            </h1>
                        </div>
                    </header>
                    <main>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="px-4 py-8 sm:px-0">
                                <Home/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
