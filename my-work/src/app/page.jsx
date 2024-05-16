import Image from "next/image";
import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.body}>
        <div className={style.info}>
          <div className={style.booking + " " + style.manageInfo}>
            <Image src="/image/icons/ticket.png" width={30} height={30} />
            <p>Manage My Booking</p>
          </div>
          <div className={style.booking + " " + style.busInfo}>
            <Image src="/image/icons/clock.jpg" width={35} height={35} />
            <p>Bus Tracker</p>
          </div>
          <div className={style.booking + " " + style.helpInfo}>
            <Image src="/image/icons/help.png" width={25} height={25} />
            <p>Help</p>
          </div>
        </div>
        <div className={style.divid}></div>
        <div className={style.learnInfo}>
          <div className={style.learnMore}>
            <Image
              src="/image/icons/health.png"
              width={40}
              height={40}
              className={style.icon}
            />
            <h3 className={style.learntext}>Health and Safety</h3>
            <p>Keep yourself and others safe while </p>
            <p className={style.learntext}> traveling with us.</p>
            <div className={style.subLearn}>
              <p>Learn More</p>
              <Image
                src="/image/icons/right-arrow.png"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={style.confort}>
            <Image
              src="/image/icons/seat.png"
              width={30}
              height={30}
              className={style.icon}
            />
            <h3 className={style.learntext}>Comfort on board </h3>
            <p>
              Our buses are equipped with large and <br /> comfortable seats, a
              toilet, Wi-Fi and
            </p>
            <p className={style.learntext}>power outlets.</p>
            <div className={style.subLearn}>
              <p>Our onboard service</p>
              <Image
                src="/image/icons/right-arrow.png"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={style.satisfied}>
            <Image
              src="/image/icons/star.png"
              width={30}
              height={30}
              className={style.icon}
            />
            <h3 className={style.learntext}>Satisfied Customers</h3>
            <p>
              We've transported 100+ million happy <br /> customers worldwide.
              US customers <br />{" "}
            </p>
            <p className={style.learntext}>give us an amazing 4.5 stars.</p>
            <div className={style.subLearn}>
              <p>Read Customer Reviews</p>
              <Image
                src="/image/icons/right-arrow.png"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={style.greenChoice}>
            <Image
              src="/image/icons/quill.png"
              width={30}
              height={30}
              className={style.icon}
            />
            <h3 className={style.learntext}>The Green Choice </h3>
            <p>
              FlixBus is one of the most eco-friendly <br /> ways to travel.
              Learn more about our <br /> sustainability initiatives and carbon{" "}
              <br />
            </p>
            <p className={style.learntext}>offset programs.</p>
            <div className={style.subLearn}>
              <p>offset emissions for your trips</p>
              <Image
                src="/image/icons/right-arrow.png"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className={style.divid}></div>
        <div className={style.location}>
          <div className={style.map}>
            <Image
              src="/image/map.jpg"
              width={420}
              height={200}
              objectFit="cover"
            />
          </div>
          <div className="maptext">
            <h2>Discover the easy way to travel</h2>
            <p>
              Choose now from almost 2,300 destinations across the US and
              benefit from our extended network with Greyhound.
            </p>
            <div className={style.sunMap}>
              <p>Explore the map</p>
              <Image
                src="/image/icons/right-arrow.png"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className={style.divid}></div>
        <div className={style.speach}>
          <div className={style.speachtext}>
            <h2 className={style.text}>Get Cheap Bus Tickets with kings Travel</h2>
            <p>
              If you're looking to travel around The cameroon or even
              worldwide, kings travel has got you covered with our extensive bus
              routes! With over 400,000 routes across the globe, you can easily
              find the perfect option for your trip. Plus, our cheap bus tickets
              make it easy and affordable to get wherever you want to go,
              whether it's for work or play.
            </p>
          </div>
          <div className={style.speachtext}>
            <h2 className={style.text}>Buying Your Bus Tickets is Easy with kings travel</h2>
            <p>
            Our website and app make it easy to plan your journey, find the cheapest bus fares, and purchase your bus tickets securely. Whether you're planning or booking a last-minute trip, kings travel makes buying bus tickets a breeze. Plus, with our convenient e-ticket system, you can board your bus without the hassle of paper tickets as your phone will serve as your ticket!
            </p>
          </div>
          <div className={style.speachtext}>
            <h2 className={style.text}>Bus Routes and Timetables to Suit Your schedule</h2>
            <p>
            Traveling with kings travel is hassle-free with our modern and comfortable buses, frequent connections, and reliable schedules. Our extensive network spans almost 2,300 destinations in 40+ countries, including major cities in the United States, Canada, and Mexico. Plus, enjoy free WiFi on most of our buses and track your journey in real-time using our bus tracking system. What's more, our integration with Greyhound provides even more coverage and travel options throughout North America, making FlixBus the ideal choice for domestic and international travel.
            </p>
          </div>
          <div className={style.speachtext}>
            <h2 className={style.text}>Get Cheap Bus Tickets with kings Travel</h2>
            <p>
              If you're looking to travel around The cameroon or even
              worldwide, kings travel has got you covered with our extensive bus
              routes! With over 400,000 routes across the globe, you can easily
              find the perfect option for your trip. Plus, our cheap bus tickets
              make it easy and affordable to get wherever you want to go,
              whether it's for work or play.
            </p>
          </div>
          <div className={style.speachtext}>
            <h2 className={style.text}>Travel in Comfort and Style with kings travel</h2>
            <p>
            FlixBus not only prioritizes comfort and convenience for your journey, but also ensures that you can travel with all your necessary luggage. Each passenger is allowed to bring one carry-on and one stowed luggage with them on the bus. In addition to the luggage allowances, our buses offer amenities like on-board WiFi, extra legroom, power outlets, and toilets, making your trip as smooth and enjoyable as possible. With our user-friendly app and simple booking platform, planning your bus travel has never been easier. Book your bus ticket with FlixBus today and travel in comfort and style with all your luggage in tow.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
