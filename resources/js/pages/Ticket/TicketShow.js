import React, {useState, useEffect} from "react";
import LayoutDashboard from "../../layouts/Dashboard";
import {useParams} from "react-router-dom";
import axios from "../../config/axiosConfig";

function TicketShow({...rest}) {
    const {ticketId} = useParams();
    const [data, setData] = useState({ticket: {}});
    const [IsLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = (async () => {
            setIsLoading(true);
            const result = await axios({
                url: 'graphql',
                method: 'post',
                data: {
                    // TODO Sanitize everything before inputing to graphql
                    query: `
                        query GetTicket {
                        ticket(id: ${ticketId}) {
                            title
                            description
                            impact {
                                name
                            }
                            created_by {
                                name
                            }
                            status {
                                name
                            }
                            created_at
                            updated_at
                       }
                     }
            `
                }
            }).then((response) => {
                console.info(response.data);
                setData(response.data.data); //TODO Is there any way to stop GraphQ from returning "data" as the root?
                setIsLoading(false);
            }).catch((error) => {
                console.error(error); //TODO Properly treat exceptions
            });
        })();
    }, [])
    return (
        <LayoutDashboard title="">

        </LayoutDashboard>
    )
}

export default TicketShow;
