

 const InputSearch = ({handleChange,filterdata})=>{
    return(
        <input className="search" placeholder="search"
        onChange={(e)=>handleChange(e.target.value)}
        value={filterdata}
        />
    )
}

export default InputSearch