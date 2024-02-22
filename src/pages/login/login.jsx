import './login.css'
import {useContext, useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext.jsx";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState()
    const {logIn} = useContext(AuthContext)
    const [loading, toggleLoading] = useState(false);


    async function handleFormSubmit(data) {
        toggleLoading(true);
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                ...data,
            })
            logIn(response.data.accessToken)
            navigate('/Webshop')
        } catch (e) {
            setError(e.message)
            console.error(e.message)
        } finally {
            toggleLoading(false)
        }
    }


    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <div>
                            {error}
                            <form className='login-container' onSubmit={handleSubmit(handleFormSubmit)}>
                                <label>Username:</label>
                                <input type='text' {...register('username', {
                                    required: {
                                        value: true,
                                        message: 'vul je username in'
                                    }
                                })}/>
                                <p>{errors.username &&
                                    <p className='login-error-message'>{errors.username.message}</p>}</p>
                                <label>Password:</label>
                                <input type='password' {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'vul je wachtwoord in'
                                    }
                                })} />
                                <p>{errors.password &&
                                    <p className='login-error-message'>{errors.password.message}</p>}</p>
                                <button className='btn login-btn' type='submit'>Login</button>
                            </form>
                            <div className='register'>
                                <p>of</p>
                                <Link to='/Register'>
                                    <button className='btn register-btn'>Registreer</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {loading && <p>Loading...</p>}
        </>
    )
}

export default Login