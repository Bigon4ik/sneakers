import search from "../../img/search.svg";
import {useContext} from "react";
import {AppContext} from "../../App";


export function Search(props){
    const {searchValue,onChangeSearchInput} = useContext(AppContext)

    return(
        <>
            <div className="titleContent d-flex justify-between align-center mb-40">
                <h1 >{searchValue ? `Search on zaprosy: " ${searchValue}"`: props.serchTitle}</h1>
                <div className="search d-flex">
                    <img src={search} alt="Search"/>
                    <input type="text"
                           placeholder={'Search...'}
                           onChange={onChangeSearchInput}
                    />
                </div>
            </div>
        </>
    )
}