export const FooterSocial = () => {
    return (
        <section className={'social-wrapper'}>
            <h2 className={'visually-hidden'}>Список социальных сетей</h2>
            <ul className="social">

                <li className='social__item'>
                    <a
                        className="social__link social__link--vkontakte"
                        href="#"
                        aria-label="Переход на страницу вконтатке">
                    </a>
                </li>

                <li className='social__item'>
                    <a
                        className="social__link social__link--telegram"
                        href="#"
                        aria-label="Переход на телеграмм-канал">
                    </a>
                </li>

                <li className='social__item'>
                    <a
                        className="social__link social__link--youtube"
                        href="#"
                        aria-label="Переход на ютуб-канал">
                    </a>
                </li>
            </ul>
        </section>
    );
}

/*

<ul class="social">
              <li class="social__item">
                <a class="link" href="#" aria-label="Переход на страницу вконтатке">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlink:href="#icon-vk"></use>
                  </svg>
                </a>
              </li>
              <li class="social__item">
                <a class="link" href="#" aria-label="Переход на страницу pinterest">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlink:href="#icon-pinterest"></use>
                  </svg>
                </a>
              </li>
              <li class="social__item">
                <a class="link" href="#" aria-label="Переход на страницу reddit">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlink:href="#icon-reddit"></use>
                  </svg>
                </a>
              </li>
            </ul>
 */
