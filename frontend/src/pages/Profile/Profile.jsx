import { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { fetchProfile, updateProfile } from "../../api/user.api";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [permission, setPermission] = useState(false);

  const handlePermission = async () => {
    
    setPermission(true);
  }

  useEffect(() => {
    fetchProfile().then((res) => {
      setProfile(res.data);
      setFormData(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await updateProfile(formData);
      setProfile(res.data); // update UI instantly
      setFormData(res.data);
    } finally {
      setLoading(false);
      setPermission(false);
    }
  };

  return (
    <MainLayout>
      {/* Username Header */}
      {profile && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold">@{profile.username}</h1>
          <p className="text-gray-500">Profile Overview</p>
        </div>
      )}

      {/* Profile Details */}
      {profile && (
        <div className="bg-white rounded-xl shadow p-6 mb-10 grid grid-cols-2 gap-6">
          <Detail label="Name" value={profile.name} />
          <Detail label="Email" value={profile.email} />
          <Detail label="Age" value={profile.age} />
          <Detail label="Gender" value={profile.gender} />
          <Detail label="Goal" value={profile.goal} />
          <Detail label="Height" value={`${profile.height} cm`} />
        </div>
      )}

      {/* Edit Profile */}
      <button onClick={handlePermission} className="bg-black text-white px-4 py-1 font-bold cursor-pointer rounded-md  items-end-safe hover:px-5 transition-all duration-200">
        Edit
      </button>
      {permission && <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 max-w-xl mt-10"
      >
        <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>

        <Input
          label="Age"
          type="number"
          value={formData.age || ""}
          onChange={(v) => setFormData({ ...formData, age: v })}
        />

        <Input
          label="Height (cm)"
          type="number"
          value={formData.height || ""}
          onChange={(v) => setFormData({ ...formData, height: v })}
        />

<label>Gender</label>
<select
  value={formData.gender || ""}
  onChange={(e) =>
    setFormData({ ...formData, gender: e.target.value })
  }
  className="border w-full mb-3 p-2"
>
  <option value="">Select</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>

<label>Goal</label>
<select
  value={formData.goal || ""}
  onChange={(e) =>
    setFormData({ ...formData, goal: e.target.value })
  }
  className="border w-full mb-4 p-2"
>
  <option value="">Select</option>
  <option value="Lose Weight">Lose Weight</option>
  <option value="Maintain">Maintain</option>
  <option value="Gain Muscle">Gain Muscle</option>
</select>

        <button
          disabled={loading}
          className="mt-6 bg-black text-white px-6 py-2 rounded hover:opacity-80 transition"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>}
    </MainLayout>
  );
};

export default Profile;

/* ---------- Reusable Components ---------- */

const Detail = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold">{value || "--"}</p>
  </div>
);

const Input = ({ label, type = "text", value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded w-full px-3 py-2"
    />
  </div>
);
