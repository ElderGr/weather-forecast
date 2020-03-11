import React,{useContext, useState} from 'react';
import ThemeContext from "../../store/index";


import './style.css';

const City = () =>{

    const {value, setValue} = useContext(ThemeContext);
    const [convertedValues , setConvertedValues] = useState({
        sunset: '',
        sunrise: '',
        dt: ''
    });

    useState(() =>{
        function convertData(unix){
            let utc = new Date(unix * 1000);

            let hours = utc.getHours();
            let minutes = utc.getMinutes();

            return `${hours}:${minutes}`;
        }

        setConvertedValues({
            sunset: convertData(value.sys.sunset),
            sunrise: convertData(value.sys.sunrise)
        })
    }, [value])

    return(
        <div className='main'>
            <hgroup>
                <h1 className='text-center'>
                    {value.name}, {value.sys.country}
                </h1>
                <span>Dia da semana, {new Date(value.dt *1000).toDateString()}</span>
            </hgroup>

            <section className='principalInfo'>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} />
                </div>

                <div className='d-flex flex-column flex-md-row text-center justify-content-around' style={{width: '100%'}}>
                    <div className='d-flex flex-column'>
                        <span>Minima</span> 
                        <div>
                            <h4>{value.main.temp_min} ºC</h4>
                        </div>
                    </div>
                    <div className='d-flex flex-column p-4'> 
                        <div>
                            <h1>{value.main.temp} ºC</h1>
                        </div>
                        <div>
                            <h4>{value.weather[0].description}</h4> 
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <span>
                            Máxima 
                        </span>
                        <div>
                            <h4>{value.main.temp_max} ºC</h4>
                        </div>
                    </div>
                </div>
            </section>
            
            <hr />

            <section className='otherInfos'>
                <div>
                    <div className='col-7 col-xl-3'>
                        Umidade 
                    </div>
                    <div className='col-1'>
                        {value.main.humidity}%
                    </div>
                </div>
                <div>
                    <div className='col-7 col-xl-3'>
                        Nascer do sol 
                    </div>
                    <div className='col-1'>
                        {convertedValues.sunrise}
                    </div>
                </div>
                <div>
                    <div className='col-7 col-xl-3'>
                        Por do sol 
                    </div>
                    <div className='col-1'>
                        {convertedValues.sunset}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default City;