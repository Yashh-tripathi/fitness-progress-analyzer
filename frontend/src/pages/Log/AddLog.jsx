import { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
// import { useFitness } from "../../context/FitnessContext";
import { addDailyLog } from "../../api/log.api.js";
const AddLog = () => {
  const [formData, setFormData] = useState({
    date: "",
    weight: "",
    calories: "",
    workoutMinutes: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await addDailyLog({
        ...formData,
        weight: Number(formData.weight),
        calories: Number(formData.calories),
        workoutMinutes: Number(formData.workoutMinutes)
      });

      setMessage("Log added successfully");
      setFormData({
        date: "",
        weight: "",
        calories: "",
        workoutMinutes: ""
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to add log"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md">
      <h2 className="text-xl font-semibold mb-4">Add Daily Log</h2>

      {message && (
        <p className="mb-3 text-sm text-center">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="calories"
          placeholder="Calories"
          value={formData.calories}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="workoutMinutes"
          placeholder="Workout Minutes"
          value={formData.workoutMinutes}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {loading ? "Saving..." : "Add Log"}
        </button>
      </form>
    </div>
    </MainLayout>
  );
};

export default AddLog;

