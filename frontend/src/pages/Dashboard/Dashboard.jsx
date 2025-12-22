import WeightChart from "./WeightChart.jsx";
import CaloriesChart from "./CaloriesChart.jsx";
import PredictionCard from "./PredictionCard.jsx";
import MainLayout from "../../components/Layout/MainLayout.jsx";
import StatCard from "./StatCard.jsx";
import { useFitness } from "../../context/FitnessContext.jsx";
import FitnessCharts from "../../components/Charts/FitnessCharts.jsx";

const Dashboard = () => {

    const {logs} = useFitness();

    const latestLogs = logs.length > 0 ? logs[logs.length - 1] : null;

    console.log(latestLogs)
    const avgCalories = logs.reduce((sum, l) => sum + Number(l.calories), 0) / (logs.length || 1);

    const avgWorkout = logs.reduce((sum, l) => sum + Number(l.workoutMinutes), 0) / (logs.length || 1);
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard title="Current Weight" value={latestLogs ? `${latestLogs.weight} kg` : "--"} />
        <StatCard title="Avg Calories" value={logs.length ? `${Math.round(avgCalories)} kcal` : "--"} />
        <StatCard title="Avg Workout" value={logs.length ? `${Math.round(avgWorkout)} min/day` : "--"} />

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <WeightChart />
        
        <CaloriesChart />
      </div>

      {/* Prediction */}
      <PredictionCard />
      {logs.length>0 && <FitnessCharts logs={logs} />}
    </MainLayout>
  );
};

export default Dashboard;
