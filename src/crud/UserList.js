// UserList.js
import { useUserContext } from './UserContext';

const UserList = () => {
    const { state } = useUserContext();

    return (
        <div>
            {state.users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;
