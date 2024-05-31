'use client';
import AppHeader from "@/components/AppHeader";
import Image from "next/image";
import { useEffect, useState } from "react";
import raisinghand from '../public/images/girl-raising-hands.png';
import drumsTrumpet from '../public/images/drums-and-trumpet.png';
import largeWhiteLogo from '../public/images/logo.svg';
import bgExperience from '../public/images/bg-experience.png';
import purpleVector from '../public/images/purple-vector.png';
import yellowVector from '../public/images/yellow-vector.png';
import imgVectors from '../public/images/img-vectors.png';
import img1 from '../public/images/img1.svg';
import img2 from '../public/images/img2.svg';
import img3 from '../public/images/img3.svg';
import purpleShape from '../public/images/Purple-shape.svg';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [isNameActive, setIsNameActive] = useState(false);
  const [fullName, setFullName] = useState('');
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [email, setEmail] = useState('');
  const [isPhoneActive, setPhoneActive] = useState(false);
  const [phone, setPhone] = useState('');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2024-09-27').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function handleTextChange(text: string, field: 'name' | 'email' | 'phone') {
    if (field === 'name') {
      setFullName(text);
      setIsNameActive(text !== '');
    } else if (field === 'email') {
      setEmail(text);
      setIsEmailActive(text !== '');
    } else {
      setPhone(text);
      setPhoneActive(text !== '');
    }
  }

  return (
    <>
      <section className="text-white text-center banner-div flex flex-col gap-[150px] w-full relative">
        <div className="z-10">
          <AppHeader />
        </div>
        <div className="flex flex-col p-5 gap-5 items-center z-10">
          <Image priority src={largeWhiteLogo} alt="white-logo" width={600} height={100} />
          <div>
            <p className="text-xl font-bold">14th & 15th September, 2024</p>
            <p className="text-xl font-bold">Amadeo Event Centre, Enugu.</p>
          </div>
        </div>
      </section>
      <section className="relative text-black bg-[#0FCEEE] h-[700px]  text-center text-4xl font-bold">
        <Image priority className="absolute left-0 top-0 w-full h-full z-10" src={drumsTrumpet} alt="" width={10000} height={100}></Image>
        <div className="flex z-20 relative h-full flex-col justify-center items-center gap-[70px]">
          <p>Experience Authenticity</p>
          <p>Embrace Culture</p>
          <p>Feel the Rhythm</p>
          <p>Own Your Heritage</p>
        </div>
      </section>
      <section className="h-[300px] md:h-[600px] relative">
        <Image priority className="absolute w-[200px] md:w-[380px] right-0 bottom-[-50px] z-10" src={raisinghand} alt="" width={400} height={100}></Image>
      </section>
      <section className="flex font-bold flex-col text-center p-5 md:p-20 lg:p-60 items-center justify-center celeb-div h-[700px] relative">
        <Image priority className="absolute w-full h-full z-10 left-0 top-0" src={bgExperience} alt="" width={1000} height={100}></Image>
        <div className="z-[9999]">
          <p className="text-4xl md:text-5xl lg:text-6xl">The Experience</p>
          <p className="text-xl md:text-2xl lg:text-3xl mt-10">New Yam Music Festival is a celebration of culture, music, and community. Rooted in tradition, our festival showcases the talents of indigenous artists while promoting cultural appreciation and understanding.
            Join us as we come together to honour our heritage, embrace diversity, and unite through the power of music.</p>
        </div>
      </section>
      <section className="purple-div h-[700px] mt-[-300px] lg:mt-[-150px]">
        <div className="relative flex w-full h-full font-bold  items-center justify-center">
          <Image priority className="absolute w-full h-full left-0 top-0 " src={purpleShape} alt="" width={100} height={100}></Image>
          <div className="relative py-20 flex flex-col items-center text-center gap-5 z-30">
            <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">Countdown To Showtime</p>
            <div className="flex gap-5">
              <div className="flex font-extrabold items-start gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl">{timeLeft.days}</p>
                  <p className="text-sm">Days</p>
                </div>
                <p className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl">:</p>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl">{timeLeft.hours}</p>
                  <p className="text-sm">Hours</p>
                </div>
                <p className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl">:</p>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl">{timeLeft.minutes}</p>
                  <p className="text-sm">Minutes</p>
                </div>
                <p className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl">:</p>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl">{timeLeft.seconds}</p>
                  <p className="text-sm">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image priority className="hidden sm:block absolute z-10 right-[150px] top-[120px]" src={purpleVector} alt="" width={60} height={50}></Image>

      </section>
      <section className="text-black font-bold relative w-[90%] sm:w-[70%] m-auto lg:mt-[150px]   py-20 p-10 md:p-[90px] xl:px-[200px]  bg-[#FFD000] rounded-[24px] border-solid border-[#000000] border-[6px]">
        <Image priority className="absolute z-10 w-full min-h-[500px] bottom-5 left-0" src={yellowVector} alt="" width={1000} height={100}></Image>
        <form className="w-full z-20 relative flex flex-col items-center text-center justify-center gap-10">
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-4xl">Don't Miss a Thing!</h2>
            <p className="text-sm w-[80%]">Subscribe To Our Mailing List And Receive Exclusive Updates</p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div id="float-label">
              <input value={fullName}
                onChange={(e) => handleTextChange(e.target.value, 'name')} type="text" />
              <label className={isNameActive ? "Active" : ""} htmlFor="fullname">
                Full Name
              </label>
            </div>
            <div id="float-label">
              <input onChange={(e) => handleTextChange(e.target.value, 'email')} value={email} type="email" />
              <label className={isEmailActive ? "Active" : ""} htmlFor="email">
                Email
              </label>
            </div>
            <div id="float-label">
              <input onChange={(e) => handleTextChange(e.target.value, 'phone')} value={phone} type="text" />
              <label className={isPhoneActive ? "Active" : ""} htmlFor="number">
                Phone Number
              </label>
            </div>
          </div>
          <button className="w-[150px] text-lg self-center bg-[#262626] rounded-[12px] p-3 text-white">Subscribe</button>
        </form>
      </section>
      <section className="relative flex flex-col min-[760px]:flex-row w-[70%] items-center m-auto mt-[150px] justify-between gap-10">
        <Image priority className="absolute left-[-20px] scale-[1.1] top-[-15px]" src={imgVectors} alt="" width={1000} height={100}></Image>
        <div className="min-w-[150px] max-w-[350px] h-auto">
          <Image priority layout="responsive" className="w-full" src={img1} alt="" width={100} height={100}></Image>
        </div>
        <div className="min-w-[150px] max-w-[350px] h-auto">
          <Image priority layout="responsive" className="w-full" src={img2} alt="" width={100} height={100}></Image>
        </div>
        <div className="min-w-[150px] max-w-[350px] h-auto">
          <Image priority layout="responsive" className="w-full" src={img3} alt="" width={100} height={100}></Image>
        </div>
      </section>
    </>
  );
}
