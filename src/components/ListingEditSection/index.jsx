import React, { useEffect, useState } from "react";
import CustomSelect from "../CustomSelect";
import { VscError } from "react-icons/vsc";
import { wilayahRt } from "../KuesionerSection/data";
import { useNavigate } from "react-router-dom";
import { updateListing } from "../../services/listingService";
import { message } from "antd";

const ListingEditSection = ({ data, id }) => {
  // Define state for each form input
  const [formData, setFormData] = useState({
    rt_rw_dusun: "",
    no_urut_bangunan: "",
    nama_kk_ak_bangunan: "",
    alamat: "",
    is_umkm: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set form data ensuring all values are strings
    setFormData({
      rt_rw_dusun: data.rt_rw_dusun || "",
      no_urut_bangunan: data.no_urut_bangunan || "",
      nama_kk_ak_bangunan: data.nama_kk_ak_bangunan || "",
      alamat: data.alamat || "",
      is_umkm: data.is_umkm || "",
    });
  }, [data]);

  const validateInput = (name, value) => {
    let error = "";

    switch (name) {
      case "rt_rw_dusun":
        if (!value) {
          error = "Rt/rw/dusun tidak boleh kosong.";
        }
        break;

      case "no_urut_bangunan":
        if (!value) {
          error = "No. urut bangunan tidak boleh kosong.";
        } else if (!/^\d+$/.test(value)) {
          error = "No. urut bangunan harus berupa angka.";
        }
        break;

      case "nama_kk_ak_bangunan":
        if (!value.trim()) {
          error =
            "Nama Kepala/Anggota Keluarga atau Nama Bangunan tidak boleh kosong.";
        } else if (value.trim().length < 3) {
          error =
            "Nama Kepala/Anggota Keluarga atau Nama Bangunan harus memiliki setidaknya 3 karakter.";
        }
        break;

      case "alamat":
        if (!value.trim()) {
          error = "Alamat tidak boleh kosong.";
        } else if (value.trim().length < 10) {
          error = "Alamat harus memiliki setidaknya 10 karakter.";
        }
        break;

      case "is_umkm":
        if (!value) {
          error = "Butir ini tidak boleh kosong.";
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Handle change for each input field
  const onChange = (name, value) => {
    const error = validateInput(name, value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submission
    const formErrors = {};
    Object.keys(formData).forEach((name) => {
      const error = validateInput(name, formData[name]);
      if (error) {
        formErrors[name] = error;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form Data:", formData);
      // You can add logic to send this data to a server or handle it further
      updateProcessing();
    }
  };

  const isFormValid = () => {
    // Check if there are no errors and all fields are filled
    return (
      Object.values(formData).every((value) => typeof value === "string" && value.trim() !== "") &&
      Object.values(errors).every((error) => error === "")
    );
  };

  const updateProcessing = async () => {
    setIsLoading(true);
    try {
      const data = await updateListing(id, formData);
      console.log("Data:", data);
      message.success("Data listing berhasil diedit.", 5);
      navigate("/listing");
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-5 mb-10">
      <div className="flex items-center justify-center gap-[10px] w-fit">
        <img
          src="/images/bps-logo.png"
          alt="BPS Kabupaten Sidoarjo"
          className="w-[90px]"
        />
        <h2 className="text-[18px] font-semibold text-asap italic w-[140px] leading-6">
          BPS KABUPATEN SIDOARJO
        </h2>
        <img
          src="/images/sda-logo.png"
          alt="Kabupaten Sidoarjo"
          className="w-[70px]"
        />
        <h2 className="text-[18px] font-semibold text-asap italic w-[170px] leading-6">
          PEMERINTAH DESA SIMOANGIN-ANGIN
        </h2>
        <img src="/images/logo_dc.png" alt="Desa Cantik" className="w-[70px]" />
      </div>
      <h1 className="text-xl font-bold text-center">
        Edit Listing Pendataan UMKM Desa Simoangin-angin 2024
      </h1>
      <div
        className="w-[60%] font-asap py-8 px-6 bg-base rounded-xl flex flex-col"
        style={{
          boxShadow:
            "6px -4px 0px 1px rgba(217, 95, 89, 0.4), 0px 1px 0px 1px rgba(217, 95, 89, 0.4), -1px 0px 0px 1px rgba(217, 95, 89, 0.4), 0px -1px 0px 1px rgba(217, 95, 89, 0.4)",
        }}
      >
        <div className="flex flex-col w-full">
          <CustomSelect
            label="Identitas SLS (RT, RW, Dusun)"
            name="rt_rw_dusun"
            value={formData.rt_rw_dusun}
            onChange={(value) => onChange("rt_rw_dusun", value)}
            options={wilayahRt}
            isDisabled={true}
          />
          {errors["rt_rw_dusun"] && (
            <span className="flex items-center gap-1 px-2 py-1 mt-3 text-sm text-base bg-red-500 border-2 border-red-800 rounded-md w-fit">
              <VscError className="w-4 h-4" /> {errors["rt_rw_dusun"]}
            </span>
          )}
        </div>
        <div className="static flex flex-col w-full">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            No. Urut Bangunan
          </label>
          <input
            type="text"
            name="no_urut_bangunan"
            value={formData.no_urut_bangunan}
            placeholder="Masukkan No. Urut Bangunan"
            onChange={(e) => onChange("no_urut_bangunan", e.target.value)}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
          {errors["no_urut_bangunan"] && (
            <span className="flex items-center gap-1 px-2 py-1 mt-3 text-sm text-base bg-red-500 border-2 border-red-800 rounded-md w-fit">
              <VscError className="w-4 h-4" /> {errors["no_urut_bangunan"]}
            </span>
          )}
        </div>
        <div className="static flex flex-col w-full">
          <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
            Nama Kepala/Anggota Keluarga atau Nama Bangunan
          </label>
          <input
            type="text"
            name="nama_kk_ak_bangunan"
            value={formData.nama_kk_ak_bangunan}
            placeholder="Masukkan Nama Kepala/Anggota Keluarga atau Nama Bangunan"
            onChange={(e) => onChange("nama_kk_ak_bangunan", e.target.value)}
            className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
          {errors["nama_kk_ak_bangunan"] && (
            <span className="flex items-center gap-1 px-2 py-1 mt-3 text-sm text-base bg-red-500 border-2 border-red-800 rounded-md w-fit">
              <VscError className="w-4 h-4" /> {errors["nama_kk_ak_bangunan"]}
            </span>
          )}
        </div>
        <div className="static flex flex-col w-full">
          <label className="text-porange text-[14px] font-semibold relative top-3 ml-[7px] px-[3px] bg-base w-fit">
            Alamat (Jalan/Gang, Nomor Rumah)
          </label>
          <textarea
            name="alamat"
            value={formData.alamat}
            placeholder="Masukkan Alamat"
            onChange={(e) => onChange("alamat", e.target.value)}
            className="h-[100px] border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
          />
          {errors["alamat"] && (
            <span className="flex items-center gap-1 px-2 py-1 mt-3 text-sm text-base bg-red-500 border-2 border-red-800 rounded-md w-fit">
              <VscError className="w-4 h-4" /> {errors["alamat"]}
            </span>
          )}
        </div>
        <div className="flex flex-col w-full">
          <CustomSelect
            label="Apakah salah satu anggota keluarga memiliki/mengelola UMKM?"
            name="is_umkm"
            value={formData.is_umkm}
            onChange={(value) => onChange("is_umkm", value)}
            options={[
              { value: "ya", label: "Ya" },
              { value: "tidak", label: "Tidak" },
            ]}
            isDisabled={true}
          />
          {errors["rt_rw_dusun"] && (
            <span className="flex items-center gap-1 px-2 py-1 mt-3 text-sm text-base bg-red-500 border-2 border-red-800 rounded-md w-fit">
              <VscError className="w-4 h-4" /> {errors["rt_rw_dusun"]}
            </span>
          )}
        </div>
        {/* <button
          onClick={handleSubmit}
          className="self-end p-2 px-4 mt-5 text-base font-bold border rounded-md bg-porange border-porange"
        >
          Simpan
        </button> */}
        <button
          onClick={handleSubmit}
          className="self-end p-2 px-4 mt-5 text-base font-bold rounded-md bg-porange"
          style={{
            background: isFormValid() ? "#d95f59" : "#ccc",
            cursor: isFormValid() ? "pointer" : "not-allowed",
          }}
          disabled={!isFormValid()}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default ListingEditSection;
