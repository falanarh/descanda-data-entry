/* eslint-disable no-unused-vars */

import { getUserFullNameByEmail } from "../../services/utils";
import { wilayahRt } from "../KuesionerSection/data";

/* eslint-disable react/prop-types */
const ListingDetail = ({
  data = {
    rt_rw_dusun: "3515090013001001",
    no_urut_bangunan: "001",
    nama_kk_ak_bangunan: "Falana Rofako Hakam",
    alamat: "Jalan Semangka I Griya Permata Gedangan D4 No. 23",
    is_umkm: true,
  },
  users,
}) => {
  const getLabelByValue = (type, value) => {
    const dataMap = {
      wilayahRt,
    };

    const dataArray = dataMap[type];
    if (!dataArray) {
      throw new Error(`Unknown type: ${type}`);
    }

    const found = dataArray.find((item) => item.value === value);
    return found ? found.label : "Label not found";
  };
  return (
    <div className="flex flex-col w-[60%] py-10 font-asap">
      <div className="static flex flex-col w-full s">
        <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
          Identitas SLS (RT, RW, Dusun)
        </label>
        <input
          readOnly
          type="text"
          value={getLabelByValue("wilayahRt", data.rt_rw_dusun)}
          className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
        />
      </div>
      <div className="static flex flex-col w-full s">
        <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
          No. Urut Bangunan
        </label>
        <input
          readOnly
          type="text"
          value={data.no_urut_bangunan}
          className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
        />
      </div>
      <div className="static flex flex-col w-full s">
        <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
          Nama Kepala/Anggota Keluarga atau Nama Bangunan
        </label>
        <input
          readOnly
          type="text"
          value={data.nama_kk_ak_bangunan}
          className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
        />
      </div>
      <div className="static flex flex-col w-full">
        <label className="text-porange text-[14px] font-semibold relative top-3 ml-[7px] px-[3px] bg-base w-fit">
          Alamat (Jalan/Gang,Nomor Rumah)
        </label>
        <textarea
          readOnly
          value={data.alamat}
          className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out resize-none"
          rows={3}
        />
      </div>
      <div className="static flex flex-col w-full s">
        <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
          Apakah salah satu anggota keluarga memiliki/mengelola UMKM?
        </label>
        <input
          readOnly
          type="text"
          value={data.is_umkm ? "Ya" : "Tidak"}
          className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
        />
      </div>
      <div className="static flex flex-col w-full s">
        <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
          Nama Lengkap PCL
        </label>
        <input
          readOnly
          type="text"
          value={getUserFullNameByEmail(data.email_pcl, users)}
          className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ListingDetail;
