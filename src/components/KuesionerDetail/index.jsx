import { getUserFullNameByEmail } from "../../services/utils";
import {
  bentukBadanUsaha,
  daftarKategori,
  jenisKelamin,
  lokasiTempatUsaha,
  pendidikanTerakhir,
  skalaUsaha,
  wilayahRt,
} from "../KuesionerSection/data";

/* eslint-disable react/prop-types */
const KuesionerDetail = ({ data =  {
  rt_rw_dusun: "3515090013001001",
  nama_kepala_keluarga: "Falana Rofako Hakam",
  no_urut_bangunan: "001",
  alamat: "Jalan Semangka I Griya Permata Gedangan D4 No. 23",
  nama_usaha: "Warung Kopi Kekinian",
  latitude: "-6.200000",
  longitude: "106.816666",
  nama_pemilik_penanggungjawab: "Falana Rofako Hakam",
  jenis_kelamin: "laki-laki",
  tanggal_lahir: "29-12-2001",
  nik: "3515090013001001",
  no_hp: "+6281234567890",
  pendidikan_terakhir: "sma/sederajat",
  kategori_usaha: "kbli_i",
  kegiatan_utama_usaha: "Berjualan sembako, makanan ringan, minuman, pulsa, dan listrik.",
  bentuk_badan_usaha: "tidak-berbadan-hukum",
  lokasi_tempat_usaha: "bangunan-khusus-usaha",
  skala_usaha: "usaha-mikro",
}, users}) => {
  const getLabelByValue = (type, value) => {
    const dataMap = {
      wilayahRt,
      jenisKelamin,
      pendidikanTerakhir,
      daftarKategori,
      bentukBadanUsaha,
      lokasiTempatUsaha,
      skalaUsaha,
    };

    const dataArray = dataMap[type];
    if (!dataArray) {
      throw new Error(`Unknown type: ${type}`);
    }

    const found = dataArray.find((item) => item.value === value);
    return found ? found.label : "Label not found";
  };

  return (
    <div className="flex flex-col w-[60%] font-asap mb-10">
      <h1 className="px-4 py-2 mx-auto mt-6 mb-4 text-base font-semibold w-fit bg-porange rounded-xl">
        BLOK I. KETERANGAN TEMPAT USAHA
      </h1>
      <div className="flex items-center justify-between gap-3">
        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            RT, RW, Dusun
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
            Nama Kepala Keluarga
          </label>
          <input
            readOnly
            type="text"
            value={data.nama_kepala_keluarga}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            No Urut Bangungan
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
            Nama Usaha
          </label>
          <input
            readOnly
            type="text"
            value={data.nama_usaha}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>
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
      <div className="flex items-center justify-between gap-3">
        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Latitude
          </label>
          <input
            readOnly
            type="text"
            value={data.latitude}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>
        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Longitude
          </label>
          <input
            readOnly
            type="text"
            value={data.longitude}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>
      </div>
      <h1 className="px-4 py-2 mx-auto mt-6 mb-4 text-base font-semibold w-fit bg-porange rounded-xl">
        BLOK II. IDENTITAS PEMILIK/PENANGGUNG JAWAB USAHA
      </h1>
      <div className="flex items-center justify-between gap-3">
        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Nama Pemilik/Penanggungjawab
          </label>
          <input
            readOnly
            type="text"
            value={data.nama_pemilik_penanggungjawab}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>

        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Jenis Kelamin
          </label>
          <input
            readOnly
            type="text"
            value={getLabelByValue("jenisKelamin", data.jenis_kelamin)}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Tanggal Lahir
          </label>
          <input
            readOnly
            type="text"
            value={data.tanggal_lahir}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>

        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            NIK
          </label>
          <input
            readOnly
            type="text"
            value={data.nik}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            No. HP
          </label>
          <input
            readOnly
            type="text"
            value={data.no_hp}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>

        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Pendidikan Terakhir
          </label>
          <input
            readOnly
            type="text"
            value={getLabelByValue("pendidikanTerakhir", data.pendidikan_terakhir)}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>
      </div>
      <h1 className="px-4 py-2 mx-auto mt-6 mb-4 text-base font-semibold w-fit bg-porange rounded-xl">
        BLOK III. KARAKTERISTIK USAHA
      </h1>
      <div className="static flex flex-col w-full">
        <label className="text-porange text-[14px] font-semibold relative top-3 ml-[7px] px-[3px] bg-base w-fit">
          Kegiatan Utama Usaha
        </label>
        <textarea
          readOnly
          value={data.kegiatan_utama_usaha}
          className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out resize-none"
          rows={3}
        />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Kategori Usaha
          </label>
          <input
            readOnly
            type="text"
            value={getLabelByValue("daftarKategori", data.kategori_usaha)}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>

        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Bentuk Badan Usaha
          </label>
          <input
            readOnly
            type="text"
            value={getLabelByValue("bentukBadanUsaha", data.bentuk_badan_usaha)}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Lokasi Tempat Usaha
          </label>
          <input
            readOnly
            type="text"
            value={getLabelByValue("lokasiTempatUsaha", data.lokasi_tempat_usaha)}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>

        <div className="static flex flex-col w-full s">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Skala Usaha
          </label>
          <input
            readOnly
            type="text"
            value={getLabelByValue("skalaUsaha", data.skala_usaha)}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
        </div>
      </div>
      <h1 className="px-4 py-2 mx-auto mt-6 mb-4 text-base font-semibold w-fit bg-porange rounded-xl">BLOK IV. CATATAN</h1>
      <div className="static flex flex-col w-full">
        <label className="text-porange text-[14px] font-semibold relative top-3 ml-[7px] px-[3px] bg-base w-fit">
          Catatan
        </label>
        <textarea
          readOnly
          value="Berjualan sembako, makanan ringan, pulsa, dan listrik"
          className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out resize-none"
          rows={3}
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

export default KuesionerDetail;
