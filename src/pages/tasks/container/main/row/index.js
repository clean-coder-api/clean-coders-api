import React from 'react'
import TimePicker from '../../../../../components/timePicker'
import moment from 'jalali-moment'


const TasksRow = ({row, editRow , index}) =>{
    const diffTime = moment.duration(row.endDate - row.startDate);
    return(
        <div className="row">
        <span>{index +1}</span>
        <input value={row.description} onChange={e=>editRow({...row , description : e.target.value}) } />
        <TimePicker placeholder="start time" onChange={value=> editRow({...row , startDate : value})} />
        <TimePicker  placeholder="end time"  onChange={value=> editRow({...row , endDate : value})} />
        <span>
            {moment(`${Math.floor(diffTime.asHours())}:${Math.floor(diffTime.asMinutes())}:${Math.floor(diffTime.asSeconds())}`
             , "H:m:s"
             ).format("HH:mm:ss")}
        </span>
    </div>
    )
}


export default TasksRow;