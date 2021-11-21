import React from 'react'

import { ExampleComponent } from 'glassbuttons'
import 'glassbuttons/dist/index.css'
import './App.css'

import GlassButton from './components/button'

const App = () => {
  function handleClick() {

  }
  return (
    <div className='example'>
        <ExampleComponent text="GlassButtons 😄" />
      <GlassButton variant="primary" name="Primary" rounding="rounded-none"/> {' '}
      <GlassButton variant="secondary" name="secondary" rounding="rounded-small"/>{' '}
      <GlassButton variant="danger" name="danger" rounding="rounded-large"/> {' '}
      <GlassButton variant="success" name="success" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="info" name="i" rounding="rounded-full"/> {' '}
      <br />
     <br />
     <br />
     <br />
     <br />
     <br />
   
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
      <GlassButton variant="primary" name="P" rounding="rounded-full"/> {' '}
      <br />
      <br />
      <GlassButton variant="Secondary" name="Secondary" rounding="rounded-none"/> {' '}
      <GlassButton variant="Secondary" name="Secondary" rounding="rounded-small"/> {' '}
      <GlassButton variant="Secondary" name="Secondary" rounding="rounded-large"/> {' '}
      <GlassButton variant="Secondary" name="Secondary" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="Secondary" name="S" rounding="rounded-full"/> {' '}
      <br />
      <br />
      <GlassButton variant="Danger" name="Danger" rounding="rounded-none"/> {' '}
      <GlassButton variant="Danger" name="Danger" rounding="rounded-small"/> {' '}
      <GlassButton variant="Danger" name="Danger" rounding="rounded-large"/> {' '}
      <GlassButton variant="Danger" name="Danger" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="Danger" name="D" rounding="rounded-full"/> {' '}
      <br />
      <br />
      <GlassButton variant="Success" name="Success" rounding="rounded-none"/> {' '}
      <GlassButton variant="Success" name="Success" rounding="rounded-small"/> {' '}
      <GlassButton variant="Success" name="Success" rounding="rounded-large"/> {' '}
      <GlassButton variant="Success" name="Success" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="Success" name="S" rounding="rounded-full"/> {' '}
      <br />
      <br />
      <GlassButton variant="Info" name="Info" rounding="rounded-none"/> {' '}
      <GlassButton variant="Info" name="Info" rounding="rounded-small"/> {' '}
      <GlassButton variant="Info" name="Info" rounding="rounded-large"/> {' '}
      <GlassButton variant="Info" name="Info" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="Info" name="I" rounding="rounded-full"/> {' '}
      <br />
      <br />
      <GlassButton variant="Light" name="Light" rounding="rounded-none"/> {' '}
      <GlassButton variant="Light" name="Light" rounding="rounded-small"/> {' '}
      <GlassButton variant="Light" name="Light" rounding="rounded-large"/> {' '}
      <GlassButton variant="Light" name="Light" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="Light" name="L" rounding="rounded-full"/> {' '}
      <br />
      <br />
      <GlassButton variant="Dark" name="Dark" rounding="rounded-none"/> {' '}
      <GlassButton variant="Dark" name="Dark" rounding="rounded-small"/> {' '}
      <GlassButton variant="Dark" name="Dark" rounding="rounded-large"/> {' '}
      <GlassButton variant="Dark" name="Dark" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="Dark" name="D" rounding="rounded-full"/> {' '}
      <br />
      <br />
      <GlassButton variant="Warning" name="Warning" rounding="rounded-none"/> {' '}
      <GlassButton variant="Warning" name="Warning" rounding="rounded-small"/> {' '}
      <GlassButton variant="Warning" name="Warning" rounding="rounded-large"/> {' '}
      <GlassButton variant="Warning" name="Warning" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="Warning" name="W" rounding="rounded-full"/> {' '}
      <br />
      <br />
      <GlassButton variant="Link" name="Link" rounding="rounded-none"/> {' '}
      <GlassButton variant="Link" name="Link" rounding="rounded-small"/> {' '}
      <GlassButton variant="Link" name="Link" rounding="rounded-large"/> {' '}
      <GlassButton variant="Link" name="Link" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="Link" name="L" rounding="rounded-full"/> {' '}
      <br />
      <br />
      <GlassButton variant="Default" name="Default" rounding="rounded-none"/> {' '}
      <GlassButton variant="Default" name="Default" rounding="rounded-small"/> {' '}
      <GlassButton variant="Default" name="Default" rounding="rounded-large"/> {' '}
      <GlassButton variant="Default" name="Default" rounding="rounded-xlarge"/> {' '}
      <GlassButton variant="Default" name="D" rounding="rounded-full"/> {' '}
      <br />
      <br />
     </div>
  )
}

export default App
