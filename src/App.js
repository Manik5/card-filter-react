import React from 'react';

import SearchBox from './components/SearchBox';

class App extends React.Component{
  render() {
    return(
      <div className="MainBox">
          <h2 className="text">Search for a card</h2>
        <div className="App">
        </div>
         <div>
           <SearchBox items/>
         </div>
      </div>
    )
  }
};

export default App;

