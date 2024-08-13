import { Link, useLocation } from "react-router-dom";

// Helper function to create breadcrumb items
// const createBreadcrumbs = (pathname) => {
//   const pathnames = pathname.split("/").filter((x) => x);
//   return pathnames.map((_, index) => {
//     const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//     return { name: pathnames[index], routeTo };
//   });
// };

// Helper function to create breadcrumb items with truncation for long names
const createBreadcrumbs = (pathname) => {
  const pathnames = pathname.split("/").filter((x) => x);
  
  // Map over the pathnames and truncate any name longer than 10 characters
  return pathnames.map((_, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const name = pathnames[index];
    // Truncate names longer than 10 characters with ellipsis
    const truncatedName = name.length > 10 ? `${name.slice(0, 10)}...` : name;
    return { name: truncatedName, routeTo };
  });
};

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = createBreadcrumbs(location.pathname);

  return (
    <nav className="my-2 mx-auto w-[85%] text-porange font-asap">
      <Link to="/" className="text-porange">
        Beranda
      </Link>
      {breadcrumbs.map(({ name, routeTo }, index) => (
        <span key={routeTo}>
          {" / "}
          <Link
            to={routeTo}
            className={`${
              index === breadcrumbs.length - 1 ? "font-bold text-porange" : ""
            } text-porange`}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
