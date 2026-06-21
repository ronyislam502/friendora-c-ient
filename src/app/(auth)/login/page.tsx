"use client";

import SZForm from "@/components/form/SZFrom";
import SZInput from "@/components/form/SZInput";
import Link from "next/link";
import Image from "next/image";
import { FieldValues, SubmitHandler } from "react-hook-form";

const LoginPage = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f13] bg-[radial-gradient(circle_at_15%_50%,rgba(116,52,219,0.15),transparent_25%),radial-gradient(circle_at_85%_30%,rgba(38,143,255,0.15),transparent_25%)] font-sans text-white p-8">
            <div className="w-full max-w-[400px] bg-[#19191e]/60 backdrop-blur-2xl border border-accent/30 rounded-3xl p-10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">

                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="https://i.postimg.cc/kgKVLD8g/friendora.png"
                            alt="Friendora Logo"
                            width={160}
                            height={160}
                            className="object-cover"
                        />
                    </div>
                </div>

                <SZForm onSubmit={onSubmit}>

                    <div className="mb-5">
                        <SZInput
                            label="Email"
                            name="email"
                            placeholder="Email address"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[0.95rem] outline-none transition-all duration-200 placeholder:text-zinc-500 focus:border-[#7434db]/50 focus:bg-white/5 focus:ring-4 focus:ring-[#7434db]/10"
                        />
                    </div>

                    <div className="mb-5">
                        <SZInput
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[0.95rem] outline-none transition-all duration-200 placeholder:text-zinc-500 focus:border-[#7434db]/50 focus:bg-white/5 focus:ring-4 focus:ring-[#7434db]/10"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-br from-violet-600 to-blue-600 text-white rounded-xl p-3.5 text-[1.05rem] font-bold transition-all duration-200 mt-2 mb-6 shadow-[0_4px_14px_rgba(124,58,237,0.3)] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(124,58,237,0.4)] hover:from-violet-500 hover:to-blue-500 active:translate-y-[1px]"
                    >
                        Log in
                    </button>

                    <Link href="#" className="block text-center text-violet-500 hover:text-violet-400 hover:underline transition-colors text-[0.9rem] font-medium mb-8">
                        Forgotten password?
                    </Link>

                    <div className="h-[1px] bg-white/10 mb-8"></div>

                    <Link href="/signup" className="block w-full text-center bg-transparent text-zinc-200 border border-white/20 rounded-xl p-4 text-base font-semibold transition-all duration-200 hover:bg-white/5 hover:border-white/30">
                        Create new account
                    </Link>

                </SZForm>
            </div>
        </div>
    );
};

export default LoginPage;
