import React, { useEffect, useState } from 'react'
import { useFitness } from '../../context/FitnessContext.jsx'
import MainLayout from '../../components/Layout/MainLayout.jsx';
import LogTable from './LogTable.jsx';
import { fetchAllLogs } from '../../api/log.api.js';

const LogsHistory = () => {

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchAllLogs().then(res => {
      setLogs(res.data);
    });
  }, []);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Log History</h1>
      <LogTable logs={logs} />
    </MainLayout>
  );
}

export default LogsHistory