import {IAdvantage} from "../../../settings";

interface AdvantageProps {
    advantage: IAdvantage;
}

export const Advantage = (props: AdvantageProps) => {
    const {advantage} = props;

    return (
        <li className={'advantage-item'}>
            <div className='advantage-description'>
                <h3 className='advantage-title'>{advantage.title}</h3>
                <div className='advantage-slogan-wrapper'>
                    <p className='advantage-slogan'>{advantage.slogan}</p>
                </div>
            </div>
            {!!advantage.image &&
                <div className='advantage-image'>
                    <img src={advantage.image.src} alt={advantage.image.alt}/>
                </div>
            }
        </li>
    );
}
