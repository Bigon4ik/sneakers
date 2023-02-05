import logo from "../../img/logo.png";
import car from "../../img/car.svg";
import like from "../../img/like.svg";
import user from "../../img/user.svg";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";


export function Header(props){

    return(
        <>
            <header className='d-flex justify-between align-center p-40'>
                    <Link to={"/"}>
                        <div className='d-flex align-center'>
                        <img width={40} height={40} src={logo} alt='logo'/>
                        <div>
                            <h3 className='text-uppercase'>Sneakers</h3>
                            <p className='opacity-5'>Shop best sneakers</p>
                        </div>
                        </div>
                    </Link>
                <div>
                    <ul className='d-flex'>
                        <li className='mr-30 cu-p' onClick={props.changeCart}>
                            <img  width={18} height={18} src={car} alt='cart'/>
                            <span>{0} p</span>
                        </li>
                        <Link to={"favorites"}>
                            <li className='cu-p'>
                                <img width={18} height={18} src={like} alt='like'/>
                            </li>
                        </Link>
                        <Link to={"user"}>
                            <li className='cu-p'>
                                <img width={18} height={18} src={user} alt='user'/>
                            </li>
                        </Link>

                    </ul>
                </div>
            </header>
        </>
    )
}