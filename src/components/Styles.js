import React from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import './Styles.css'

class Styles extends React.Component{
    render(){
        console.log(this.context,"asda")
        const {btn,theme,toggleDark,toggleLight,toggleDefault} = this.context;
        console.log({theme})
        console.log({btn})
        return(
            <div className={theme}>
                <div>
                    <input placeholder="enter your name"/>
                    <button className={btn}>submit</button>
                    
                </div>  
                <div className="btn-theme">
                    <span>Choose Theme : </span>
                    <button onClick={toggleDark}>Dark</button>
                    <button onClick={toggleLight}>Light</button>
                    <button onClick={toggleDefault}>Default</button>
                </div>   
            </div>
            
        );
    }
}
Styles.contextType = ThemeContext;

export default Styles;


{/* <div style={{background:theme}}></div> */}
// </div>