import React from 'react';
import cats from "./cats"
import CardList from "./components/CardList"
import SearchBox from './components/SearchBox';
import Scroll from "./components/scroll"
function App() {
  const [filteredCats,setFilteredCats] = React.useState({
    searchField : "",
    cat :cats
  })

  function handleOnSearch(event){
    let search = event.target.value
    let extreamelyFilteredCat = cats.filter(catz => {
      return catz.name.toLowerCase().includes(search.toLowerCase())
    })
      setFilteredCats(()=> {
        return {
          searchField:search,
          cat:extreamelyFilteredCat
        }
      })
  }


  return (<div className="tc">
    <h1>Cat Friends</h1>
    <SearchBox onSearch = {handleOnSearch} value = {filteredCats.searchField}/>
    <Scroll>
    <CardList array={filteredCats.cat} />
    </Scroll>
  </div>
  );
}

export default App;
