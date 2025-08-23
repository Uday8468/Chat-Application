import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSideBar from '../components/RightSideBar'

const Homepage = () => {
    const [selectedUser,setSelecetdUser] = useState(false)
  return (
    <div className='w-full h-screen border sm:px-[15%] sm:py-[5%]'>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 ${selectedUser ? "md:grid-cols-[1fr_1.5fr_1.5fr] xl:grid-cols-[1fr_2fr_1fr]": "md:grid-cols-2"} relative`}>
        <Sidebar selectedUser={selectedUser} setSelecetdUser={setSelecetdUser}/>
        <ChatContainer selectedUser={selectedUser} setSelecetdUser={setSelecetdUser}/>
        <RightSideBar selectedUser={selectedUser} setSelecetdUser={setSelecetdUser}/>
      </div>
    </div>
  )
}

export default Homepage
