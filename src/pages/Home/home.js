import React, { useContext, useState } from 'react';
import './style.css';

import { MDBBtn, MDBInput } from "mdbreact";

import Context from '../../store';
import Axios from 'axios';


function Home({history}){

    const {value, setValue} = useContext(Context);
    const [city, setCity] = useState('');
    const [loading, setLoaging] = useState(false);

    const search = async (e) =>{
        setLoaging(true);
        e.preventDefault();

        const { data } = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f669e576855d63e17de6a773401ff022&units=metric`);
        console.log(data);
        setLoaging(false);
        setValue(data);

        history.push('/city');
    }


    return(
        <div className='Home'>
            <form className='d-flex flex-column align-items-center' onSubmit={search}>
                <MDBInput 
                    onChange={e => setCity(e.target.value)} 
                    label='Buscar por cidade' 
                    outline 
                    value={city}
                />
                {loading ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <MDBBtn color='success' type='submit' className='m-0 btn-block'>
                        Procurar
                    </MDBBtn>
                )}
            </form>
        </div>
    )
}

export default Home;