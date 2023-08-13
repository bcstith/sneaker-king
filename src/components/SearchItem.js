function SearchItem({sneaker}){

  const {name, retailPrice: price, releaseYear, brand, gender} = sneaker;

return (
    <div className="shoe-box">

      {
        sneaker.image.original.length > 0 ?
        <img src={sneaker.image.original}  alt={name} className="product-image"/> :
        (
          <div className="image-spacer">
            <h2>No Image</h2>
          </div>
        )
      }

      <h2>{name}</h2>

      <p className="price">${price}</p>
      <p className="release-year"><strong>Release Year:</strong> {releaseYear}</p>
      <p className="brand"><strong>Brand:</strong> {brand}</p>
      <p className="gender"><strong>Gender:</strong> {gender}</p>

      <p className="store-logos">
        {
          sneaker.links.stockX.length > 0 ?
          <a href={sneaker.links.stockX} target="_new"><img src="images/stockx_logo.jpg" alt=""  className="stockx-logo"/></a>
          :''
        }
        {
          sneaker.links.flightClub.length > 0 ?
          <a href={sneaker.links.flightClub} target="_new"> <img src="images/flight-club.png" alt="" className="flight-club-logo"/></a> : ''
        }
        {
          sneaker.links.goat.length > 0 ?
          <a href={sneaker.links.goat} target="_new"><img src="images/GOAT-logo.png" alt="" className="goat-logo"/></a>: ''
        }
        {
          sneaker.links.stadiumGoods.length > 0 ?
          <a href={sneaker.links.stadiumGoods} target="_new"><img src="images/stadium-goods.png" className="stadium-goods-logo" alt=""/></a>:''
        }
      </p>
    </div>
)
}

export default SearchItem;