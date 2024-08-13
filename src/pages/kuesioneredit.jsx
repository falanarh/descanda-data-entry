import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/BreadCrumb";
import KuesionerEditSection from "../components/KuesionerEditSection";
import { useEffect, useState } from "react";
import { getOneKuesioner } from "../services/kuesionerService";
import Loader from "../components/Loader";

const KuesionerEditPage = () => {
  const initialData = {
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
    kegiatan_utama_usaha:
      "Berjualan sembako, makanan ringan, minuman, pulsa, dan listrik.",
    bentuk_badan_usaha: "tidak-berbadan-hukum",
    lokasi_tempat_usaha: "bangunan-khusus-usaha",
    skala_usaha: "usaha-mikro",
  };

  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getOneKuesioner(id);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-[10%] border-l-[5px] border-r-[5px] border-porange-30 bg-base rounded-[30px] flex flex-col justify-start">
      <h1 className="mx-auto mt-6 w-[85%] text-2xl font-bold text-porange">
        Halaman Edit Kuesioner
      </h1>
      <Breadcrumbs />
      <div className="mx-auto mb-auto w-[85%] flex flex-col items-center">
        <KuesionerEditSection data={data} id={id} />;
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default KuesionerEditPage;
