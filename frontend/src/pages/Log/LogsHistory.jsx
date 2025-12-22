import React from 'react'
import { useFitness } from '../../context/FitnessContext'
import MainLayout from '../../components/Layout/MainLayout';

const LogsHistory = () => {

    const {logs} = useFitness();

  return (
   <MainLayout>
    <div className='bg-white p-8 rounded-xl shadow-xl'>
      <h1 className='font-bold text-3xl mb-6 '>Logs History</h1>
      {logs.length === 0 ? (
        <p className="text-gray-500">No logs added</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-3">Date</th>
              <th>Weight</th>
              <th>Calories</th>
              <th>Weight(min)</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log,index) => (
              <tr key={index} className="border-b text-sm">
                <td className="py-3 font-semibold">
                    {new Date(log.date).toLocaleDateString()}
                  </td>
                  <td>{log.weight} kg</td>
                  <td>{log.calories}</td>
                  <td>{log.workoutMinutes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
   </MainLayout>
  )
}

export default LogsHistory