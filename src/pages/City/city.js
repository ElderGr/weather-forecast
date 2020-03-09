import React,{useContext} from 'react';
import ThemeContext from "../../store/index";

import './style.css';

const City = () =>{

    const {value, setValue} = useContext(ThemeContext);

    return(
        <div className='main'>
            <section>
                <h1>
                    {value.name}, {value.sys.country}
                </h1>
                <span className='blue-grey-text'>Dia da semana, </span>
            </section>

            <section>

                <div>
                    <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} />
                </div>

                <div className='d-flex text-center'>
                    <div className='d-flex flex-column'>
                        <span>Minima</span> 
                        <div>
                            {value.main.temp_min} ºC
                        </div>
                    </div>
                    <div className='d-flex flex-column'> 
                        <div>
                            {value.main.temp} ºC
                        </div>
                        <div>
                            {value.weather[0].description} 
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <span>
                            Máxima 
                        </span>
                        <div>
                            {value.main.temp_max} ºC
                        </div>
                    </div>
                </div>
            </section>
            <span className='p-1 border-bottom'></span>
            <section>
                <div className='d-flex'>
                    <div>
                        Umidade 
                    </div>
                    <div>
                        {value.main.humidity}%
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        Nascer do sol 
                    </div>
                    <div>
                        {value.sys.sunrise}
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        Por do sol 
                    </div>
                    <div>
                        {value.sys.sunset}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default City;