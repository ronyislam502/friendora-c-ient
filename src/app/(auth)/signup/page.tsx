"use client";

import SZForm from "@/components/form/SZFrom";
import SZInput from "@/components/form/SZInput";
import SZSelect from "@/components/form/SZSelect";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSignUpMutation } from "@/redux/features/user/userApi";
import { TError } from "@/types/global";
import SZDatePicker from "@/components/form/SZDatePicker";

const SignupPage = () => {
    const router = useRouter();
    const methods = useForm();
    const [signUp] = useSignUpMutation();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);


    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setSelectedImage(file);
        }
    };

    const onSubmit = async (data: FieldValues) => {
        const formData = new FormData();
        try {
            const userData = {
                name: {
                    firstName: data?.firstName,
                    middleName: data?.middleName,
                    lastName: data?.lastName
                },
                email: data?.email,
                birthDate: data?.birthDate,
                phone: data?.phone,
                gender: data?.gender,
                password: data?.password,
            };

            console.log("payload", userData)

            formData.append("data", JSON.stringify(userData));
            if (selectedImage) {
                formData.append("profilePicture", selectedImage);
            }

            const res = await signUp(formData).unwrap();
            console.log("res", res)
            if (res?.success) {
                toast.success(res?.message, {
                    duration: 1000,
                });
                router.push("/login");
            }
        } catch (error) {
            const err = error as TError;
            console.log(err);
            toast.error(err?.data?.message);
        }
    };


    const genders = [
        { key: "female", label: "Female" },
        { key: "male", label: "Male" },
        { key: "custom", label: "Custom" }
    ];



    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f13] bg-[radial-gradient(circle_at_15%_50%,rgba(116,52,219,0.15),transparent_25%),radial-gradient(circle_at_85%_30%,rgba(38,143,255,0.15),transparent_25%)] font-sans text-white p-2">
            <div className="w-full max-w-[840px] bg-[#19191e]/60 backdrop-blur-2xl border border-accent/30 rounded-3xl p-10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="mb-6 flex justify-between items-center">
                    <Link href="/login" className="p-2 rounded-full hover:bg-white/5 transition-colors">
                        <ChevronLeft className="w-6 h-6 text-[#e4e4e7]" strokeWidth={2} />
                    </Link>
                </div>

                <div className="text-center mb-">
                    <div className="flex justify-center">
                        <Image
                            src="https://i.postimg.cc/kgKVLD8g/friendora.png"
                            alt="Friendora Logo"
                            width={160}
                            height={160}
                            className="object-cover"
                        />
                    </div>
                    <p className="text-[0.95rem] text-zinc-400 leading-relaxed">
                        Create an account to connect with people who share your interests.
                    </p>
                </div>

                <SZForm onSubmit={onSubmit}>
                    <div className="mb-5">
                        <div className="flex gap-3">
                            <SZInput
                                label="First Name"
                                name="firstName"
                                placeholder="first name"
                            />
                            <SZInput
                                label="Middle Name"
                                name="middleName"
                                placeholder="middle name"
                            />
                            <SZInput
                                label="Last Name"
                                name="lastName"
                                placeholder="last name"
                            />
                        </div>
                    </div>

                    <div className="mb-5">
                        <div className="flex gap-3">
                            <SZDatePicker
                                label="Birth Date"
                                name="birthDate"
                            />
                            <SZInput
                                label="Phone"
                                name="phone"
                                placeholder="phone number"

                            />
                        </div>
                    </div>

                    <div className="mb-5">
                        <div className="flex gap-3">
                            <SZSelect
                                label="Gender"
                                name="gender"
                                options={genders}
                            />
                            <SZInput
                                label="Email"
                                name="email"
                                placeholder="email address"

                            />
                            {/* <p className="text-[0.8rem] text-zinc-500 mt-2 leading-relaxed">
                                    You may receive notifications from us. <Link href="#" className="text-violet-500 hover:text-violet-400 hover:underline transition-colors">Learn why</Link>
                                </p> */}

                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex gap-3">
                            <SZInput
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="password"

                            />
                            <div className="form-control w-full">
                                <label className="label mb-1">
                                    <span className="text-[12px] font-black text-success uppercase tracking-widest italic group-hover:text-blue-400 transition-colors duration-300">
                                        Profile Picture
                                    </span>
                                </label>
                                <input type="file"
                                    accept="image/*"
                                    onChange={handleImage}
                                    className="file-input border border-primary/60 bg-primary/5 file-input-primary w-full rounded-2xl h-[56px] hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <p className="text-[0.8rem] text-zinc-500 leading-relaxed my-6">
                        By continuing, you agree to our <Link href="#" className="text-violet-500 hover:text-violet-400 hover:underline transition-colors">Terms of Service</Link> and <Link href="#" className="text-violet-500 hover:text-violet-400 hover:underline transition-colors">Privacy Policy</Link>.
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-br from-violet-600 to-blue-600 text-white rounded-xl p-3.5 text-base font-semibold transition-all duration-200 mb-4 shadow-[0_4px_14px_rgba(124,58,237,0.3)] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(124,58,237,0.4)] hover:from-violet-500 hover:to-blue-500 active:translate-y-[1px]"
                    >
                        Create Account
                    </button>
                    <Link href="/login" className="block w-full text-center bg-transparent text-zinc-200 border border-white/10 rounded-xl p-3.5 text-[0.95rem] font-medium transition-all duration-200 hover:bg-white/5 hover:border-white/20">
                        Already have an account? Sign In
                    </Link>
                </SZForm>
            </div>
        </div>
    );
};

export default SignupPage;
