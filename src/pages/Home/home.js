import React, { useContext, useState } from 'react';
import './style.css';

import { MDBBtn, MDBInput } from "mdbreact";

import Context from '../../store';
import Axios from 'axios';


function Home({history}){

    const {value, setValue} = useContext(Context);
    const [city, setCity] = useState('');
    const [loading, setLoaging] = useState(false);
    const [error, setError] = useState('');

    const search = async (e) =>{
        setLoaging(true);
        e.preventDefault();

        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f669e576855d63e17de6a773401ff022&units=metric`)
            .then(response =>{
                setLoaging(false);
                setValue(response.data);
                
                history.push('/city');
            })
            .catch(e =>{
                setLoaging(false);
                setError('City not found');
            })
    }


    return(
        <div className='Home'>
            <form className='d-flex flex-column align-items-center' onSubmit={search}>
                <MDBInput 
                    onChange={e => setCity(e.target.value)} 
                    label='Search by city...' 
                    outline 
                    value={city}
                />
                {loading ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <MDBBtn color='elegant' type='submit' className='m-0 btn-block'>
                        Search
                    </MDBBtn>
                )}
                <span className='text-danger p-4'>
                    {error}
                </span>
            </form>
        </div>
    )
}

export default Home;