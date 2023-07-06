import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);
  return (
    <div className="md:flex-row flex-col flex w-[100vw] h-[100vh] bg-[#F5F5F5]">
      <div className="bg-black text-white md:h-full h-40 flex items-center justify-center md:w-[35%] w-full md:text-7xl text-5xl font-Montserrat font-bold">
        Board.
      </div>
      <div className="flex-1 flex flex-col justify-center items-center md:mx-0 mx-2">
        <div className="w-80 md:w-max">
          <div className="font-bold font-Montserrat text-4xl text-center md:text-left">
            Sign In
          </div>
          <div className="font-lato text-base mt-1 text-center md:text-left">
            Sign in to your account
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <button
              className="text-[#858585] bg-white px-6 py-2 rounded-xl flex gap-2 items-center justify-center"
              onClick={() => {
                signIn();
              }}
            >
              <Image
                src="/google-icon 1.png"
                alt="google-icon"
                height={14}
                width={14}
              ></Image>
              Sign in with Google
            </button>
            <button className="text-[#858585] bg-white px-6 py-2 rounded-xl flex gap-2 items-center justify-center">
              <Image
                src="/apple 1.png"
                alt="apple-icon"
                height={14}
                width={14}
              ></Image>
              Sign in with Apple
            </button>
          </div>
          <form className="bg-white p-8 rounded-xl mt-4 flex flex-col gap-4 font-Lato">
            <div className="flex flex-col">
              <label className="">Email address</label>
              <input
                className="px-4 py-2 bg-[#F5F5F5] focus:outline-gray-400 rounded-lg focus:outline-none mt-1"
                placeholder="****@gmail.com"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="">Password</label>
              <input
                className="px-4 py-2 bg-[#F5F5F5] rounded-lg focus:outline-gray-400 focus:outline-none mt-1"
                placeholder="password"
                type="password"
              ></input>
            </div>
            <div className="text-[#346BD4] hover:underline">
              Forgot password?
            </div>
            <Link href="/dashboard">
              <button
                className="bg-black w-full text-white py-2 rounded-lg font-Montserrat font-bold"
                onClick={() => {
                  signIn();
                }}
              >
                Sign In
              </button>
            </Link>
          </form>
          <div className="text-center text-[#858585] mt-4">
            {"Don’t have an account?"}{" "}
            <span className="text-[#346BD4] hover:underline">
              Register here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
