import {useState} from "react";


const List = ({ item, showItem, setShowIndex }) => {
  // const[hiddenState, setHiddenState]=useState(false);

  const displayItem= ()=>{
    // setHiddenState(!hiddenState);
    // console.log(hiddenState)  
    setShowIndex();
  }
  return (
    <div className="parent">
        <div className="accordion-header" onClick={displayItem}>
          <h3>{item.heading}</h3>
          <h3>⬇️</h3>
        </div>
        
        <div>
          {
            showItem===true ? <p>{item.content}</p> : null
          }
        </div>
    </div>
  )
};

export default List;
