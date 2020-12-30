import React, {useState, useEffect} from "react";
import axios from "../config/axiosConfig.js"
import TicketStackedList from "./TicketStackedList.js";
import ContentLoader from "react-content-loader";
import Paginator from "./Paginator";

function Home(props) {
    const [data, setData] = useState({tickets: [],});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = (async () => {
            setIsLoading(true);
            const result = await axios({
                url: 'graphql',
                method: 'post',
                data: {
                    query: `
                        query AllAssignedTickets {
                        tickets(first: 8, page: 1) {
                            data {
                            identifier
                            title
                            description
                            impact {
                                name
                            }
                            status {
                                name
                            }
                            updated_at
                            }
                            paginatorInfo {
                            currentPage
                            lastPage
                            }
                        }
                       }
            `
                }
            }).then((response) => {
                setData(response.data.data); //TODO Is there any way to stop GraphQ from returning "data" as the root?
                setIsLoading(false);
            }).catch((error) => {
                console.error(error);
            });
        })();
    }, [])

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
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20" fill="#FFD393" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <input type="text" name="search_tickets" id="search_tickets"
                                   className="focus:ring-caramel focus:border-black block w-full rounded-md pl-10 sm:hidden border-caramel"
                                   placeholder="Search"/>
                            <input type="text" name="search_tickets" id="search_tickets"
                                   className="hidden focus:ring-caramel focus:border-black w-full rounded-md pl-10 sm:block sm:text-sm border-caramel"
                                   placeholder="Search tickets"/>
                        </div>
                        {/*TODO Add sort filter*/}
                    </div>
                </div>
            </div>
            {isLoading && <ContentLoader
                speed={2}
                width={476}
                height={120}
                viewBox="0 0 476 120"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="0" y="20" rx="3" ry="3" width="180" height="6"/>
                <rect x="0" y="45" rx="3" ry="3" width="400" height="6"/>
            </ContentLoader>
            }
            {!isLoading && data.tickets.length === 0 && (
                <div className="px-4 py-5 sm:p-6 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-800">
                        No tickets!
                    </h3>
                    <div className="mt-2 text-sm text-gray-500">
                        <p>
                            Hey, it looks like you don't have any tickets assigned to you! Isn't that wonderful? Want to
                            create one instead?
                        </p>
                    </div>
                    <div className="mt-5">
                        <button type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-caramel focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition transition-colors hover:bg-caramel-light"
                                role="button">
                            <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                            </svg>
                            Create new ticket
                        </button>
                    </div>
                </div>
            )}
            {!isLoading && data.tickets.length !== 0 &&
            <Paginator paginatorInfo={data.tickets.paginatorInfo} data={data.tickets.data}>
                {(tickets) => {
                    return <TicketStackedList tickets={tickets}/>
                }}
            </Paginator>
            }
        </>
    )
}

export default Home;
