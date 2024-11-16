import { useState } from "react"


function SearchBar(props) {
 const [input, setInput] = useState("")
 console.log(input)

 const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(input)
  props.onSearch(input)
 }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
       
        <label > Search</label>
        <input 
        type="text" 
        placeholder="seach here"
        className="border border-gray-300 p-2 rounded-md flex-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
        
    </form>
   
  )
}

export default SearchBar