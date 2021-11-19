import React from 'react'

import { ExampleComponent } from 'glassbuttons'
import 'glassbuttons/dist/index.css'
import './App.css'

import GlassButton from './components/button'

const App = () => {
  return (
    <div className='example'>
     <ExampleComponent text="GlassButtons 😄" />
    
     <GlassButton variant="primary" name="Primary"/> {' '}
     <GlassButton variant="secondary" name="Secondary"/> {' '}
     <GlassButton variant="success" name="Success"/> {' '}
     <GlassButton variant="info" name="info"/> {' '}
     <GlassButton name="Default"/>
     </div>
  )
}

export default App
