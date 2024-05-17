import React from 'react'
import Component4 from '../Component4/Component4'
import { fetchUserPage1 } from '../../../store/userPage1Slice'
import { useDispatch, useSelector } from 'react-redux'

const Component3 = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.userPage1.userList1)
  console.log("users", users)
  const filteredUsers = users?.filter(item => item.id < 4);
  return (
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Component3</h1>
      <button onClick={() => dispatch(fetchUserPage1())}>Get User List Page 1</button>
      {filteredUsers?.map((item) => {
        return (
          <div key={item?.id}>
            <p>{item?.id}</p>
            <p>{item?.first_name}</p>
            <p>{item?.last_name}</p>
            <p>{item?.email}</p>
            <img src={item?.avatar}/>

          </div>
        )
      })}
      <Component4 />
    </div>
  )
}

export default Component3
