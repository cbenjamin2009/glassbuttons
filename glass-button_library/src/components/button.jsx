
/*
    Author: Chris Benjamin 
    Author Website: https://chrisbenjamin.dev 
    Details: 
 This component will be created as a react library
 this component will return a button with a glass morphism effect
 This component will account for invalid props 
*/

import React, {useState, useEffect} from 'react';
import './button.css'

function GlassButton(props){
    const [color, setColor] = useState(null)
    const [buttonText, setButtonText] = useState('button')
    const [rounding, setRounding] = useState('0.25rem')
    
    // useEffect to catch if the name prop wasn't set or if it's blank and let it be default, otherwise set it to the prop value
    useEffect(() => {
        if (props.name !== undefined && props.name !== ''){
        setButtonText(props.name)
        }
    }, [props.name])

    console.log('rounding: ', props.rounding)
    
    useEffect(() => {
        if (props.rounding !== undefined && props.rounding !== ''){
            switch(props.rounding.toLowerCase()){
                case 'rounded-none':
                    setRounding("0px")
                    break;
                case 'rounded-small':
                    setRounding('0.25rem')
                    break;
                case 'rounded-large':
                    setRounding( '0.5rem')
                    break;
                case 'rounded-xlarge':
                    setRounding("1.5rem")
                    break;
                case 'rounded-full':
                    setRounding( "9999px")
                    break;
                default:
                    setRounding('0.25rem')
                    break;
            }
        } else {
            setRounding('0.25rem')
        }
    }, [props.rounding])

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
            case 'warning':
                setColor('warning')
                break;
            case 'light':
                setColor('light')
                break;
            case 'dark':
                setColor('dark')
                break;
            case 'link':
                setColor('link')
                break;
            case 'info':
                setColor('info')
                break;
            case 'danger':
                setColor('danger')
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
            style={{backgroundColor: color, borderRadius: rounding}}>
                {buttonText.toUpperCase()}
            </button>
        )
}


export default GlassButton;