import { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { useFitness } from "../../context/FitnessContext";

const AddLog = () => {
  const {addLog} = useFitness();
  const [formData, setFormData] = useState({
    date: "",
    weight: "",
    calories: "",
    workoutMinutes: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLog({
      ...formData,
      date: new Date(formData.date),
    });

    alert("Log added successfully!");
  };

  return (
    <MainLayout>
      <div className="max-w-4xl bg-white p-10 rounded-md ">
        <h1 className="text-2xl font-bold mb-2">Add Daily Log</h1>
        <p className="text-gray-500 mb-8">
          Track your daily fitness progress
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="text-sm font-bold text-gray-600">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold text-gray-600">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              placeholder="Eg: 78"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold  text-gray-600">Calories Intake</label>
            <input
              type="number"
              name="calories"
              placeholder="Eg: 2300"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold text-gray-600">Workout Minutes</label>
            <input
              type="number"
              name="workoutMinutes"
              placeholder="Eg: 45"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-1"
              required
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button className="bg-black opacity-50 cursor-pointer hover:border-5  hover:border-gray-300 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300">
              Save Log
            </button>
          </div>

        </form>
      </div>
    </MainLayout>
  );
};

export default AddLog;
