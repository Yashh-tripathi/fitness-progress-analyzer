import { useState } from "react"

const EditLogModel = ({log, onClose, onSave}) => {
    const [form, setForm] = useState({
        weight: log.weight,
        calories: log.calories,
        workoutMinutes: log.workoutMinutes
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80">
            <h2 className="text-xl font-semibold mb-4">Edit Log</h2>
    
            <input name="weight" value={form.weight} onChange={handleChange} className="border w-full mb-2 p-2" />
            <input name="calories" value={form.calories} onChange={handleChange} className="border w-full mb-2 p-2" />
            <input name="workoutMinutes" value={form.workoutMinutes} onChange={handleChange} className="border w-full mb-4 p-2" />
    
            <div className="flex justify-end gap-3">
              <button onClick={onClose}>Cancel</button>
              <button
                onClick={() => onSave(form)}
                className="bg-black text-white px-4 py-1 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      );
}

export default EditLogModel