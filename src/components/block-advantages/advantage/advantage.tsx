import {IAdvantage} from "../../../settings";

interface AdvantageProps {
    advantage: IAdvantage;
}

export const Advantage = (props: AdvantageProps) => {
    const {advantage: {slogan, title, image, icon, descriptionUnderlined}} = props;

    return (
        <li className={'advantage-item'}>
            <div
                className={`advantage-description ${descriptionUnderlined ? 'advantage-description--underlined' : ''}`}>
                <h3 className='advantage-title'>{title}</h3>
                {typeof slogan === "string" ?
                    <p className='advantage-slogan'>{slogan}</p>
                    :
                    <p className='advantage-slogan advantage-slogan--split'>
                        {slogan.map((row) => <span>{row}</span>)}
                    </p>
                }
                {!!icon &&
                    <div className='advantage-icon'>
                        <img src={icon.src} alt={icon.alt}/>
                    </div>
                }
            </div>
            {!!image &&
                <div className='advantage-image'>
                    <img src={image.src} alt={image.alt}/>
                </div>
            }
        </li>);
}

/*
<p
                    className={`advantage-slogan ${extraSlogan ? 'advantage-slogan--extra' : ''}`}
                >
                    {typeof slogan === "string" ?
                        slogan
                        :
                        <slogan.map((str) => span)}
                </p>

 */
