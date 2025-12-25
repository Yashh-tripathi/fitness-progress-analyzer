const SuggestionsCard = ({ suggestions }) => {
    if (!suggestions || suggestions.length === 0) return null;
  
    return (
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h3 className="text-xl font-bold mb-4">
          AI Fitness Suggestions
        </h3>
  
        <ul className="space-y-3">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="text-green-600 font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SuggestionsCard;
  