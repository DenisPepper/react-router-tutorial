export const Hero = () => {
    return (
        <section className='hero'>
            <h2 className='visually-hidden'>Баннер с декоративной надписью и пейзажем на заднем фоне</h2>

            <img
                className='hero-image'
                src='./images/welcome.svg'
                alt='Надпись: Добро пожаловать в восхитительную Седону, которая лучше, чем Гранд-Каньён'
                width='458'
                height='352'
            />

            <div className='hero-triangle triangle-left--outer'></div>
            <div className='hero-triangle triangle-left--inner'></div>
            <div className='hero-triangle triangle-right--outer'></div>
            <div className='hero-triangle triangle-right--inner'></div>
        </section>
    );
}
