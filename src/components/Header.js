import {useState} from 'react';

function Header({header, showBrands, onSetName, onSetGender, onSetBrand, onSetLimit}){
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [brand, setBrand] = useState("");
  const [limit, setLimit] = useState(10);
  const [title, setTitle] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    onSetName(name);
    onSetGender(gender);
    onSetBrand(brand);
    onSetLimit(limit);

    setTitle(gender)
  }

  function renderTitle(param){
    switch(param){
      case 'men':
        return 'Men';
      case 'women':
        return 'Women';
      case 'child':
        return 'Youth';
      case 'infant':
        return 'Youth'
      case 'preschool':
        return 'Youth';
      case 'toddler':
        return 'Youth';
      case 'unisex':
        return 'Youth';
      default: return 'Home';
    }
  }


  return (<main className="container">
        <div className="page-header">
            <h1>
              { renderTitle(title)}
            </h1>
            <div class="title-underline"></div>
        </div>

          <form className="search-box" onSubmit={handleSubmit}>

          <div className="name-search">
            <label htmlFor="name">Shoe Name:</label>
            <input type='text' name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="gender-search">
          <label htmlFor="gender">Gender:</label>
            <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">-Select One-</option>
              <option value="child">Child</option>
              <option value="infant">Infant</option>
              <option value="men">Men</option>
              <option value="preschool">Preschool</option>
              <option value="toddler">Toddler</option>
              <option value="unisex">Unisex</option>
              <option value="women">Women</option>
              <option value="youth">Youth</option>
            </select>
          </div>

          <div className="brand-search">
          <label htmlFor="brand">Brand:</label>
            <select name="brand" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">-Select One-</option>
              {
                showBrands.map( (brand, i) => {
                  return <option value={brand} key={i}>{brand}</option>
                })
              }
            </select>
          </div>

          <div className="limit-search">
            <label htmlFor="limit">Limit: </label>
            <select name="limit" id="limit" value={limit} onChange={(e) => setLimit(e.target.value)}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <button className="btn">Search</button>

          </form>

  </main>)
}

export default Header;