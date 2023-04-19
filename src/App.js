import React, {useState} from 'react';
import InputSection from './components/InputSection';
import ProfileSearch from './components/ProfileSearch';
import { dataList } from './data';

import "../src/styles/App.css"
function App() { 
  const [userDetails] = useState(dataList)
  const [searchQuery, setSearchQuery] = useState(dataList)
  return (
    <div className="App">
     <InputSection userDetails={userDetails} setSearchQuery={setSearchQuery} />
     <ProfileSearch searchQuery={searchQuery} />
    </div>
  );
}

export default App;
