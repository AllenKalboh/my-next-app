'use client'
import React, { useEffect, useState } from 'react'
import Test1 from './tests/test1/page'
import { supabase } from '@/CreateClient';
import { User } from './types/Types'
import Test2 from './tests/test2/page';
import Test3Props from './tests/test3/page';
const Home = () => {


  const [users, setUsers] = useState<User[] | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('users')
        .select()

      if (error) {
        alert(error)
      }

      if (data) {
        setUsers(data)
        console.log(data);
      }
    }
    fetchUsers();
  }, [])

  return (
    <div>
    <Test3Props id={1} name={"allen"} age={21} />
    </div>
  )
}

export default Home
