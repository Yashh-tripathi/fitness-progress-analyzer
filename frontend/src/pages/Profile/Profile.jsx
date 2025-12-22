import React, { useState } from 'react'
import MainLayout from '../../components/Layout/MainLayout.jsx'

const Profile = () => {
  const [profile, setProfile] = useState({
    height: "",
    age: "",
    gender: "",
    goal: ""
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <MainLayout>
      <div className="max-w-xl bg-white p-8 rounded-xl border">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>

        <div className="space-y-5">
          <input name="height" placeholder="Height (cm)" onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <input name="age" placeholder="Age" onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <select name="gender" onChange={handleChange}
            className="w-full border p-3 rounded-lg">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select name="goal" onChange={handleChange}
            className="w-full border p-3 rounded-lg">
            <option value="">Fitness Goal</option>
            <option>Lose Weight</option>
            <option>Maintain</option>
            <option>Gain Muscle</option>
          </select>

          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Save Profile
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile