import React from 'react';
import moment from 'jalali-moment'


const HeaderTime = ({time}) =>{
    return(
        <div>{moment(time).format("HH:mm:ss")}</div>
    )
}


export default HeaderTime;