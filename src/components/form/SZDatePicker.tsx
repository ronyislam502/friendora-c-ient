import { useFormContext } from "react-hook-form";
import React from "react";

interface IProps {
  name: string;
  label: string;
}

const SZDatePicker = ({ name, label }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control w-full">
      <label className="label mb-1">
        <span className="text-[12px] font-black text-success uppercase tracking-widest italic group-hover:text-blue-400 transition-colors duration-300">
          {label}
        </span>
      </label>
      <input
        type="date"
        {...register(name)}
        className="w-full bg-primary/5 border border-primary/60 rounded-2xl py-4 px-6 text-white font-bold placeholder:text-gray-500 outline-none hover:border-blue-500/40 hover:bg-blue-500/5 focus:border-blue-500/60 focus:bg-blue-500/8 transition-all duration-300 h-[56px] [color-scheme:dark]"
      />
      {errors[name] && (
        <p className="text-error text-[10px] font-bold mt-2 uppercase tracking-wide">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default SZDatePicker;
