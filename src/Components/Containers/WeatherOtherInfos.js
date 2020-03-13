import React from "react";

const WeatherOtherInfos = ({text, value}) => (
    <div>
        <div className='col-7 col-xl-3'>
            {text} 
        </div>
        <div className='col-1'>
            {value}
        </div>
    </div>
)

export default WeatherOtherInfos;