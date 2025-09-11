import { CDN_URL } from "../utils/constants";

const RestrauntCard = (prop) => {
  const { resdata } = prop;
  return (
    <div className="restraunt-card">
      <img className="logo2"
        src={ CDN_URL + resdata.info.cloudinaryImageId} alt="logo.png" />
      <h2>{resdata.info.name}</h2>
      <p>{resdata.info.cuisines.join(", ")}</p>
      <p>Rating: {resdata.info.avgRating} stars</p>
      <p>Cost: {resdata.info.costForTwo}</p>
      
      <a href={resdata.cta.link}><button className="button">Order Now</button></a>
    </div>
  );
};

export default RestrauntCard;
