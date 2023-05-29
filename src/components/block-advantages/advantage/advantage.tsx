import {IAdvantage} from "../../../settings";

interface AdvantageProps {
    advantage: IAdvantage;
}

export const Advantage = (props: AdvantageProps) => {
    const {advantage : {slogan, title, image, icon}} = props;

    return icon ?
        <li>
            <div className='advantage-description'>
                <h3 className='advantage-title'>{title}</h3>
                <p className='advantage-slogan'>{slogan}</p>
                <div className='advantage-icon'>
                    <img src={icon.src} alt={icon.alt}/>
                </div>
            </div>
        </li>
        :
        <li className={'advantage-item'}>
            <div className='advantage-description'>
                <h3 className='advantage-title'>{title}</h3>
                <div className='advantage-slogan-wrapper'>
                    <p className='advantage-slogan'>{slogan}</p>
                </div>
            </div>
            {!!image &&
                <div className='advantage-image'>
                    <img src={image.src} alt={image.alt}/>
                </div>
            }
        </li>;
}
