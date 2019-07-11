import React from 'react'
import "./style/style.css";

const Rainbow = (WrappedComponent) => {
    const colors =  ["blue", "red", "green", "orange", "pink", "black" ];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const ClassName = randomColor + '-text';
    console.log(ClassName);
    return(props)=>{
        return (
            <div className={ClassName}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}
export default Rainbow;