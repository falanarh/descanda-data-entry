import { useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumb";
import ListingTable from "../components/ListingTable";
import { getAllListing } from "../services/listingService";
import Loader from "../components/Loader";

const Listing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getAllListing();
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

  const addNoProperty = (array) => {
    return array.map((item, index) => ({
      ...item,
      no: index + 1 // Menambahkan properti "no" dengan nilai urut mulai dari 1
    }));
  };

  return (
    <div className="mx-[10%] border-l-[5px] border-r-[5px] border-porange-30 min-h-screen bg-base rounded-[30px] mb-10 flex flex-col justify-start">
      <h1 className="mx-auto mt-6 w-[85%] text-2xl font-bold text-porange">Halaman Listing</h1>
      <Breadcrumbs />
      <ListingTable fetchedData={addNoProperty(data)} />
      {isLoading && <Loader />}
    </div>
  );
};

export default Listing;
