import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CaloriesChart = ({ logs }) => {
  if (!logs || logs.length === 0) {
    return <p className="text-gray-400">No calorie data available</p>;
  }

  const data = logs.map(log => ({
    date: new Date(log.date).toLocaleDateString(),
    calories: log.calories,
  }));

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h2 className="text-lg font-semibold mb-4">Calories Intake</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="calories" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CaloriesChart;
