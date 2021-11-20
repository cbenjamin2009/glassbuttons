
/*
    Author: Chris Benjamin 
    Author Website: https://chrisbenjamin.dev 
    Details: 
 This component will be created as a react library
 this component will return a button with a glass morphism effect
 This component will account for invalid props 
*/

import React, {useState, useEffect} from 'react';
import './index.css'

const GlassButton = (props) => {
    const [color, setColor] = useState(null)
    const [buttonText, setButtonText] = useState('button')
    
    // useEffect to catch if the name prop wasn't set or if it's blank and let it be default, otherwise set it to the prop value
    useEffect(() => {
        if (props.name !== undefined && props.name !== ''){
        setButtonText(props.name)
        }
    }, [props.name])
    

    useEffect(() => {
        if (props.variant !== undefined && props.variant !== ''){
        switch(props.variant.toLowerCase()){
            case 'primary':
                setColor('primary')
                break;
            case 'secondary':
                setColor('secondary')
                break;
            case 'success':
                setColor('success')
                break;
            default:
                setColor('default')
                break;
        }
    } else {
        setColor('default')
    }
    }, [props.variant])

        

        return (
            <button className={`buttonComponent buttonComponent${color}`}
            style={{backgroundColor: color}}>
                {buttonText.toUpperCase()}
            </button>
        )
}

export default GlassButton;