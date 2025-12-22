import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
}
from 'recharts';

const FitnessCharts = ({ logs }) => {   

    const chartData = logs.map((log) => ({
        date: new Date(log.date).toLocaleDateString(),
        weight: Number(log.weight),
        calories: Number(log.calories),
        workout: Number(log.workoutMinutes)
    }));

    return (
        <div className='bg-white p-6 rounded-xl mt-10'>
            <h2 className='text-lg font-semibold mb-6'>Progress Overview</h2>
            <div className='h-72'>
                <ResponsiveContainer width="100%" height="100%" >
                    <LineChart data={chartData} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="weight" strokeWidth={2}/>
                        <Line type="monotone" dataKey="calories" strokeWidth={2} />
                        <Line type="monotone" dataKey="workout" strokeWidth={2}  />
                        <Line/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )

}

export default FitnessCharts;