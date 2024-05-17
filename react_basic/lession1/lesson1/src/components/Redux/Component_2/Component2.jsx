import React from 'react'
import Component3 from '../Component3/Component3'
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserPage2 } from './../../../store/userPage2Slice';

const Component2 = () => {
  const dispatch = useDispatch();
  const userList = useSelector((store) => store.userPage2.userList)
  return (
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Component2</h1>
      <button onClick={() => dispatch(fetchUserPage2())}>Fetch Users page 2</button>
      {userList?.map((item) =>{
        return (
          <div key={item?.id}>
            <p>{item?.first_name}</p>
            <p>{item?.last_name}</p>
            <p>{item?.email}</p>

          </div>
        )
          
        
      })}
      <Component3 />
    </div>
  )
}

export default Component2
