import WeightChart from "./WeightChart.jsx";
import CaloriesChart from "./CaloriesChart.jsx";
import PredictionCard from "./PredictionCard.jsx";
import MainLayout from "../../components/Layout/MainLayout.jsx";
import StatCard from "./StatCard.jsx";
import { useFitness } from "../../context/FitnessContext.jsx";
import FitnessCharts from "../../components/Charts/FitnessCharts.jsx";
import { useEffect, useState } from "react";
import { fetchAllLogs, fetchLatestLog } from "../../api/log.api.js";

const Dashboard = () => {
  const [logs, setLogs] = useState([])
  const [latestlog, setLatestLog] = useState("");

    // const {logs} = useFitness();

    // const latestLogs = logs.length > 0 ? logs[logs.length - 1] : null;
    // console.log(latestLogs)

    useEffect(() => {

      fetchAllLogs().then(res => {
        setLogs(res.data)
      })


      fetchLatestLog().then(res => {
        setLatestLog(res.data)
      })
    }, [])
    const avgCalories = logs.reduce((sum, l) => sum + Number(l.calories), 0) / (logs.length || 1);

    const avgWorkout = logs.reduce((sum, l) => sum + Number(l.workoutMinutes), 0) / (logs.length || 1);
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard title="Current Weight" value={latestlog ? `${latestlog.weight} kg` : "--"} />
        <StatCard title="Avg Calories" value={logs.length ? `${Math.round(avgCalories)} kcal` : "--"} />
        <StatCard title="Avg Workout" value={logs.length ? `${Math.round(avgWorkout)} min/day` : "--"} />

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <WeightChart logs={logs} />
        
        <CaloriesChart logs={logs} />
      </div>

      {/* Prediction */}
      <PredictionCard />
      {logs.length>0 && <FitnessCharts logs={logs} />}
    </MainLayout>
  );
};

export default Dashboard;
