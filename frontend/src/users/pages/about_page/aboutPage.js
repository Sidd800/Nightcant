import {useEffect,useState} from "react";
import WorkoutDetails from "../../components/WorkoutDetails";
import Navbar3 from "../../components/Navbar3";
// import ItemForm from "../components/Itemform"
import ItemForm from "../../components/Itemform";

const AboutPage=()=>{

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
            <ItemForm />
        </div>
        </>
    )
}
export default AboutPage;





// import { useState } from 'react'

// const ItemForm = () => {
//   const [id, setId] = useState('')
//   const [name, setName] = useState('')
//   const [category, setCategory] = useState('')
//   const [price, setPrice] = useState('')
//   const [error, setError] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const item = {id,name,category,price}
    
//     const response = await fetch('/canteen/food', {
//       method: 'POST',
//       body: JSON.stringify(item),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     const json = await response.json()

//     if (!response.ok) {
//       setError(json.error)
//     }
//     if (response.ok) {
//       setError(null)
//       setId('')
//       setName('')
//       setCategory('')
//       setPrice('')
//       console.log('new workout added:', json)
//     }

//   }

//   return (
//     <form className="create" onSubmit={handleSubmit}> 
//       <h3>Add a New Item</h3>

//       <label>Item Id: </label>
//       <input 
//         type="number" 
//         onChange={(e) => setId(e.target.value)} 
//         value={id}
//       />

//       <label>Item Name: </label>
//       <input 
//         type="text" 
//         onChange={(e) => setName(e.target.value)} 
//         value={name}
//       />

//       <label>Category: </label>
//       <input 
//         type="text" 
//         onChange={(e) => setCategory(e.target.value)} 
//         value={category} 
//       />
         
//       <label>Price: </label>
//       <input 
//         type="number" 
//         onChange={(e) => setPrice(e.target.value)} 
//         value={price} 
//       />

//       <button>Add Item</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   )
// }

// export default ItemForm