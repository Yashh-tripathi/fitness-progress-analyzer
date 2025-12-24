const confidenceStyles = {
  low: "bg-red-500 w-1/3",
  medium: "bg-yellow-500 w-2/3",
  high: "bg-green-500 w-full"
};

const PredictionCard = ({data}) => {
    return (
      <div className="mt-4">
        <p className="text-sm font-semibold mb-1">Prediction Confidence</p>

<div className="w-full h-2 bg-gray-200 rounded">
  <div
    className={`h-2 rounded transition-all duration-500 ${
      confidenceStyles[data.confidence] || confidenceStyles.medium
    }`}
  ></div>
</div>

<p className="text-xs mt-1 capitalize text-gray-600">
  {data.confidence} confidence
</p>
      </div>
    );
  };
  
  export default PredictionCard;