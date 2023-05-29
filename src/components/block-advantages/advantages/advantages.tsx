import {SectionTitle} from '../../section-title/section-title';
import {advantages} from "../../../settings";
import {Advantage} from "../advantage/advantage";

export const Advantages = () => {
    return (
        <section className='advantages'>
            <div className='advantages-title-wrapper'>
                <SectionTitle
                    primaryHeader='Седона — небольшой городок в Аризоне, заслуживающий большего!'
                    secondaryHeader='Рассмотрим причины, по которым Седона круче, чем Гранд-Каньон!'
                />
            </div>
            <ul className='advantages-list'>
                {advantages.map((item) => <Advantage key={item.title} advantage={item}/>)}
            </ul>

        </section>
    );
}
