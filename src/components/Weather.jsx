import { Waves } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlassCard from "./GlassCard";
import axios from "axios";

const Weather = () => {
  const [temperature, setTemperature] = useState(23);
  const [city, setCity] = useState("");

  function getTemperature() {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=a9b1bc0374e4bdf35537710d7e0a0e87&query=Lucknow",
      )
      .then((res) => {
        setTemperature(res.data.current.temperature);
        setCity(res.data.location.name);
      });
  }

  useEffect(() => {
    getTemperature();
  }, []);

  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Weather</p>
          <p className="text-sm text-slate-400">Cloudy with a gentle breeze.</p>
        </div>
        <Waves className="h-7 w-7 text-sky-400 transition duration-300 group-hover:rotate-12" />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-4xl font-semibold text-slate-50">
            {" "}
            {temperature} &deg;c{" "}
          </p>
          <p className="mt-1 text-sm text-slate-400"> {city} </p>
        </div>
        <div
          className={
            temperature <= 0
              ? " bg-[#063b4d] text-[#86ffe9] rounded-2xl px-3 py-2 text-sm font-medium"
              : temperature > 0 && temperature <= 10
                ? "rounded-2xl bg-[#1E3A8A] text-[#BFDBFE] px-3 py-2 text-sm font-medium"
                : temperature > 10 && temperature <= 18
                  ? "rounded-2xl bg-[#1E40AF] text-[#DBEAFE] px-3 py-2 text-sm font-medium"
                  : temperature > 18 && temperature <= 25
                    ? "rounded-2xl bg-[#14532D] text-[#BBF7D0] px-3 py-2 text-sm font-medium"
                    : temperature > 25 && temperature <= 30
                      ? "rounded-2xl bg-[#78350F] text-[#FDE68A] px-3 py-2 text-sm font-medium"
                      : temperature > 30 && temperature <= 35
                        ? "rounded-2xl bg-[#7C2D12] text-[#FED7AA] px-3 py-2 text-sm font-medium"
                        : "rounded-2xl bg-[#991B1B] text-[#FECACA] px-3 py-2 text-sm font-medium"
          }>
          {temperature <= 0
            ? "🥶 Freezing"
            : temperature > 0 && temperature <= 10
              ? "🧥 Warm Jacket"
              : temperature > 10 && temperature <= 18
                ? "🧥 Light Jacket"
                : temperature > 18 && temperature <= 25
                  ? "🌤 Pleasant"
                  : temperature > 25 && temperature <= 30
                    ? "☀️ Stay Hydrated"
                    : temperature > 30 && temperature <= 35
                      ? "🔥 Hot"
                      : "🚨 Extreme Heat"}
        </div>
      </div>
    </GlassCard>
  );
};

export default Weather;
