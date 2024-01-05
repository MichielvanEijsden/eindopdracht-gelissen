import './login.css'
import {useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState()
    const [token, setToken] = useState()


    async function handleFormSubmit(data) {
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                ...data,
            })
            console.log(response.data)
            setToken(response.data.token)
        } catch (e) {
            setError(e)
            console.error(error);
        }
        navigate('/Cart')
    }

    console.log('token is: ', token)
    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <div>
                            <form className='login-container' onSubmit={handleSubmit(handleFormSubmit)}>
                                <label>Username:</label>
                                <input type='text' {...register('username', {
                                    required: {
                                        value: true,
                                        message: 'vul je username in'
                                    }
                                })}/>
                                {errors.username && <p className='login-error-message'>{errors.username.message}</p>}
                                <label>Password:</label>
                                <input type='password' {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'vul je wachtwoord in'
                                    }
                                })} />
                                {errors.password && <p className='login-error-message'>{errors.password.message}</p>}
                                <button className='login-btn' type='submit'>Login</button>
                            </form>
                            <div className='register'>
                            <p>of</p>
                                <Link to='/Register'>
                            <button className='register-btn'>Registreer </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </>
    )


}

export default Login