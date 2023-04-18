import React from 'react'
import "../styles/input-section.css"

const InputSection = ({userDetails, setSearchQuery}) => {

    const handleSubmit = (event) => {
        event.preventDefault ()
    }
    const handleSearch = (event) => {
          if (!event.target.value) {
            setSearchQuery(userDetails)
          }
          const filteredData = (userDetails.filter(function(data)  {
            return (
            data.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
            data.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
            data.lastName.toLowerCase().includes(event.target.value.toLowerCase())
            ) 
          }) )
          setSearchQuery(filteredData)

    }
  return (
    <div className='search-container'><form onSubmit={handleSubmit} > 
        <input type="text" placeholder="Search by name..." onChange={handleSearch} />
    
        </form></div>
  )
}

export default InputSection