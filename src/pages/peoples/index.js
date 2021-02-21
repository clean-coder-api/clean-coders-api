import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./cards";
import Pagination from "./pagination";

function Peoples(props) {
    const [pageSize] = useState(4);
    const [peoples, setPeoples] = useState([]);
    const [totalNumPages, setTotalNumPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (peoples.length <= 0) getPeoples()
        else dividePages()
    })

    const getPeoples = () => {
        let Array =[]
        axios.get('https://swapi.dev/api/people/').then(res => {
            for (let i = 0; i < 10; i++) {
                res.data.results[i].id=i
                Array.push( res.data.results[i])
            }
            setPeoples(Array)
        }).catch(err => console.log(err))
    }

    const dividePages = () => { //calculate number of pages, peoples.length/ (page size that is 4)
        setTotalNumPages(Math.ceil(peoples.length / pageSize))
    }

    // Get current peoples
    const indexOfLastPeople = currentPage * pageSize;
    const indexOfFirstPeople = indexOfLastPeople - pageSize;
    const currentPeoples = peoples.slice(indexOfFirstPeople, indexOfLastPeople);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="row justify-content-center">
            <Cards peoples={currentPeoples} />
            <Pagination totalNumPages={totalNumPages} pageId={props.match.params.id} paginate={paginate} />
        </div>
    )
}

export default Peoples;
