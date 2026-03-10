import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        <div className="menu-item-info">
                            <strong>{item.card.info.name}</strong>
                            <div className="menu-item-price">
                                Rs. {(item.card.info.price || item.card.info.defaultPrice) / 100}
                            </div>
                            <small>{item.card.info.description}</small>
                            <div><button className="add-btn">ADD</button></div>
                        </div>

                        {item.card.info.imageId && (
                            <div className="image-btn">
                                <img
                                    className="menu-item-img"
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                                    alt={item.card.info.name}
                                />
                                
                            </div>
                        )}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default RestaurantMenu