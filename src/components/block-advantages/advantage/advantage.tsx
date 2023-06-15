import {AdvantageBackgroundType, IAdvantage} from "../../../settings";

const Background: Record<AdvantageBackgroundType, string> = {
    main: 'bg--main',
    option: 'bg--option',
    'option-lighter': 'bg--option-lighter',
};

const imageModifier = 'advantage-image--before';

interface AdvantageProps {
    advantage: IAdvantage;
}

export const Advantage = (props: AdvantageProps) => {
    const {advantage: {slogan, title, image, icon, descriptionUnderlined, background}} = props;

    return (
        <li
            className={`advantage-item ${Background[background]}`}
        >
            <div
                className={`advantage-description 
                ${descriptionUnderlined ? 'advantage-description--underlined' : 'advantage-description--with-icon'}`}>
                <h3 className='advantage-title'>{title}</h3>
                <p className='advantage-slogan'>{slogan}</p>
                {!!icon &&
                    <div className='advantage-icon'>
                        <img src={icon.src} alt={icon.alt}/>
                    </div>
                }
            </div>
            {!!image &&
                <div
                    className={`advantage-image ${image.src === './images/advantage-2.jpg' ? imageModifier : ''}`}
                >
                    <img src={image.src} alt={image.alt}/>
                </div>
            }
        </li>);
}
