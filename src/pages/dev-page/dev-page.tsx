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
                        <input className='modal__input modal__input--text' type='text' name='date-from' id='date-from'
                               defaultValue='27 апреля 2020'/>
                        <p className='modal__input-state modal__input-state--error'>
                            Мы не можем отправить вас в прошлое.
                            <span className='modal__tooltip'>
                                Мы не можем отправить вас в прошлое. Мы не можем отправить вас в прошлое. Мы не можем отправить вас в прошлое.
                            </span>
                        </p>
                    </div>

                    <div className='modal__field'>
                        <label className='modal__label' htmlFor="date-to">Дата выезда:</label>
                        <input className='modal__input modal__input--text' type='text' name='date-to' id='date-to'
                               defaultValue='1 сентября 2023'/>
                        <p className='modal__input-state'>На эти даты есть свободные номера. Пока есть.</p>
                    </div>

                    <div className='modal__field modal__field--short'>
                        <label className='modal__label' htmlFor="man-count">
                            Взрослые:
                        </label>
                        <input
                            className='modal__input modal__input--number'
                            type='number'
                            name='man-count'
                            id='man-count'
                            defaultValue='2'
                            readOnly
                            tabIndex={-1}
                        />
                        <button
                            className='count-button decrement-button'
                            type='button'
                        >
                            <svg className='count-button__icon' width="14" height="2" viewBox="0 0 14 2" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0L0 2L14 2V0L0 0Z"/>
                            </svg>
                        </button>
                        <button
                            className='count-button increment-button'
                            type='button'
                        >
                            <svg className='count-button__icon' width="14" height="14" viewBox="0 0 14 14" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z"/>
                            </svg>
                        </button>
                    </div>

                    <div className='modal__field modal__field--short'>
                        <label className='modal__label' htmlFor="children-count">
                            Дети:
                            <span className='modal__label-icon-container'>
                                <svg className='modal__label-icon' width="3" height="12" viewBox="0 0 3 12"
                                     fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0.393066 0H2.39307V2H0.393066V0ZM2.39307 12H0.393066V3H2.39307V12Z"
                                    />
                                </svg>
                            </span>
                            <span className='modal__tooltip'>
                                Укажите количество детей, которые будут с вами, возраст которых от 6 до 18 лет. Дети до 6 лет размещаются бесплатно.
                            </span>
                        </label>
                        <input
                            className='modal__input modal__input--number'
                            type='number' name='children-count'
                            id='children-count'
                            defaultValue='2'
                            readOnly
                            tabIndex={-1}
                        />
                        <button
                            className='count-button decrement-button'
                            type='button'
                        >
                            <svg className='count-button__icon' width="14" height="2" viewBox="0 0 14 2" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0L0 2L14 2V0L0 0Z"/>
                            </svg>
                        </button>
                        <button
                            className='count-button increment-button'
                            type='button'
                        >
                            <svg className='count-button__icon' width="14" height="14" viewBox="0 0 14 14" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z"/>
                            </svg>
                        </button>
                    </div>


                </form>
                <button className='modal__close-button'>
                    <svg className='modal__close-button-icon' width="14" height="14" viewBox="0 0 14 14" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 1.29231L12.7077 0L7 5.70769L1.29231 0L0 1.29231L5.70769 7L0 12.7077L1.29231 14L7 8.29231L12.7077 14L14 12.7077L8.29231 7L14 1.29231Z"/>
                    </svg>
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
