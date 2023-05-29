import {SectionTitle} from '../../section-title/section-title';
import {advantages, advantagesWithIcon} from "../../../settings";
import {Advantage} from "../advantage/advantage";

export const Advantages = () => {
    return (
        <section className='advantages'>
            <div className='advantages-slogan-1'>
                <SectionTitle
                    primaryHeader='Седона — небольшой городок в Аризоне, заслуживающий большего!'
                    secondaryHeader='Рассмотрим причины, по которым Седона круче, чем Гранд-Каньон!'
                />
            </div>

            <ul className='advantages-list'>
                {advantages.map((item) => <Advantage key={item.title} advantage={item}/>)}
            </ul>

            <div className='advantages-slogan-2'>
                <SectionTitle
                    primaryHeader='Приезжайте в Седону отдохнуть в комфорте и уюте!'
                    secondaryHeader='Опытный персонал и качественное обслуживание!'
                />
            </div>

            <ul className='advantages-list'>
                {advantagesWithIcon.map((item) => <Advantage key={item.title} advantage={item}/>)}
            </ul>

        </section>
    );
}
