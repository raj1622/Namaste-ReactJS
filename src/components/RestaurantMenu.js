import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = ()=> {
    
    const{resId}=useParams();
    const dispatch=useDispatch();
    
    const resInfo=useRestaurantMenu(resId);

    // useEffect(()=>{
    //     fetchMenu();
    // }, []);

   
    // const fetchMenu= async()=>{
    //     const data=await fetch(MENU_API_URL+resId);
    //     const json=await data.json();
    //     setResInfo(json);
    // }
    if(resInfo===null){
        return <Shimmer/>
    }

    const {strMeal, strArea}=resInfo?.meals[0];
    const resCards=[];
    resCards.push(resInfo?.meals[0]?.strIngredient1);
    resCards.push(resInfo?.meals[0]?.strIngredient2);
    resCards.push(resInfo?.meals[0]?.strIngredient3);
    resCards.push(resInfo?.meals[0]?.strIngredient4);
    resCards.push(resInfo?.meals[0]?.strIngredient5);
    resCards.push(resInfo?.meals[0]?.strIngredient6);
    // ideally should have got this from an array
    
    const handleAddItem= (item)=> { 
        dispatch(addItem(item));
    }
    return(
        
        <div>
            <h1>{strMeal}</h1>
            <h2>{strArea}</h2>
            <ul>
                {resCards.map((item, index)=> <li className="menu-item" key={index}>{item} - Rs.{250} <button className="add-button" onClick={()=>handleAddItem(item)}>Add+</button></li>)}
                {/* <li>{resCards[0]}</li>
                <li>{resCards[1]}</li>
                <li>{resCards[3]}</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;