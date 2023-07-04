import {useEffect,useState} from "react";
import WorkoutDetails from "../../components/WorkoutDetails";
// import Navbar3 from "../../components/Navbar3";
import Navbar3 from "../../components/Navbar3";
// import ItemForm from "../components/Itemform"
import ItemForm from "../../components/Itemform";
import UpdateForm from "../../components/Updateform";

const UpdatePage=()=>{

    // const [menuitems,setMenuItems]=useState(null);
    // useEffect(()=>{
    //     const fetchWorkouts=async()=>{
    //     const response=await fetch('/canteen/food')
    //     const json=await response.json();
    //     if(response.ok){
    //         setMenuItems(json);
    //     }
    //     }
    //     fetchWorkouts();
    // },[])
    return(
        <>
        <Navbar3 />
        <div className="home">
            {/* <div className="workouts">
                {menuitems && menuitems.map((workout)=>(
                  <WorkoutDetails key={workout._id} workout={workout}/>
                )

                )}
            </div> */}
            <UpdateForm />
        </div>
        </>
    )
}
export default UpdatePage;


