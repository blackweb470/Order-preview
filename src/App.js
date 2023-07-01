import React from "react"
import imageDesktop from './images/image-product-desktop.jpg'
import ImageMobile from "./images/image-product-mobile.jpg"
import Icon from "./images/icon-cart.svg"
function App(props) {
  return (
<div className="md:px-auto px-14">
<div className="card  rounded-2xl shadow-2xl md:flex font-outfit bg-white md:max-w-666px">
<div className="image-container w-50%">
  <img alt="preview" className="rounded-l-2xl hidden md:block" src={imageDesktop}></img>
</div>
<div className="md:hidden mobile">
<img className="md:hidden  rounded-t-2xl" src={ImageMobile} alt="mobie"></img>
</div>
<div className="p-7 md:w-50%">
  <h3 className="text-Dark-grayish-blue">P E R F U M E</h3>< br/>
  <h1 className="text-5xl font-bold text-Very-dark-blue font-sans"> Gabrielle Essence Eau De Parfum</h1>< br/>
  <p className="text-Dark-grayish-blue">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>< br/>
   <div className="amount flex gap-4"> 
    <h1 className="text-2xl font-bold text-Dark-cyan"> $149.99</h1>
    <h2 className="line-through text-xs p-2 text-Dark-grayish-blue">$169.99</h2>
   </div>< br/>
<button className="hover:bg-Dark-grayish-blue text-white w-100% h-50px bg-Dark-cyan flex justify-center pt-3 gap-3 rounded-md"><img alt="icon" className="pt-1" src={Icon} />Add to Cart</button>
</div>
 </div>
</div>
  );
}

export default App;
