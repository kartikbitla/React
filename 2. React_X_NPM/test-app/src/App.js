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

export default function myButton(){
  function sendAlert(){
    alert("Button has been clicked");
  }

  return (
    <button onClick={sendAlert}>Click Me!</button>
  )
}