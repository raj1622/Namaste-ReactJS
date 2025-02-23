import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
      resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="image"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
  
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props)=> {
    return(
      <div>
        <label className="promoted">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;