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
     <GlassButton variant="danger" name="Danger"/> {' '}
     <GlassButton variant="success" name="Success"/> {' '}
     <GlassButton variant="info" name="info"/> {' '}
     <GlassButton variant="light" name="light"/> {' '}
     <GlassButton variant="dark" name="dark"/> {' '}
     <br />
     <br />
     <GlassButton variant="warning" name="warning"/> {' '}
     <GlassButton variant="link" name="link" rounding="rounded-full"/> {' '}
     <GlassButton name="Default"/>
      <br />
      <br />
      <GlassButton variant="primary" name="Primary" rounding="rounded-none"/> {' '}
      <GlassButton variant="primary" name="Primary" rounding="rounded-small"/> {' '}
      <GlassButton variant="primary" name="Primary" rounding="rounded-large"/> {' '}
      <GlassButton variant="primary" name="Primary" rounding="rounded-xlarge"/> {' '}

     </div>
  )
}

export default App
