import { useState } from "react";

function useFilter(){
    const [search, setSearch] = useState('');
    const [lessThan, setLessThan] = useState(0);
    const [greaterThan, setGreaterThan] = useState(20);

    return {
        search,
        lessThan,
        greaterThan,
        render:(
            <div>
                <p>Filters</p>

                <input type="search"
                placeholder="Search"
                onChange={(e)=>setSearch(e.target.value)} />

                <input type="number"
                defaultValue={lessThan}
                onChange={(e)=>setLessThan(e.target.value)} />

                <input type="number"
                defaultValue={greaterThan}
                onChange={(e)=>setGreaterThan(e.target.value)} />
            </div>
        )        
    }
}

export default useFilter;