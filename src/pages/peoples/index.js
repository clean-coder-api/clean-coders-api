import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./cards";
import Pagination from "./pagination";

function Peoples(props) {
    const [pageSize] = useState(4);
    const [peoples, setPeoples] = useState([]);
    const [totalNumPages, setTotalNumPages] = useState(0);

    useEffect(() => {
        if (peoples.length <= 0) getPeoples()
        else dividePages()
    })

    const getPeoples = () => {
        axios.get('https://swapi.dev/api/people/').then(res => {
            setPeoples((res.data.results))
        }).catch(err => console.log(err))
    }

    const dividePages = () => { //calculate number of pages, peoples.length/ (page size that is 4)
        setTotalNumPages(Math.ceil(peoples.length / pageSize))
    }

    // Get current peoples
    const indexOfLastPeople = props.match.params.id * pageSize;
    const indexOfFirstPeople = indexOfLastPeople - pageSize;
    const currentPeoples = peoples.slice(indexOfFirstPeople, indexOfLastPeople);

    return (
        <div className="row justify-content-center">
            <Cards peoples={currentPeoples} />
            <Pagination totalNumPages={totalNumPages} pageId={props.match.params.id} />
        </div>
    )
}

export default Peoples;
