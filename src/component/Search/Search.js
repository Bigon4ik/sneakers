import search from "../../img/search.svg";


export function Search(props){
    return(
        <>
            <div className="titleContent d-flex justify-between align-center mb-40">
                <h1 >{props.searchValue ? `Search on zaprosy: " ${props.searchValue}"`: props.serchTitle}</h1>
                <div className="search d-flex">
                    <img src={search} alt="Search"/>
                    <input type="text"
                           placeholder={'Search...'}
                           onChange={props.onChangeValue}
                    />
                </div>
            </div>
        </>
    )
}