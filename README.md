# glass-buttons

> A set of beautiful glassmorphism buttons for any react app

[![NPM](https://img.shields.io/npm/v/glass-buttons.svg)](https://www.npmjs.com/package/glass-buttons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Glass Buttons - V1.0 Release 11/20/2021

## Author: **Chris Benjamin**

## Version: **V1.0.0**

This is created as my first package to be published. This is a V1.0 release. Please report issues on github and I will resolve. I will make this open source and will accept pull requests. 


##Features: 
- Glassmorphism Buttons as React Components - Import anywhere in your react app 
- 11 Color Sets to Start just set variant prop to change colors
- 5 Rounding Options - set rounding prop to change rounding 
- Default color - If you don't set, clear is used 
- Default rounding - 0.25rem if you don't set a rounding prop
- Customizable button name - set the name prop to change the button text
- Ready for import to any project

## How to install
Run `npm i glass-buttons` to download and install the package
Then import the package in any component by calling `import GlassButton from 'glass-buttons'`
Then call the button with up to 3 customizable options `<GlassButton variant="primary" name="Primary" roun/>`


### How to use: 
```javascript
      <GlassButton variant="primary" name="primary" rounding="rounded-none"/> 
      <GlassButton variant="secondary" name="secondary" rounding="rounded-small"/>
      <GlassButton variant="danger" name="danger" rounding="rounded-large"/> 
      <GlassButton variant="success" name="success" rounding="rounded-xlarge"/> 
      <GlassButton variant="info" name="i" rounding="rounded-full"/> 
```
The code above produces the following output: 

![Glass Button Example](https://i.ibb.co/CmSwMTM/Glass-Buttons-Example-Tile-Background.png "Example Buttons")

#### You can use it just like any button component and add onClick()
```javascript
<GlassButton variant="primary" name="Primary" rounding="rounded-none" onClick={handleClick}/> 
```

## Button Variants (Colors)
- Primary
- Secondary
- Danger
- Success
- Info
- Light
- Dark
- Warning
- Link
- Default

## Button Name
The name value is the text within the button. If none is specified the default is 'BUTTON'. By default the current version pushes .toUpperCase() on the button text. 

## Styles - Rounding
The following are valid styles and their applications. Rounded-small is default. 
Border Style    |   Property
-------------   |   -----------
rounded-none    |   none;
rounded-small   |   0.25rem;
rounded-large   |   0.5rem;
rounded-xlarge  |   1.5rem;
rounded-full    |   9999px;

These are applied by setting the `rounded` property when calling the library. `<GlassButton variant="danger" name="Primary" rounding="rounded-large"/> `

The `rounded-full` is designed to be used along side an icon library for displaying a single character or icon. 

## Text Color
Text color is set to Inherit on all buttons except Dark, it's set to white. This can be overridden in css. 

## Hover Effect
All of the buttons have a hover effect that changes the opacity from 0.1 to 0.8. The exception is the Dark theme which changes the opacity from 0.8 to 0.1 on hover. 

## Overrides
You can override the styling of these buttons by calling the CSS class buttonComponent. 
```javascript
 .buttonComponent { margin-left: 20%;} 
 ```

You can override a particular style by calling the CSS Class buttonComponentvariant where variant is changed to the name of the variant above such as ```.buttonComponentprimary {padding: 1rem} ```


## Examples with different backgrounds 
![Glass Button with Tile Background](https://i.ibb.co/1RCmS64/Glass-Buttons-Example-Tile-Background.png "Tile Background")

![Glass Button with Starry Night Background](https://i.ibb.co/kMQwVf1/Glass-Buttons-Example-Stars-Background.png "Starry Night Background")

![Glass Button with Light Background](https://i.ibb.co/rf3TSRC/Glass-Buttons-Example-Light-Background.png "Light Background")

![Glass Button with Dark Background](https://i.ibb.co/L84nMPc/Glass-Buttons-Example-Dark-Background.png "Dark Background")


## License

MIT © [cbenjamin2009](https://github.com/cbenjamin2009)
