const LogTable = ({logs}) => {
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LogTable