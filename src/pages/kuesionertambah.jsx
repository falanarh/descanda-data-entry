import { useEffect, useState } from "react";
import Breadcrumbs from "../components/BreadCrumb";
import KuesionerSection from "../components/KuesionerSection";
import { useParams } from "react-router-dom";
import { getOneListing } from "../services/listingService";
import Loader from "../components/Loader";

const KuesionerTambahPage = () => {
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
        Halaman Tambah Kuesioner
      </h1>
      <Breadcrumbs />
      <div className="mx-auto mb-auto w-[85%] flex flex-col items-center">
        <KuesionerSection initialData={data} />
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default KuesionerTambahPage;
