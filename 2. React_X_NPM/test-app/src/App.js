import {useState} from 'react';

// const products = [
//   {title:"Apple", id:1, isFruit:true},
//   {title:"Banana", id:2, isFruit:true},
//   {title:"Cabbage",id:3, isFruit:false}
// ];


// export default function myProducts(){
//     const listItems = products.map((product) => 
//     <li key={product.id} style={{color:product.isFruit ? "magenta":"darkgreen"}}>{product.title}</li>);

//     return (
//       <ul>{listItems}</ul>
//     )
// }

// export default function myButton(){
//   function sendAlert(){
//     alert("Button has been clicked");
//   }

//   return (
//     <button onClick={sendAlert}>Click Me!</button>
//   )
// }

// export default function myApp(){
//   return (
//     <div>
//       Hello this is a test page
      
//       <MyButton/> {" "}
//       <MyButton/> {" "}
//       <MyButton/> {" "}
//       <MyButton/> {" "}
//       <MyButton/> {" "}
//       <MyButton/> {" "}
//       <MyButton/> {" "}
//       <MyButton/> {" "}
//       <MyButton/> {" "}
//     </div>
    
//   ) 
// }

// function MyButton(){
//   let [count, setCount] = useState("Kartik");

//   function increaseCount(){
//       setCount(prompt());
//   }
  
//   return (
//     <button onClick={increaseCount}>
//       Hi, {count}
//     </button>
//   );
// }



//LIKED BUTTON
export default function Liked(){
  let [liked, setLiked] = useState(true);

  function handleChange(e){
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
      <input 
        type="checkbox"
        checked={liked}
        onChange={handleChange}
      />
        You Liked This
      </label>
      <p>You {liked ? "Liked" : "Did not like"} this.</p>
    </>
  );
}


