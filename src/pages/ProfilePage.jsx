import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';
import { AuthContext } from '../../context/authContext';

const ProfilePage = () => {
  const {authUser,updateProfile} = useContext(AuthContext)
  const [selectedImg,setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name,setName] = useState(authUser?.fullName);
  const [bio,setBio] = useState(authUser?.bio);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if(!selectedImg){
      await updateProfile({fullName:name,bio});
      navigate("/");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedImg);
    reader.onload = async() => {
      const base64Img = reader.result;
      await updateProfile({fullName:name,bio,profilePic:base64Img});
      navigate("/");

    }

  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-cover bg-no-repeat'>
       <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>

        <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 p-10 flex-1'>
           <h3 className='text-lg '>Profile Details</h3>
           <label htmlFor='avatar' className='flex items-center gap-3 cursor-pointer'>
            <input type='file' id="avatar" accept='.png, ,jpg, ,jpeg' hidden onChange={(e)=> {
              setSelectedImg(e.target.files[0])
            }}/>
            <img src={selectedImg ? URL.createObjectURL(selectedImg) : authUser?.profilePic || assets.avatar_icon} className={`w-12 h-12 ${(selectedImg || authUser?.profilePic) &&  "rounded-full"}`} alt=""/>
            upload image
           </label>
           <input onChange={(e) => {
              setName(e.target.value)
           }}  value={name} type="text" required placeholder='Your name' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'/>
           <textarea onChange={(e) => {
            setBio(e.target.value)

           }}  value={bio} rows={4} required placeholder='Write a profile bio' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'></textarea>
           <button type='submit' className='bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer'>Save</button>
        </form>
        
        <img className={`${selectedImg &&  "rounded-full"} max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10`} src={authUser?.profilePic || assets?.logo_icon} alt=""/>

       </div>
        
      
    </div>
  )
}

export default ProfilePage

