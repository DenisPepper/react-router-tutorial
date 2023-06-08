import {features} from "../../../settings";
import {Feature} from "../features/feature";

export const Filter = () => {
    return (
        <section className='filter'>
            <h2 className='visually-hidden'>Панель отбора гостиниц по фильтрам</h2>

            <form action='#'>

                <fieldset className='filter-set'>
                    <legend>Инфраструктура:</legend>
                    <div className='filter-set-wrapper'>
                        {features.map((feature) => <Feature key={feature.name} feature={feature}/>)}
                    </div>
                </fieldset>

            </form>
        </section>
    );
}
