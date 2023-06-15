import {IUserAction, UserActionsIcon} from "../../settings";
import {FavoriteCounter} from "../favorite-counter/favorite-counter";

interface UserActionProps {
    userAction: IUserAction;
}

const Classes: Record<UserActionsIcon, string> = {
    "./images/heart.svg": 'user-action--favorites',
    "./images/search.svg": 'user-action--search',
}

export const UserAction = (props: UserActionProps) => {
    const {userAction: {innerObject, icon, ariaLabel}} = props;

    return (
        <li className='user-action-item'>

            {innerObject === 'button' &&
                <button
                    className={`user-action ${icon && Classes[icon]}`}
                    aria-label={ariaLabel}
                >
                </button>}

            {innerObject === 'anchor' &&
                <>
                    <a
                        className={`user-action ${icon && Classes[icon]}`}
                        href='#'
                        aria-label={ariaLabel}
                    >
                    </a>
                    <FavoriteCounter/>
                </>}

        </li>

    );
}
