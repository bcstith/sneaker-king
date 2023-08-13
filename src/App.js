import {useState, useEffect} from 'react';
//import rawData from './data.json';
import axios from 'axios';
import Header from './components/Header';
import SearchResults from './components/SearchResults';


function App() {
  const [header, setHeader] = useState("Home");
  const [sneakers, setSneakers] = useState([]);
  const [gender, setGender] = useState("men");
  const [showBrands, setShowBrands] = useState([]);
  const [brand, setBrand] = useState(null);
  const [name, setName] = useState(null);
  const [limit, setLimit] = useState(10)


  const APIKEY = "dd27b7bef7mshb037b817ad07154p105a01jsn1c018d4bb4cc";
  const HOST = 'the-sneaker-database.p.rapidapi.com';


  function handleClick(type){
    setHeader(type);

    let sType = "";

    if(type !== "Home"){
      sType = type;
    }

    setGender(sType)
  }

   const url = `https://the-sneaker-database.p.rapidapi.com`;



  async function getData(){


    // const res = await fetch(`${url}/sneakers?limit=${limit}&gender=${gender}&name=${encodeURIComponent(param.name)}`, {
    //   headers: {
    //     'X-RapidAPI-Key': APIKEY,
    //     'X-RapidAPI-Host': HOST
    //   }
    // })
    // const data = await res.json();
    // setSneakers(data.results);

    const options = {
      method: 'GET',
      url: `${url}/sneakers`,
      params: {
        ...(limit && {limit: limit}),
        ...(gender && {gender: gender}),
        ...(brand && {brand: brand}),
        ...(name && {name: name})
      },
      headers: {
        'X-RapidAPI-Key': 'dd27b7bef7mshb037b817ad07154p105a01jsn1c018d4bb4cc',
        'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
	  //console.log(response.data.results);
    setSneakers(response.data.results);
  }

  useEffect(function(){
    getData()
  }, [gender, name, brand, limit]);

  async function getBrands(){
    const res = await fetch(`${url}/brands`, {
      headers: {
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': HOST
      }
    })

    const data = await res.json();
    setShowBrands(data.results);
  }

  useEffect(function(){
    getBrands()
  }, []);

  function handleName(term){
    setName(term)
  }

  function handleGender(term){
    setGender(term)
  }

  function handleBrand(term){
    setBrand(term)
  }

  function handleLimit(qty){
    setLimit(qty)
  }


  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo-header">
            <img src="images/crown.png" alt="crown-logo" className="logo-image"/>
            <h1>SneakerKing</h1>
          </div>
          <ul className="navigation">
            <li><a href="/#" className="nav-link" onClick={() => handleClick("Home")}>Home</a></li>
            <li><a href="/#" className="nav-link" onClick={() => handleClick("Men")}>Men</a></li>
            <li><a href="/#" className="nav-link" onClick={() => handleClick("Women")}>Women</a></li>
            <li><a href="/#" className="nav-link" onClick={() => handleClick("Youth")}>Youth</a></li>
          </ul>
        </nav>
      </header>

      <Header
        header={header}
        showBrands={showBrands}
        onSetName={handleName}
        onSetGender={handleGender}
        onSetBrand={handleBrand}
        onSetLimit={handleLimit} />

     <SearchResults sneakers={sneakers}/>

    </div>
  );
}

export default App;
