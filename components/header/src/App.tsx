import React from "react";

const App = () => {
  const [itemCount, setItemCount] = React.useState(0);
  return(
    <>
    <div>Hello ,Header of project</div>
    <div >{itemCount}
                    
                </div>
    <button
        onClick={() => {
            setItemCount(Math.max(itemCount - 1, 0));
        }}
    >-
    </button>
    <button
        onClick={() => {
            setItemCount(itemCount + 1);
        }}
    >+
    </button>
    </>
  )
}
export default App;