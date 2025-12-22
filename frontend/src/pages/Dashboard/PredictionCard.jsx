const PredictionCard = () => {
    return (
      <div className="bg-black text-white p-8 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold">30-Day Prediction</h2>
  
        <p className="text-3xl font-bold mt-4">
          75 kg
        </p>
  
        <p className="text-sm text-gray-300 mt-2">
          Based on your recent calorie intake and workouts.
        </p>
      </div>
    );
  };
  
  export default PredictionCard;