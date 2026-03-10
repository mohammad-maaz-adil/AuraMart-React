const Shimmer = ({ type }) => {
  if (type === "about") {
    return (
      <div className="about-page">
        <h1>Meet Our Team</h1>

        <div className="users-container-shimmer">
          {Array(3).fill("").map((_, index) => (
              <div className="user-card-shimmer" key={index}>
                <img/>
                <h1></h1>
                <h2></h2>
                <p></p>
                <div></div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="body-shimmer">
      <div className="search-shimmer-container">
        <input className="searchbar-shimmer" />
        <button className="search-button-shimmer"></button>
      </div>

      <div className="sortbutton-container-shimmer">
        <div className="sort-button-shimmer"></div>
        <div className="sort-button-shimmer"></div>
        <div className="sort-button-shimmer"></div>
        <div className="sort-button-shimmer"></div>
      </div>

      <div className="shimmer-container">
        {Array(13)
          .fill("")
          .map((_, index) => (
            <div className="shimmer-card" key={index}></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;