import Image from "next/image"

export default function AppFooter() {
    return (
        <footer className="app-footer">
            <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <Image src='/images/logo-white.svg' alt="" width={200} height={100}></Image>
                        <div>
                            <p className="font-bold">14th & 15th September, 2024</p>
                            <p className="font-bold">Amadeo Event Centre, Enugu.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-5">
                        <div className="flex gap-3">
                            <Image src='/images/instagram.svg' alt="" width={40} height={40}></Image>
                            <Image src='/images/facebook.svg' alt="" width={40} height={40}></Image>
                            <Image src='/images/x.svg' alt="" width={40} height={40}></Image>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src='/images/phone.svg' alt="" width={24} height={24}></Image>
                            <p className="text-sm">3438881818</p>
                            <p className="text-sm">2771119244</p>
                        </div>
                        <div className="flex items-center gap-3">
                        <Image src='/images/mail.svg' alt="" width={24} height={24}></Image>
                            <p className="text-sm">contact@newyammusicfestival.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <hr className="w-full bg-white h-[2px]"></hr>
                    <div className="flex justify-between items-center">
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