import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/Context';
import { GameHeader } from '../components/Header/Header';
import './LoginPage.css';
import { Footer } from '../components/Footer/Footer';

export const LoginPage = () => {
    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,

        reset,
    } = useForm({
        defaultValues: {
            DNI: '',
            password: '',
        },
    });

    const onSubmit = () => {
        console.log('hola');
        setUser(true);
        navigate('/');
        reset();
    };
    return (
        <>
           <header><GameHeader /></header> 
            <main>
                <section>
                    <h1>Login</h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <input
                            {...register('DNI', {
                                required: true,
                            })}
                            placeholder="DNI"
                        />
                        <input
                            {...register('password', {
                                required: true,
                                minLength: 8,
                            })}
                            type="password"
                            placeholder="Password"
                        />
                        <button type="submit">Register</button>
                    </form>
                </section>
            </main>
            <footer><Footer/></footer>
        </>
    );
};
