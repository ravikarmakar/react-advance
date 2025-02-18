import { useEffect } from "react";
import useMealStore from "./store";

const Meals = () => {
  const { meals, setMeals, searchQuery, setSearchQuery } = useMealStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );

        const data = await res.json();
        console.log(data);
        setMeals(data.meals);
      } catch (error) {
        console.error("Error to fatching data", error);
      }
    };

    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-10">
      <h1 className="text-4xl font-bold text-teal-600 mb-4">Seadfood Recipe</h1>
      <input
        type="text"
        placeholder="Search for meals..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-teal-400 rounded-lg p-3 mb-8 w-96 text-center focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <div className="grid grid-cols-4 gap-5 p-20">
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />

              <h2 className="text-xl font-semibold text-teal-700 mb-2">
                {meal.strMeal}
              </h2>

              <p className="text-gray-600 text-sm">delicious Seafood meals.</p>
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
};

export default Meals;
