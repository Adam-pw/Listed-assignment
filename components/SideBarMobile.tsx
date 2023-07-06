import React from "react";
import Image from "next/image";

const SideBarMobile = () => {
  return (
    <>
      <div className="absolute translate-y-10 bg-black text-white p-4 rounded-2xl">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 text-lg mt-6 font-bold">
            <Image
              src="/dashboard.svg"
              alt="google-icon"
              height={18}
              width={18}
            ></Image>
            Dashboard
          </div>
          <div className="flex gap-4 text-lg">
            <Image
              src="/transaction.svg"
              alt="google-icon"
              height={18}
              width={18}
            ></Image>
            Transactions
          </div>
          <div className="flex gap-4 text-lg">
            <Image
              src="/schedule.svg"
              alt="google-icon"
              height={18}
              width={18}
            ></Image>
            Schedules
          </div>
          <div className="flex gap-4 text-lg">
            <Image
              src="/user.svg"
              alt="google-icon"
              height={18}
              width={18}
            ></Image>
            Users
          </div>
          <div className="flex gap-4 text-lg">
            <Image
              src="/settings.svg"
              alt="google-icon"
              height={18}
              width={18}
            ></Image>
            Settings
          </div>
          <div className="text-sm flex flex-col gap-4 mb-4">
            <div className="">Help</div>
            <div className="">Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarMobile;
