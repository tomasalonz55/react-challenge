import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title='MSI GL65 Leopard 10SFK-062 15.6" FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB NVMe SSD Win 10'
            price={1390.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81ftUqDdYFL._AC_SY400_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Wireless Earbuds Bluetooth 5.0 Earphones, IPX7 Waterproof Bluetooth Earbuds with 30H Playtime, TWS Stereo in-Ear Sports Headset"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61eFQvYbKwL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="B-Land Laptop Stand, Adjustable Laptop Holder Laptop Riser Aluminum Notebook Computer Holder Stand Compatible with MacBook"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/410uxpOswdL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41Z3YXUY89L._AC_SX368_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Apple iPad (10.2-inch, Wi-Fi, 128GB) - Space Gray (Latest Model)"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_SX184_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
