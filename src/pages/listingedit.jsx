import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumb";
import ListingEditSection from "../components/ListingEditSection";
import { useEffect, useState } from "react";
import { getOneListing } from "../services/listingService";
import Loader from "../components/Loader";

const ListingEditPage = () => {
  const initialData = {
    rt_rw_dusun: "3515090013001001",
    no_urut_bangunan: "001",
    nama_kk_ak_bangunan: "Falana Rofako Hakam",
    alamat: "Jalan Semangka I Griya Permata Gedangan D4 No. 23",
    is_umkm: "ya",
  };
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getOneListing(id);
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
        Halaman Edit Listing
      </h1>
      <Breadcrumbs />
      <div className="mx-auto mb-auto w-[85%] flex flex-col">
        <ListingEditSection data={data} id={id} />
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default ListingEditPage;
