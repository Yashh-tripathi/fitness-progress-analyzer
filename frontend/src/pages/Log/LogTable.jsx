const LogTable = ({logs, EditLog, onDelete}) => {
    if(!logs || logs.length === 0){
        return (
            <div className="bg-white p-6 rounded-xl shadow text-gray-500">
                No logs added yet
            </div>
        );
    }
    return (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead className="bg-gray-500 ">
                    <tr className="bg-gray-500 text-left text-sm">
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Weight (kgs)</th>
                        <th className="px-4 py-3">Calories</th>
                        <th className="px-4 py-3">Workout (min)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log) => (
                        <tr
                            key={log._id}
                            className="border-t text-sm hover:bg-gray-400"
                        >
                            <td className="pl-4 py-3">{new Date(log.date).toDateString()}</td>
                            <td className="pl-4 py-3">{log.weight}</td>
                            <td className="pl-4 py-3">{log.calories}</td>
                            <td className="pl-4 py-3">{log.workoutMinutes}</td>
                            <td className="pl-4 py-3 ">
                                <button
                                    onClick={() => EditLog(log)}
                                    className="text-white font-bold mr-3 cursor-pointer py-0.5  px-2 bg-black"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(log._id)}
                                    className="text-black bg-red-500 px-2 py-0.5 font-bold cursor-pointer"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LogTable