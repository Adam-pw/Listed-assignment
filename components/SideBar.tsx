import React from "react";
import Image from "next/image";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="text-4xl font-bold font-Montserrat">Board.</div>
        <div className="flex gap-4 text-lg mt-6 font-bold cursor-pointer">
          <Image
            src="/dashboard.svg"
            alt="google-icon"
            height={18}
            width={18}
          ></Image>
          Dashboard
        </div>
        <div className="flex gap-4 text-lg cursor-pointer">
          <Image
            src="/transaction.svg"
            alt="google-icon"
            height={18}
            width={18}
          ></Image>
          Transactions
        </div>
        <div className="flex gap-4 text-lg cursor-pointer">
          <Image
            src="/schedule.svg"
            alt="google-icon"
            height={18}
            width={18}
          ></Image>
          Schedules
        </div>
        <div className="flex gap-4 text-lg cursor-pointer">
          <Image
            src="/user.svg"
            alt="google-icon"
            height={18}
            width={18}
          ></Image>
          Users
        </div>
        <div className="flex gap-4 text-lg cursor-pointer">
          <Image
            src="/settings.svg"
            alt="google-icon"
            height={18}
            width={18}
          ></Image>
          Settings
        </div>
      </div>
    </>
  );
};

export default SideBar;
