import DropDownMenu from "./DropDownMenu"
import InputSearch from "./inputsearch"

const FilterComponent = ({handleChange,filterdata,setStatus,status})=>{
return <div style={{display:'flex',justifyContent:'space-between'}}>
<InputSearch handleChange={handleChange} filterdata={filterdata} />
      <DropDownMenu status={status} setStatus={setStatus}/>
</div>
}

export default FilterComponent