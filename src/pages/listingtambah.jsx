import Breadcrumbs from "../components/BreadCrumb";
import ListingSection from "../components/ListingSection";

const ListingTambahPage = () => {
  return (
    <div className="mx-[10%] border-l-[5px] border-r-[5px] border-porange-30 bg-base rounded-[30px] flex flex-col justify-start">
      <h1 className="mx-auto mt-6 w-[85%] text-2xl font-bold text-porange">Halaman Tambah Listing</h1>
      <Breadcrumbs />
      <div className="mx-auto mb-auto w-[85%] flex flex-col items-center">
        <ListingSection />
      </div>
    </div>
  );
};

export default ListingTambahPage;
