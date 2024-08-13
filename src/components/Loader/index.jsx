import "./styles.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
