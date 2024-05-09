import { GameHeader } from '../components/Header/Header';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/Context';

export function AddCards() {
    const { addCard, cards } = useContext(UserContext);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const newCard = {
            tarjeta: data.tarjeta,
            Apodo: data.Apodo,
        };
        addCard([...cards, newCard]);
        reset();
    };

    useEffect(() => {
        console.log(cards);
    }, [cards]);

    return (
        <>
            <GameHeader />
            <div>
                <section>
                    <h1>Añadir Tarjetas</h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <input
                            {...register('tarjeta', {
                                required: true,
                            })}
                            placeholder="Nº Tarjeta"
                        />
                        <input
                            {...register('Apodo', {
                                required: true,
                            })}
                            type="text"
                            placeholder="Apodo"
                        />
                        <button type="submit">Agregar</button>
                    </form>
                </section>
            </div>
        </>
    );
}
