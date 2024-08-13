import { useEffect, useState } from "react";
import Breadcrumbs from "../components/BreadCrumb";
import KuesionerTable from "../components/KuesionerTable";
import { getAllKuesioner } from "../services/kuesionerService";
import Loader from "../components/Loader";
import { getUmkmListings } from "../services/listingService";

const Kuesioner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [umkms, setUmkms] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getAllKuesioner();
      const response2 = await getUmkmListings();
      console.log(response);
      setUmkms(response2);
      setData(response.data);
      setUmkms(response2.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addNoProperty = (array) => {
    return array.map((item, index) => ({
      ...item,
      no: index + 1 // Menambahkan properti "no" dengan nilai urut mulai dari 1
    }));
  };
  return (
    <div className="mx-[10%] border-l-[5px] border-r-[5px] border-porange-30 min-h-screen bg-base rounded-[30px] mb-10 flex flex-col justify-start">
      <h1 className="mx-auto mt-6 w-[85%] text-2xl font-bold text-porange">
        Halaman Kuesioner
      </h1>
      <Breadcrumbs />
      <KuesionerTable fetchedData={addNoProperty(data)} umkms={umkms} />
      {isLoading && <Loader />}
    </div>
  );
};

export default Kuesioner;
