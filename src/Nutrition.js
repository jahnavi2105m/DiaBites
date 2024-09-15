import React, { useState } from 'react';
import axios from 'axios';

const Nutrition = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const appId = '54e60eed'
  const appKey = '0ba14dfd50306a55ff5e656914aaf3bf'; 

  const fetchNutritionInfo = async () => {
    try {
      const response = await axios.get(
        `https://trackapi.nutritionix.com/v2/natural/nutrients`, 
        {
          headers: {
            'x-app-id': appId,
            'x-app-key': appKey,
            'Content-Type': 'application/json'
          },
          data: {
            query: query
          }
        }
      );
      setResults(response.data.foods);
      setError('');
    } catch (err) {
      console.error('Error fetching nutrition data:', err);
      setError('Could not fetch nutrition data.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNutritionInfo();
  };

  return (
    <div>
      <h2>Nutrition Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a food item"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      {results && (
        <div>
          <h3>Results:</h3>
          <ul>
            {results.map((food, index) => (
              <li key={index}>
                <strong>{food.food_name}</strong>: {food.nf_calories} kcal, {food.nf_total_fat}g fat, {food.nf_total_carbohydrate}g carbs, {food.nf_protein}g protein
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nutrition;
