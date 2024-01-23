import './Register.css'
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Register() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState()
    const [user, setUser] = useState()

    async function handleFormSubmit(data) {
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                ...data,
                role:['user']
            })

            setUser(response.data)
        } catch (e) {
            setError(e.response.data.message)
            console.error(error);
        }
        navigate('/Login')
    }


    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='center-page-container'>
                        <div>
                            <form className='login-container' onSubmit={handleSubmit(handleFormSubmit)}>

                                {error}
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
                                    minLength:{value: 6,message: 'wachtwoord moet minimaal 6 characters lang zijn'},
                                    required: {
                                        value: true,
                                        message: 'vul je wachtwoord in'
                                    }
                                })} />
                                {errors.password && <p className='login-error-message'>{errors.password.message}</p>}
                                <label>Email:</label>
                                <input type='text' {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'vul je wachtwoord in',
                                    },
                                    validate :(value)=> value.includes('@') ||'Email moet een @ bevatten',
                                })} />
                                {errors.email && <p className='login-error-message'>{errors.email.message}</p>}

                                <button className='login-btn' type='submit'>Registreer</button>
                            </form>

                        </div>
                    </section>
                </div>
            </div>
            </>
    )
}
export default Register