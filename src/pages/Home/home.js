import React, { useContext, useState } from 'react';
import './Style.css';

import { MDBInput } from "mdbreact";

import Context from '../../Store';

import API from "../../Services/Api";
import ButtonWithLoading from "../../Components/Buttons/ButtonWithLoading";

function Home({history}){

    const {value, setValue} = useContext(Context);
    const [city, setCity] = useState('');
    const [loading, setLoaging] = useState(false);
    const [error, setError] = useState('');

    const search = async (e) =>{
        setLoaging(true);
        e.preventDefault();

        API.get(`/weather?q=${city}&appid=f669e576855d63e17de6a773401ff022&units=metric`)
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
            <form className='d-flex flex-column align-items-center ' onSubmit={search}>
                <MDBInput 
                    onChange={e => setCity(e.target.value)} 
                    label='Search by city...' 
                    outline 
                    value={city}
                />
                <ButtonWithLoading 
                    btnColor='elegant' 
                    btnType='submit'
                    btnClass='m-0 btn-block'
                    btnText='Search'
                    loading={loading}
                />

                <span className='text-danger p-4'>
                    {error}
                </span>
            </form>
        </div>
    )
}

export default Home;