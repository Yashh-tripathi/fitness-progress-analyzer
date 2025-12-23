import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"


const WeightChart = ({logs}) => {
  if(!logs || logs.length === 0){
    return <p className="text-gray-400">No weight data available</p>
  }
  const data = logs.map(log => ({
    date: new Date(log.date).toLocaleDateString(),
    weight: log.weight,
  }));

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h2 className="text-lg font-semibold mb-4">Weight Progress</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="weight"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  };
  
  export default WeightChart;
  