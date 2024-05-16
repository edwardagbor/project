import React from "react";
import style from "./page.module.css";
import Image from "next/image";

const Checkout = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.head}>
          <Image src="/image/neavy-king.jpg" width={160} height={110} />
        </div>
        <div className={style.container}>
          <div className={style.contain}>
            <div className={style.login}>
              <div className={style.step1}>
                <p className={style.num}>1</p>
                <p className={style.step1Text}>Passengers</p>
              </div>
              <div className={style.form}>
                <label htmlFor="" className={style.first}>
                  <p className={style.firsttext}>First name</p>
                  <input
                    type="text"
                    name="Name"
                    className={style.input}
                    required
                  />
                </label>
                <label htmlFor="" className={style.last}>
                  <p className={style.firsttext}>Last name</p>
                  <input
                    type="text"
                    name="Name"
                    className={style.input}
                    required
                  />
                </label>
              </div>
            </div>

            <div className={style.login}>
              <div className={style.step1}>
                <p className={style.num}>2</p>
                <p className={style.step1Text}>Seat Revervation</p>
              </div>
              <div className={style.seat}>
                <Image src="/image/icons/seat.jpg" width={50} height={50} />
                <div className={style.selectSeat}>
                  <h3>Select Your Seat</h3>
                  <p>For 1500F</p>
                </div>
              </div>
            </div>
            <div className={style.login}>
              <div className={style.step1}>
                <p className={style.num}>3</p>
                <p className={style.step1Text}>Extra</p>
              </div>
              <div className={style.extra}>
                <div className={style.bagage}>
                  <div className={style.bagageImg}>
                    <Image
                      src="/image/icons/luggage.jpg"
                      width={70}
                      height={60}
                    />
                  </div>
                  <div className={style.bagageText}>
                    <h3>include Per Person</h3>
                    <p className={style.text}>
                      1 Carry-on bag | 25 lb · 16×12×7 in
                    </p>
                    <p className={style.text}>
                      1 Stored bag | 50 lb · 31×20×12 in
                    </p>
                  </div>
                </div>
                <div className={style.bulky}>
                  <div className={style.mix}>
                    <div className="bulkyLogo">
                      <Image
                        src="/image/icons/bulky-baggage.jpg"
                        width={120}
                        height={60}
                      />
                    </div>
                    <div className={style.bulkyText}>
                      <h3 className={style.header}>excess baggage</h3>
                      <p>50 lb · 31×20×12 in</p>
                    </div>
                  </div>
                  <div className={style.cal}>
                    <Image
                      src="/image/icons/remove.jpg"
                      width={30}
                      height={30}
                    />
                    <p className={style.number}>1</p>
                    <Image src="/image/icons/add.jpg" width={30} height={30} />
                  </div>
                </div>
                <div className={style.bulky}>
                  <div className={style.mix}>
                    <div className={style.bulkyLogo}>
                      <Image
                        src="/image/icons/excess-baggage.jpg"
                        width={80}
                        height={60}
                      />
                    </div>
                    <div className={style.bulkyText}>
                      <h3 className={style.header}>excess baggage</h3>
                      <p>50 lb · 31×20×12 in</p>
                    </div>
                  </div>
                  <div className={style.cal}>
                    <Image
                      src="/image/icons/remove.jpg"
                      width={30}
                      height={30}
                    />
                    <p className={style.number}>1</p>
                    <Image src="/image/icons/add.jpg" width={30} height={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
