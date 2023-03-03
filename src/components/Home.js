import React from "react";
import Searchbar from "./Searchbar";
import MenuBar from "./MenuBar";
import "./CSS/Home.css";
import Product from "./Product";
// import Marquee from './Marquee';
export default function Home(props) {
  return (
    <div
      className={`home ${
        props.mode === "light" ? "home__light" : "home__dark"
      }`}
    >
      <Searchbar
        title="Compareverything"
        toggleMode={props.toggleMode}
        mode={props.mode}
      />
      <MenuBar mode={props.mode} toggleMode={props.toggleMode} />
      {/* <Marquee/> */}
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          {/* product */}
          <Product
            id={1}
            title="A-DATA 8GB DDR4 modules for notebooks 3200MHZ Laptop Memory (AD4S320038G22-RGN)"
            image="https://m.media-amazon.com/images/I/710WlEKvWmL._SX679_.jpg"
          />
          {/* product */}
          <Product
            id={2}
            title="Crucial RAM 8GB DDR4 3200MHz CL22 (or 2933MHz or 2666MHz) Laptop Memory CT8G4SFRA32A"
            image="https://m.media-amazon.com/images/I/71exOjbZWiL._SX522_.jpg"
          />
        </div>
        <div className="home__row">
          {/* product */}
          <Product
            id={3}
            title="SABRENT 8TB Rocket 4 Plus NVMe 4.0 Gen4 PCIe M.2 Internal SSD Extreme Performance Solid State Drive R/W 7100/6600MB/s (SB-RKT4P-8TB)"
            image="https://m.media-amazon.com/images/I/71xSK5YGCVL._SX679_.jpg"
          />
          {/* product */}
          <Product
            id={4}
            title="Apple SSD Kit for Mac Pro (8TB)"
            image="https://m.media-amazon.com/images/I/41LUEiOsLxL._SX679_.jpg"
          />
          {/* product */}
          <Product
            id={5}
            title={`Samsung 870 QVO 8TB SATA 6.35 cm (2.5") Internal Solid State Drive (SSD) (MZ-77Q8T0BW)`}
            image="https://m.media-amazon.com/images/I/91zj8N93usL._SX522_.jpg"
          />
        </div>
        <div className="home__row">{/* product */}</div>
        <Product
          id={6}
          title={`ASUS ROG Swift PG32UQ 32"(81.28 cm) 4K HDR 144Hz DSC HDMI 2.1 Gaming Monitor, UHD (3840 x 2160) Pixels, IPS, 1ms, G-SYNC Compatible, Extreme Low Motion Blur Sync, DisplayPort, DisplayHDR 600, Black`}
          image="https://m.media-amazon.com/images/I/71aqzvw58gL._SX679_.jpg"
        />
      </div>
    </div>
  );
}
