import Image from "next/image";
import phone from '../public/images/Phone.svg';
import email from '../public/images/mail.svg';
import instagram from '../public/images/instagram.svg';
import facebook from '../public/images/facebook.svg';
import x from '../public/images/x.svg';
import whiteLogo from '../public/images/logo-white.svg';


export default function AppFooter() {
    return (
        <footer className="app-footer">
            <div className="flex flex-col py-[80px] px-5  sm:px-[50px] h-full gap-20 justify-between">
                <div className="flex flex-col items-center sm:flex-row gap-20 justify-between">
                    <div className="flex flex-col items-center gap-2">
                        <Image priority src={whiteLogo} alt="" width={200} height={100}></Image>
                        <div>
                            <p className="font-bold">14th & 15th September, 2024</p>
                            <p className="font-bold">Amadeo Event Centre, Enugu.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-end gap-5">
                        <div className="flex gap-3">
                            <Image priority src={instagram} alt="" width={40} height={40}></Image>
                            <Image priority src={facebook} alt="" width={40} height={40}></Image>
                            <Image priority src={x} alt="" width={40} height={40}></Image>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image priority src={phone} alt="" width={24} height={24}></Image>
                            <p className="text-sm">3438881818</p>
                            <p className="text-sm">2771119244</p>
                        </div>
                        <div className="flex items-center gap-3">
                        <Image priority src={email} alt="" width={24} height={24}></Image>
                            <p className="text-sm">contact@newyammusicfestival.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <hr className="w-full bg-white h-[2px]"></hr>
                    <div className="flex flex-col sm:flex-row gap-5 justify-between items-center">
                        <div className="flex gap-5">
                            <p className="text-sm">Privacy Policy</p>
                            <p className="text-sm">Terms of Service</p>
                        </div>
                        <p className="text-sm">©2024 New yam Music festival</p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 