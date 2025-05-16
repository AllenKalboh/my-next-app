import { User } from '@/app/types/Types';
import React from 'react'

type Props = {
    name: string;
    age: number;
    users: User[];
    isLoggedIn: boolean;
}


const Test2 = (props: Props) => {
    const { name, age, users, isLoggedIn } = props;
    return (
        <div>
            {users.map((user) => {
                return (
                    <div>
                        <h2 className='font-bold text-xl m-2'> {isLoggedIn ? "Welcome, " + user.name : "Guest"}</h2>

                        <div className='border-2 p-2 m-2 border-black' key={user.id}>
                            <h2 className='font-bold'> Your Profile</h2>
                            <p>{user.id}</p>
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Test2
