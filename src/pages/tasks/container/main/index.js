import React from 'react';
import TasksRow from './row';

const Main = ({data , editRow}) =>{
    // console.log(data);
    return(
        <main className="main">
            {data.map((D , i)=><TasksRow key={"TasksRow" +i} index={i} editRow={row=> editRow(i , row)} row={D} />)}
        </main>
    )
}


export default Main;