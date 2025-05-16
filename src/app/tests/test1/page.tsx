import { User } from '../../types/Types'

type Props = {
    users: User[];
    name: string;
    age?: number;
}

export default function Test1(props: Props) {

    const { users, name } = props;

    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id} className="border-2 border-black p-2 m-2">
                        <p> {name}</p>
                        <p>  {user.id}</p>
                        <p>  {user.name}</p>
                        <p>  {user.age}</p>
                    </div>
                )
            })}

        </div>
    );
}