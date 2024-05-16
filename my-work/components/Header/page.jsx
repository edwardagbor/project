import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className={style.contain}>
      <div className={style.image}>
        <Image
          src="/image/4307.jpg"
          //   width={1000}
          //   height={700}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={style.destination}>
        <div className={style.radioGroup}>
          <div className={style.radio}>
            <input
              type="radio"
              name="radio"
              required
              className={style.radioSize}
            />
            <p className={style.radioText}>One Way</p>
          </div>
          <div className={style.radio}>
            <input type="radio" name="radio" />
            <p className={style.radioText}>Round Trip</p>
          </div>
        </div>
        <div className={style.uption}>
          <div className={style.trips}>
            <div className={style.tripFrom}>
              <p className={style.tripText}>From</p>
              <div className={style.from}>
                <Image src="/image/icons/location.jpg" width={20} height={20} />
                <input
                  type="search"
                  name="distination"
                  className={style.search}
                />
              </div>
            </div>
            <Image
              src="/image/icons/arrow.png"
              width={40}
              height={40}
              className={style.arrow}
            />
            <div className={style.tripTo}>
              <p className={style.tripText}>To</p>
              <div className={style.to}>
                <Image src="/image/icons/location.jpg" width={20} height={20} />
                <input
                  type="search"
                  name="distination"
                  className={style.search}
                />
              </div>
            </div>
          </div>
          <div className={style.date}>
            <div className={style.diparture}>
              <p>Departure</p>
              <input type="date" name="go" className={style.return} />
            </div>
            <div className={style.arrival}>
              <p>Return</p>
              <input type="date" name="go" className={style.return} />
            </div>
          </div>
          <div className={style.Passengers}>
            <p><span>Passengers</span></p>
            <div className={style.adult}>
             <p> 1 adult</p>
              <Image src="/image/arrow.png" width={20}
              height={20} className={style.img}
              />
            </div>
          </div>
          <div className={style.button}>
            <button className={style.btn}>
              <Link href={""} className={style.btnLink}>Search</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
