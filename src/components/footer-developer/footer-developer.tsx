export const FooterDeveloper = () => {
    return (
        <section className="developer-wrapper">
            <h2 className="visually-hidden">HTML-Academy - компания-разработчик сайта</h2>
            <div className="developer-logo">
                <a href='https://htmlacademy.ru/' aria-label='Ссылка на сайт HTML-Academy - компании-разработчика сайта'>
                    <img
                        className='developer-image'
                        src='./images/logo_htmlacademy.png'
                        alt="логотип HTML-Academy - компании-разработчика сайта"
                        width="115"
                        height="33"
                    />
                </a>
            </div>
        </section>
    );
}
