import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useCallback, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [btn, setBtn] = useState("Top Rated Restaurants");
  const [originalList, setOriginalList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const{loggedInUser, setUserName}=useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data);
    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log("Body Rendered");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you are offline, please check your internet connection
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div>
        <div className="upper-body">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                const filteredRestaurant = originalList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                // console.log(filteredRestaurant);
                setListOfRestaurants(filteredRestaurant);
                // console.log(listOfRestaurants);
              }}
            >
              Search
            </button>

            <input className="input-box" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}>
            </input>
          </div>
          <div className="filter">
            <button
              className="filter-btn"
              onClick={() => {
                if (btn === "Top Rated Restaurants") {
                  const filteredList = originalList.filter(
                    (res) => res.info.avgRating >= 4.5
                  );
                  setListOfRestaurants(filteredList);
                  setBtn("See All Restaurants");
                } else {
                  setListOfRestaurants(originalList);
                  setBtn("Top Rated Restaurants");
                }
              }}
            >
              {btn}
            </button>
          </div>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <Link
              to={
                "/restaurants/" +
                (Math.floor(Math.random() * (52787 - 52765 + 1)) + 52765) +
                ""
              }
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />} 
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
