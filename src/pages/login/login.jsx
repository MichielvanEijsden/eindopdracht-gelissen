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
    const [loading, toggleLoading] = useState(false);


        async function handleFormSubmit(data) {
            toggleLoading(true);
            setError(false);
            try {
                const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                    header: {
                        "Content-Type": "application/json",
                    },
                    ...data,
                })
                console.log(response.data)
                setToken(response.data.accessToken)
            } catch (e) {
                setError(e)
                console.error(error);
            } finally {
                navigate('/Cart')
                toggleLoading(false)
            }
        }

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
                                <button className='login-btn' type='submit'>Login</button>
                            </form>
                            <div className='register'>
                                <p>of</p>
                                <Link to='/Register'>
                                    <button className='register-btn'>Registreer</button>
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