import Image from "next/image";

export default function AppHeader(){
    return (
        <div className="flex py-[30px] px-5 sm:px-[50px] justify-between items-center">
            <Image loading="lazy" src='/images/Colored-logo.svg' alt="colored-logo" width={100} height={100}></Image>
            <button className="header-btn bg-white rounded-[12px] text-[#262626] py-3 px-5 font-bold h-[45px] text-sm flex items-center justify-center">
                GET TICKETS
            </button>
        </div>
    )
}