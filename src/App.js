import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [additem, setcart] = useState(0)

  const plan = [
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/3/2cae4a87-d32e-4d88-9f54-37f46ce224481612366527230-1.jpg",
      name: "Fancy Product",
      price: "$40.00 - $80.00",
      button: "Add to cart"

    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14174494/2021/9/2/ea9299fb-a6cc-4bf4-be60-eb0b900ee2d51630566919960-Allen-Solly-Women-Backpacks-4641630566919281-1.jpg",
      name: "Special Item",

      price: "$40.00 - $80.00",
      button: "Add to cart"
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14984320/2021/8/18/78ba6dd1-7e5d-4921-ae99-0a610b4281301629270145204-HRX-by-Hrithik-Roshan-Unisex-Orange-Football-Shoes-192162927-1.jpg",
      name: "Sale Item",

      price: "$40.00 - $80.00",
      button: "Add to cart"
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8429899/2021/4/7/949ee002-897c-4d90-8348-e567f6c62ec41617798082840-W-Women-Blue--Off-White-Printed-Straight-Kurta-2011617798081-1.jpg",
      name: "Popular Item",

      price: "$40.00 - $80.00",
      button: "Add to cart"
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15040574/2021/8/16/93930149-cfb5-47af-8d7f-c4f98e471dbc1629095134249-realme-Watch-2Black-Strap-5751629095134044-1.jpg",
      name: "Sale Item",

      price: "$40.00 - $80.00",
      button: "Add to cart"



    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/27/bba5c094-12b9-4914-ab0e-3fbb0f9cee8b1606466717515-1.jpg",
      name: "Fancy Item",

      price: "$40.00 - $80.00",
      button: "Add to cart"
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12881716/2020/11/20/640b562c-3ef2-4a21-832f-1c524b63ad721605852695233WingsUnisexBlackRevelTrueWirelessTWSEarbuds5.jpg",
      name: "Special Item",

      price: "$40.00 - $80.00",
      button: "Add to cart"
    },
    {
      src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10384141/2019/9/20/7711e986-455b-4289-93ae-b29697cc76971568976326111-Taavi-Men-Kurtas-5631568976324567-1.jpg",
      name: "Popular Item",

      price: "$40.00 - $80.00",
      button: "Add to cart"
    }
  ]
  return (


    <div>

      <div className="addtocartdiv">

        <button className="btnaddtocart"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> CART <span className="addtocart">{additem}</span></button>
      </div>
      <h1 className="title">Shop <span className="in">in</span> style..</h1>

      <div className="App">


        {
          plan.map((plan) => (
            <Card imgname={plan.src} name={plan.name} price={plan.price} btn={plan.button} incresecart={setcart} additem={additem} />
          ))
        }




      </div>
    </div>

  );
}

export default App;


function Card({ imgname, name, price, btn, incresecart, additem }) {
  return (
    <div className="card">

      <img className="img" src={imgname} />
      < p className="name">{name}</p>
      <hr />
      <p className="price">{price}</p>
      <button className="button" onClick={() => incresecart(additem + 1)} >{btn}</button>
      <button className="button1" onClick={() => additem ?  incresecart(additem - 1) : additem} >Remove item</button>
    </div>
  );
}