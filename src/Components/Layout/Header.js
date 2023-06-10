import { Fragment } from "react";
import classes from './Header.module.css'
import mealsImages from '../../assest/meals.jpg';
import HeaderCartButton from "./HeaderCardButton";
const Header=()=>{
    return(
        <Fragment>
            <header className={classes.header}> 
                 <h1>ReactMeal</h1>
                 <HeaderCartButton></HeaderCartButton>
            </header>
            <div className={classes['main-image']}> 
               <img src={mealsImages} alt='A Table full of delicious Food!'/>
            </div>
        </Fragment>
        
    )
}
export default Header;