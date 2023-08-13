import SearchItem from './SearchItem';

function SearchResults({ sneakers}){

  return (<main className="container">
      <div className="search-results grid grid--4-cols">
        {
          sneakers.map(sneaker => {
            return <SearchItem sneaker={sneaker} key={sneaker.id}/>
          })
        }
      </div>
    </main>)
}

export default SearchResults
