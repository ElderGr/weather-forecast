import React,{useContext, useState, useEffect} from 'react';
import ThemeContext from "../../Store/index";

import './Style.css';

import WeatherOtherInfos from "../../Components/Containers/WeatherOtherInfos";

import UnixToUTCHour from "../../Functions/UnixToUTCHour";
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';

const City = () =>{

    const {value, setValue} = useContext(ThemeContext);
    const [convertedValues , setConvertedValues] = useState({
        sunset: '',
        sunrise: '',
        dt: ''
    });

    useEffect(() =>{
        setConvertedValues({
            sunset: UnixToUTCHour(value.sys.sunset),
            sunrise: UnixToUTCHour(value.sys.sunrise),
            dt: new Date(value.dt *1000).toDateString()
        })
    }, [value])

    return(
        <div className='main'>
            <section>
                <Link to='/' className='align-self-center align-self-md-start'>
                    <MDBIcon icon='angle-left' /> Back
                </Link>
            </section>
            <hgroup>
                <h1 className='text-center'>
                    {value.name}, {value.sys.country}
                </h1>
                <span>Dia da semana, {convertedValues.dt}</span>
            </hgroup>

            <section className='principalInfo'>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} />
                </div>

                <div className='d-flex flex-column flex-md-row text-center justify-content-around' style={{width: '100%'}}>
                    <div>
                        <span>Minima</span> 
                        <div>
                            <h4>{value.main.temp_min} ºC</h4>
                        </div>
                    </div>
                    <div className='p-4'> 
                        <div>
                            <h1>{value.main.temp} ºC</h1>
                        </div>
                        <div>
                            <h4>{value.weather[0].description}</h4> 
                        </div>
                    </div>
                    <div>
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
              
                <WeatherOtherInfos 
                    text='Umidade'
                    value={`${value.main.humidity}%`}
                />
               
                <WeatherOtherInfos 
                    text='Nascer do sol'
                    value={convertedValues.sunrise}
                />
                
                <WeatherOtherInfos 
                    text='Por do sol'
                    value={convertedValues.sunset}
                />
            </section>
        </div>
    )
}

export default City;