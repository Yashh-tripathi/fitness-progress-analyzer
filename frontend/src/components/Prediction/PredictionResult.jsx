const PredictionResult = ({ data }) => {
    if (!data) return null;
  
    return (
      <div className="bg-white rounded-xl shadow p-6 mt-10">
        <h2 className="text-xl font-bold mb-4">AI Fitness Prediction</h2>
  
        <div className="flex gap-10 mb-6">
          <div>
            <p className="text-gray-500 text-sm">Predicted Weight (30 days)</p>
            <p className="text-2xl font-bold">
              {data.predictedWeight} kg
            </p>
          </div>
  
          <div>
            <p className="text-gray-500 text-sm">Confidence</p>
            <p className="text-lg font-semibold capitalize">
              {data.confidence}
            </p>
          </div>
        </div>
  
        {/* <div>
          <p className="font-semibold mb-2">Suggestions</p>
          <ul className="list-disc pl-6 text-gray-700">
            {data.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div> */}
      </div>
    );
  };
  
  export default PredictionResult;
  