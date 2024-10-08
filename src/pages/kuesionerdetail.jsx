import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumb";
import KuesionerDetail from "../components/KuesionerDetail";
import { useEffect, useState } from "react";
import { getOneKuesioner } from "../services/kuesionerService";
import Loader from "../components/Loader";
import { getAllUsers } from "../services/authService";

const KuesionerDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getOneKuesioner(id);
      const response2 = await getAllUsers();
      console.log(response);
      console.log(response2);
      setData(response.data);
      setUsers(response2.data);
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
        Halaman Detail Kuesioner
      </h1>
      <Breadcrumbs />
      <div className="mx-auto mb-auto w-[85%] flex flex-col items-center">
        <KuesionerDetail data={data} users={users} />
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default KuesionerDetailPage;
