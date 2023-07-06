import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LineChart from "../../components/LineChart";
import Piechart from "../../components/Piechart";
import SideBarMobile from "../../components/SideBarMobile";
import SideBar from "../../components/SideBar";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
    console.log(session);
  }, [session, router]);

  const [bar, setBar] = useState(false);

  return (
    <>
      <div className="flex h-[100vh] bg-[#F5F5F5]">
        <SideBar />
        <div className="flex-1 p-8 overflow-y-scroll">
          <div className="flex justify-between md:flex-row flex-col">
            <div className="font-bold font-Montserrat text-2xl md:mb-0 mb-2 flex gap-2 items-center">
              <div className="md:hidden block" onClick={() => setBar(!bar)}>
                <RxHamburgerMenu />
              </div>
              Dashboard
            </div>
            {bar && (
              <>
                <SideBarMobile />
              </>
            )}
            <div className="flex itmes-center gap-4">
              <input
                placeholder="Search..."
                className="bg-white px-4 py-2 focus:outline-none rounded-lg"
              ></input>
              <Image
                src="/search.svg"
                alt="Search"
                height={12}
                width={12}
                className="-translate-x-10"
              ></Image>
              <Image
                src="/bell.svg"
                alt="google-icon"
                height={20}
                width={18}
              ></Image>
              {session && (
                <>
                  <div className="m-auto">
                    <Image
                      src={`${session?.user?.image}`}
                      className="rounded-full"
                      alt=""
                      height={30}
                      width={30}
                    ></Image>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-between mt-6 gap-4 flex-wrap">
            <div className="flex w-[18rem] flex-col gap-2 bg-[#DDEFE0] p-4 rounded-2xl">
              <Image
                src="/revenue.svg"
                alt="google-icon"
                height={39.6}
                width={36}
                className="self-end text-lg"
              ></Image>
              <div className="text-sm">Total Revenues</div>
              <div className="text-2xl font-bold font-OpenSans">$2,129,430</div>
            </div>
            <div className="flex w-[18rem] flex-col gap-2 bg-[#F4ECDD] p-4 rounded-2xl">
              <Image
                src="/transcation-black.svg"
                alt="google-icon"
                height={39.6}
                width={31.185}
                className="self-end text-lg"
              ></Image>
              <div className="text-sm">Total Transactions</div>
              <div className="text-2xl font-bold font-OpenSans">1,520</div>
            </div>
            <div className="flex w-[18rem] flex-col gap-2 bg-[#EFDADA] p-4 rounded-2xl">
              <Image
                src="/like.svg"
                alt="google-icon"
                height={36}
                width={34.95}
                className="self-end text-lg"
              ></Image>
              <div className="text-sm">Total Likes</div>
              <div className="text-2xl font-bold font-OpenSans">9,721</div>
            </div>
            <div className="flex w-[18rem] flex-col gap-2 bg-[#DEE0EF] p-4 rounded-2xl">
              <Image
                src="/users.svg"
                alt="google-icon"
                height={39.6}
                width={36}
                className="self-end text-lg"
              ></Image>
              <div className="text-sm">Total Users</div>
              <div className="text-2xl font-bold font-OpenSans">892</div>
            </div>
          </div>
          <div className="bg-white my-8 p-6 rounded-2xl">
            <div className="text-lg font-bold font-Montserrat">Activities</div>
            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex gap-2 text-sm text-[#858585] items-center font-Montserrat">
                May - June 2021
                <Image
                  src="/down-arrow.svg"
                  alt=""
                  width={8}
                  height={5}
                ></Image>
              </div>
              <div className="flex gap-6">
                <div className="flex gap-2 items-center">
                  <div className="h-3 w-3 bg-[#E9A0A0] rounded-full"></div>
                  <div className="">Guest</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="h-3 w-3 bg-[#9BDD7C] rounded-full"></div>
                  <div className="">User</div>
                </div>
              </div>
            </div>
            <div className="h-56 w-full">
              <LineChart />
            </div>
          </div>
          <div className="mt-8 flex xl:flex-row flex-col gap-8">
            <div className="bg-white p-8 rounded-2xl xl:w-[50%] w-full">
              <div className="flex justify-between">
                <div className="text-lg font-bold font-Montserrat">
                  Total products
                </div>
                <div className="flex gap-2 text-sm text-[#858585] items-center font-Montserrat">
                  May - June 2021
                  <Image
                    src="/down-arrow.svg"
                    alt=""
                    width={8}
                    height={5}
                  ></Image>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-24 mt-4">
                <Piechart />
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl xl:w-[50%] w-full">
              <div className="flex justify-between">
                <div className="text-lg font-bold font-Montserrat">
                  {"Today’s schedule"}
                </div>
                <div className="flex gap-2 text-sm text-[#858585] items-center font-Montserrat">
                  See All
                  <Image
                    src="/right-arrow.svg"
                    alt=""
                    width={5}
                    height={3}
                  ></Image>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 justify-between">
                <div className="flex gap-4">
                  <div className="bg-[#9BDD7C] w-[5px]"></div>
                  <div className="">
                    <div className="text-[#666666] font-bold">
                      Meeting with suppliers from Kuta Bali
                    </div>
                    <div className="text-[#999999]">14.00-15.00</div>
                    <div className="text-[#999999]">
                      at Sunset Road, Kuta, Bali{" "}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#6972C3] w-[5px]"></div>
                  <div className="">
                    <div className="text-[#666666] font-bold">
                      Check operation at Giga Factory 1
                    </div>
                    <div className="text-[#999999]">18.00-20.00</div>
                    <div className="text-[#999999]">at Central Jakarta </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
