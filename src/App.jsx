import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/beranda";
import TopAppButton from "./components/TopAppButton";
import NotFound from "./pages/notfound";
import Listing from "./pages/listing";
import ListingDetailPage from "./pages/listingdetail";
import ListingTambahPage from "./pages/listingtambah";
import Kuesioner from "./pages/kuesioner";
import KuesionerTambahPage from "./pages/kuesionertambah";
import KuesionerDetailPage from "./pages/kuesionerdetail";
import KuesionerEditPage from "./pages/kuesioneredit";
import ListingEditPage from "./pages/listingedit";
import Login from "./pages/login";
import ProtectedRoute from "./hooks/ProtectedRoute";

function App() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="relative flex flex-col min-h-screen bg-base">
      {!(isLoginPage || isNotFoundPage) && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/beranda" replace />} />
        <Route path="/listing-back" element={<Navigate to="/listing" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route
          path="/listing"
          element={
            <ProtectedRoute>
              <Listing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listing/detail/:id"
          element={
            <ProtectedRoute>
              <ListingDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listing/tambah"
          element={
            <ProtectedRoute>
              <ListingTambahPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listing/edit/:id"
          element={
            <ProtectedRoute>
              <ListingEditPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/kuesioner"
          element={
            <ProtectedRoute>
              <Kuesioner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/kuesioner/detail/:id"
          element={
            <ProtectedRoute>
              <KuesionerDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/kuesioner/tambah/:id"
          element={
            <ProtectedRoute>
              <KuesionerTambahPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/kuesioner/edit/:id"
          element={
            <ProtectedRoute>
              <KuesionerEditPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <TopAppButton />
    </div>
  );
}

export default App;
