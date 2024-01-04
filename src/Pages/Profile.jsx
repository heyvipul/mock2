//frontend 
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Components/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user,setIsAuth } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate()

  async function getProfile() {
    try {
      const response = await axios.post("/getProfile", {
        email: user,
      });
      const data = response.data;
      setProfileData(data);
    } catch (error) {
      console.error(error);
    }
  }

  function logout(){
    setIsAuth(false)
    alert("User Logout!")
    navigate("/")
  }

  useEffect(() => {
    getProfile();
  }, [user]);

  return (
    <div>
      <h2>Profile :</h2>
      {profileData && (
        <div>
        <h3>Email: {profileData.email}</h3>
        <h3>Name: {profileData.name}</h3>
        <h3>Timestamp: {profileData.timestamp}</h3>
        </div>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
