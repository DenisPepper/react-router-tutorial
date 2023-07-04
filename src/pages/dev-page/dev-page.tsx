import {useRef} from "react";

export const DevPage = () => {

    const modalRef = useRef<HTMLDialogElement | null>(null);

    const open = () => {
        modalRef.current?.showModal();
    };

    return (
        <section style={{padding: 50}}>
            <button onClick={open}>open modal</button>

            <dialog className='modal' id='modal' ref={modalRef} open>
                <h1 className='section-title modal__title'>Поиск гостиницы в седоне</h1>
                <form className='modal__form'>

                    <div className='modal__field'>
                        <label className='modal__label' htmlFor="date-from">Дата заезда:</label>
                        <input className='modal__input modal__input--text' type='text' name='date-from' id='date-from' defaultValue='27 апреля 2020'/>
                        <p className='modal__input-state modal__input-state--error'>Мы не можем отправить вас в прошлое.</p>
                    </div>

                    <div className='modal__field'>
                        <label className='modal__label' htmlFor="date-to">Дата выезда:</label>
                        <input className='modal__input modal__input--text' type='text' name='date-to' id='date-to' defaultValue='1 сентября 2023'/>
                        <p className='modal__input-state'>На эти даты есть свободные номера. Пока есть.</p>
                    </div>

                    <div className='modal__field modal__field--short'>
                        <label className='modal__label' htmlFor="man-count">Взрослые:</label>
                        <input className='modal__input modal__input--number' type='number' name='man-count' id='man-count' defaultValue='2'/>
                    </div>

                    <div className='modal__field modal__field--short'>
                        <label className='modal__label' htmlFor="children-count">Дети:</label>
                        <input className='modal__input modal__input--number' type='number' name='children-count' id='children-count' defaultValue='2'/>
                    </div>


                </form>
                <button className='modal__close-button'>
                    &#9587;
                </button>
            </dialog>

        </section>
    );
}

/*
<button
                        type='submit'
                        className='app-button app-button--large button--optional modal__submit-button'
                    >
                        Найти
                    </button>
 */
