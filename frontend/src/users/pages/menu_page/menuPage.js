import {useEffect,useState} from "react";
import WorkoutDetails from "../../components/WorkoutDetails";
import Navbar3 from "../../components/Navbar3";
// import ItemForm from "../components/Itemform"
import ItemForm from "../../components/Itemform";

const MenuPage=()=>{

    const [menuitems,setMenuItems]=useState(null);
    useEffect(()=>{
        const fetchWorkouts=async()=>{
        const response=await fetch('/canteen/food',{
            method:"GET"
        })
        const json=await response.json();
        if(response.ok){
            setMenuItems(json);
        }
        }
        fetchWorkouts();
    },[])
    return(
        <>
        <Navbar3 />
        <div className="home">
            <div className="workouts">
                {menuitems && menuitems.map((workout)=>(
                  <WorkoutDetails key={workout._id} workout={workout}/>
                )

                )}
            </div>
            {/* <ItemForm /> */}
        </div>
        </>
    )
}
export default MenuPage;