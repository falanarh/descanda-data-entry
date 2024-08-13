import { BsFillSendCheckFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { HiSaveAs } from "react-icons/hi";

const items = [
  {
    id: 1,
    count: 124,
    label: "Listing",
    bgColor: "#180161",
    hoverShadow: "#2196f3",
    icon: <FaClipboardList size={30} />,
  },
  {
    id: 2,
    count: 7,
    label: "Kuesioner Tersimpan",
    bgColor: "#C40C0C",
    hoverShadow: "#FF8C9E",
    icon: <HiSaveAs size={30} />,
  },
  {
    id: 3,
    count: 47,
    label: "Kuesioner Terkirim",
    bgColor: "#365E32",
    hoverShadow: "#91DDCF",
    icon: <BsFillSendCheckFill size={30} />,
  },
];

const ProgressSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold mt-10">
        Ringkasan Pencapaian
      </h1>
      <h2 className="text-lg">
        Berikut ini disajikan ringkasan pencapaian yang Anda kerjakan sampai saat ini.
      </h2>
      <div className="w-full flex justify-center items-center gap-6 my-10">
        {items.map(({ id, count, label, bgColor, hoverShadow, icon }) => (
          <div
            key={id}
            className={`group w-[250px] rounded-lg p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_${hoverShadow}] flex justify-between text-base`}
            style={{ backgroundColor: bgColor }}
          >
            <div>
              <p className="text-2xl font-bold">{count}</p>
              <p className="text-[16px]">{label}</p>
            </div>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSection;
