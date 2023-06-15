import {userActions} from "../../settings";
import {UserAction} from "../user-action/user-action";
import {AppButton} from "../app-button/app-button";

export const UserActions = () => {
    return (
        <div className='user-actions-menu'>
            <ul className='user-actions-list'>
                {userActions.map((action) => <UserAction key={action.icon} userAction={action}/>)}
            </ul>
            <AppButton
                cssClass='want-here-button'
            >
                Хочу сюда!
            </AppButton>
        </div>);
}
