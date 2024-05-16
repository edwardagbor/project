import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.discription}>
        <div className={style.busTravel}>
          <h3 className={style.bustext}>Bus Travel</h3>
          <nav className={style.busInfo}>
            <ul>
              <li>
                <a href="">All Bus Destination</a>
              </li>
              <li>
                <a href="">Rout Map</a>
              </li>
              <li>
                <a href="">Bus Travel in Cameroon</a>
              </li>
              <li>
                <a href="">Overnight buses</a>
              </li>
              <li>
                <a href="">Business Travel</a>
              </li>
              <li>
                <a href="">Get the APP</a>
              </li>
              <li>
                <a href="">Afican Services</a>
              </li>
              <li>
                <a href="">Discounts and Promotions</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.busTravel + " " + style.bus}>
          <h3 className={style.bustext}>Discover</h3>
          <nav className={style.busInfo}>
            <ul>
              <li>
                <a href="">Events and Festivals</a>
              </li>
              <li>
                <a href="">Vacation Idear</a>
              </li>
              <li>
                <a href="">Canada</a>
              </li>
              <li>
                <a href="">Germeny</a>
              </li>
              <li>
                <a href="">Portugal</a>
              </li>
              <li>
                <a href="">Poland</a>
              </li>
              <li>
                <a href="">Denmake</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.busTravel + " " + style.bus}>
          <h3 className={style.bustext}>kings Travel</h3>
          <nav className={style.busInfo}>
            <ul>
              <li>
                <a href="">About Kigs Travel</a>
              </li>
              <li>
                <a href="">Greyhouse</a>
              </li>
              <li>
                <a href="">jobs</a>
              </li>
              <li>
                <a href="">Press Room</a>
              </li>
              <li>
                <a href="">Term and condition for Purch</a>
              </li>
              <li>
                <a href="">Term and condition for Travel</a>
              </li>
              <li>
                <a href="">Substainability</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.busTravel + " " + style.bus}>
          <h3 className={style.bustext}>Customer Service</h3>
          <nav className={style.busInfo}>
            <ul>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Manage My Booking</a>
              </li>
              <li>
                <a href="">How to Book</a>
              </li>
              <li>
                <a href="">Reduce Mobility</a>
              </li>
              <li>
                <a href="">Seat Resevations</a>
              </li>
              <li>
                <a href="">Baggage</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={style.foot}>
        <div className={style.mainStores}>
          <div className={style.stores}>
            <h4 className={style.king}> kings APP</h4>
            <Image src="/image/google.jpg" width={110} height={80}/>
            <Image src="/image/app-store.jpg" width={110} height={80}/>
          </div>
          <div className={style.links}>
            <div className={style.logoLinks}>
              <h4 className={style.king +" " + style.kingText}>kings on:</h4>
              <Image src="/image/icons/facebook.jpg" width={30} height={30} className={style.logoFirst}/>
              <Image src="/image/icons/whatsapp.jpg" width={30} height={30} className={style.logo}/>
              <Image src="/image/icons/tiktok.jpg" width={30} height={30} className={style.logo}/>
              <Image src="/image/icons/twitter.jpg" width={30} height={30} className={style.logo}/>
              <Image src="/image/icons/youtube.jpg" width={30} height={30} className={style.logo}/>
              <Image src="/image/icons/instagram.jpg" width={30} height={30} className={style.logo}/>
            </div>
          </div>
        </div>
        <div className={style.divider}></div>
        <div className={style.media}>
<div className={style.policy}>
  <p className={style.policyLinks}>legal</p>
  <p className={style.policyLinks}>privacy policy</p>
  <p className={style.policyLinks}>photo credits</p>
  <p className={style.policyLinks}>your privacy choices</p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
