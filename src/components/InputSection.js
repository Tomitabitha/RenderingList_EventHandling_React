import React, { useState } from 'react'
import "../styles/input-section.css"

const InputSection = ({userDetails, setSearchQuery}) => {

  const [input, setInput] = useState("") // mpnitor input value

    const handleSubmit = (event) => {
        event.preventDefault ()
    }
    const handleSearch = (event) => {
   if((input.length < 1) && (event.target.value === " ")) return
          // if (!event.target.value) {
          //   setSearchQuery(userDetails)
          // }
          setInput(event.target.value)
          const filteredData = (userDetails.filter(function(data)  {
            return (
            // data.title.toLowerCase().startsWith(event.target.value.toLowerCase()) || you were asked to filter by names
            data.firstName.toLowerCase().startsWith(event.target.value.toLowerCase()) || // remember that you are searching for a name, meaning the search value has to be the begiining of the name, startsWith is more effective than includes at this point
            data.lastName.toLowerCase().startsWith(event.target.value.toLowerCase())
            ) 
          }) )
          setSearchQuery(filteredData)

    }
  return (
    <div className='search-container'><form onSubmit={handleSubmit} > 
        <input type="text" value={input} placeholder="Search by name..." onChange={handleSearch} /> {/* this input should have a value which should be controlled by react useState */}
    
        </form></div>
  )
}

export default InputSection