import React, { useEffect, useState } from 'react'
import { useFitness } from '../../context/FitnessContext.jsx'
import MainLayout from '../../components/Layout/MainLayout.jsx';
import LogTable from './LogTable.jsx';
import { deleteLog, fetchAllLogs, updateLog } from '../../api/log.api.js';
import EditLogModel from './EditLogModel.jsx';

const LogsHistory = () => {

  const [logs, setLogs] = useState([]);
  const [editingLog, setEditingLog] = useState(null)
  const handleDelete = async (id) => {
    if(!window.confirm("Delete this log?")) return ;
    await deleteLog(id);
    setLogs(prev => prev.filter(log => log._id !== id));
  }

  const handleEdit = (log) => {
    setEditingLog(log);
  }

  const handleSave = async (data) => {
    const res = await updateLog(editingLog._id, data);
    setLogs(prev => 
      prev.map(l => (l._id === editingLog._id? res.data:l))
    )
    setEditingLog(null);
  }

  useEffect(() => {
    fetchAllLogs().then(res => {
      setLogs(res.data);
    });
  }, []);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Log History</h1>
      <LogTable logs={logs} onDelete={handleDelete} EditLog={handleEdit}  />
      {editingLog && (
        <EditLogModel
          log={editingLog}
          onCLose={() => setEditingLog(null)}
          onSave={handleSave}
        />
      )}
    </MainLayout>
  );
}

export default LogsHistory