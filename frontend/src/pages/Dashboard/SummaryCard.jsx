const SummaryCard = () => {
    const stats = [
      { title: "Current Weight", value: "78 kg" },
      { title: "Avg Calories", value: "2300 kcal" },
      { title: "Avg Workout", value: "45 min/day" },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-xl shadow"
          >
            <p className="text-gray-400">{item.title}</p>
            <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>
    );
  };
  
  export default SummaryCard;
  