/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import {
  bentukBadanUsaha,
  blocks,
  daftarKategori,
  jenisKelamin,
  lokasiTempatUsaha,
  pendidikanTerakhir,
  skalaUsaha,
  wilayahRt,
} from "./data";
import CustomSelect from "../CustomSelect";
import { VscError } from "react-icons/vsc";
import SimpanModal from "../SimpanModal";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";
import { message, Popconfirm } from "antd";
import { updateKuesioner } from "../../services/kuesionerService";

const QuestionnaireBlock = ({
  title,
  questions,
  values,
  errors,
  onChange,
  handleSimpanClicked,
}) => {
  const getOptions = (name) => {
    switch (name) {
      case "rt_rw_dusun":
        return wilayahRt;
      case "pendidikan_terakhir":
        return pendidikanTerakhir;
      case "jenis_kelamin":
        return jenisKelamin;
      case "kategori_usaha":
        return daftarKategori;
      case "bentuk_badan_usaha":
        return bentukBadanUsaha;
      case "lokasi_tempat_usaha":
        return lokasiTempatUsaha;
      case "skala_usaha":
        return skalaUsaha;
      default:
        return [];
    }
  };

  return (
    <div
      className="w-full px-6 py-10 mb-4 rounded-xl bg-base"
      style={{
        boxShadow:
          "6px -4px 0px 1px rgba(217, 95, 89, 0.4), 0px 1px 0px 1px rgba(217, 95, 89, 0.4), -1px 0px 0px 1px rgba(217, 95, 89, 0.4), 0px -1px 0px 1px rgba(217, 95, 89, 0.4)",
      }}
    >
      <h2 className="p-4 mb-4 text-base text-xl font-semibold text-center bg-porange rounded-xl">
        {title}
      </h2>
      <div className="space-y-4">
        {questions.map((question, index) =>
          question.name === "rt_rw_dusun" ||
          question.name === "pendidikan_terakhir" ||
          question.name === "jenis_kelamin" ||
          question.name === "kategori_usaha" ||
          question.name === "bentuk_badan_usaha" ||
          question.name === "lokasi_tempat_usaha" ||
          question.name === "skala_usaha" ? (
            <div key={index} className="flex flex-col w-full">
              <CustomSelect
                label={question.label}
                name={question.name}
                value={values[question.name] || ""}
                onChange={(value) => onChange(question.name, value)}
                options={getOptions(question.name)}
              />
              {errors[question.name] && (
                <span className="flex items-center gap-1 px-2 py-1 mt-3 -mb-2 text-sm text-base bg-red-500 border-2 border-red-800 rounded-md w-fit">
                  <VscError className="w-4 h-4" /> {errors[question.name]}
                </span>
              )}
            </div>
          ) : question.name === "alamat" ||
            question.name === "kegiatan_utama_usaha" ||
            question.name === "catatan" ? (
            <div key={index} className="static flex flex-col w-full">
              <label className="text-porange text-[14px] font-semibold relative top-3 ml-[7px] px-[3px] bg-base w-fit">
                {question.label}
              </label>
              <textarea
                placeholder={question.placeholder}
                name={question.name}
                value={values[question.name] || ""}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out resize-none"
                rows={question.name === "catatan" ? 5 : 2}
              />
              {errors[question.name] && (
                <span className="flex items-center gap-1 px-2 py-1 mt-3 -mb-2 text-sm text-base bg-red-500 border-2 border-red-800 rounded-md w-fit">
                  <VscError className="w-4 h-4" /> {errors[question.name]}
                </span>
              )}
              {question.name === "catatan" && (
                <Popconfirm
                  title="Simpan Data"
                  description="Anda yakin ingin menyimpan data kuesioner UMKM?"
                  onConfirm={handleSimpanClicked}
                  // onCancel={cancel}
                  okText="Yakin"
                  cancelText="Tidak"
                  // className="font-asap"
                >
                  <button
                    // onClick={handleSubmit}
                    className="self-center p-2 px-4 mt-5 text-base font-bold rounded-md bg-porange"
                    style={{
                      background: "#d95f59",
                      cursor: "pointer",
                    }}
                  >
                    Simpan
                  </button>
                </Popconfirm>
              )}
            </div>
          ) : (
            <div key={index} className="static flex flex-col w-full s">
              <label className="text-porange text-[14px] font-semibold relative top-2 ml-[7px] px-[3px] bg-base w-fit">
                {question.label}
              </label>
              <input
                type="text"
                placeholder={question.placeholder}
                name={question.name}
                value={values[question.name] || ""}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                className="border-porange-50 px-[10px] py-[11px] text-[16px] bg-base border-2 rounded-[5px] w-full
                 focus:outline-none placeholder:text-slate-500
                 focus:border-porange focus:ring-1 focus:ring-porange
                 hover:border-porange transition duration-200 ease-in-out"
              />
              {errors[question.name] && (
                <span className="flex items-center gap-1 px-2 py-1 mt-3 -mb-2 text-sm text-base bg-red-500 border-2 border-red-800 rounded-md w-fit">
                  <VscError className="w-4 h-4" /> {errors[question.name]}
                </span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

const BlockNavigation = ({
  currentBlock,
  totalBlocks,
  onNavigate,
  canNavigate,
}) => {
  const handleNext = () => {
    if (canNavigate && currentBlock < totalBlocks - 1) {
      onNavigate(currentBlock + 1);
    }
  };

  const handlePrevious = () => {
    if (currentBlock > 0) {
      onNavigate(currentBlock - 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-6">
      <button
        onClick={handlePrevious}
        disabled={currentBlock === 0}
        className="px-4 py-2 text-base rounded-md bg-porange disabled:opacity-50"
      >
        Sebelumnya
      </button>
      <span className="font-semibold text-porange">
        Blok {currentBlock + 1} dari {totalBlocks}
      </span>
      <button
        onClick={handleNext}
        disabled={currentBlock === totalBlocks - 1 || !canNavigate}
        className="px-4 py-2 text-base rounded-md bg-porange disabled:opacity-50"
      >
        Selanjutnya
      </button>
    </div>
  );
};

const KuesionerEditSection = ({ data, id }) => {
  const [currentBlock, setCurrentBlock] = useState(0);
  const [formValues, setFormValues] = useState(
    blocks.reduce((acc, block) => {
      block.questions.forEach((question) => {
        acc[question.name] = "";
      });
      return acc;
    }, {})
  );
  const [errors, setErrors] = useState({});
  const [isSimpanModalOpen, setIsSimpanModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Initialize formValues with default data or empty values
  useEffect(() => {
    const initialValues = blocks.reduce((acc, block) => {
      block.questions.forEach((question) => {
        acc[question.name] = data[question.name] || "";
      });
      return acc;
    }, {});
    setFormValues(initialValues);
  }, [data]);

  const validateInput = (name, value) => {
    let error = "";

    switch (name) {
      case "rt_rw_dusun":
        if (!value) {
          error = "Rt/rw/dusun tidak boleh kosong.";
        }
        break;

      case "nama_kepala_keluarga":
        if (!value.trim()) {
          error = "Nama kepala keluarga tidak boleh kosong.";
        } else if (value.trim().length < 3) {
          error = "Nama kepala keluarga harus memiliki setidaknya 3 karakter.";
        }
        break;

      case "no_urut_bangunan":
        if (!value) {
          error = "No. urut bangunan tidak boleh kosong.";
        } else if (!/^\d+$/.test(value)) {
          error = "No. urut bangunan harus berupa angka.";
        }
        break;

      case "alamat":
        if (!value.trim()) {
          error = "Alamat tidak boleh kosong.";
        } else if (value.trim().length < 10) {
          error = "Alamat harus memiliki setidaknya 10 karakter.";
        }
        break;

      case "nama_usaha":
        if (!value.trim()) {
          error = "Nama usaha tidak boleh kosong.";
        } else if (value.trim().length < 3) {
          error = "Nama usaha harus memiliki setidaknya 3 karakter.";
        }
        break;

      case "latitude":
        if (!value) {
          error = "Latitude tidak boleh kosong.";
        } else if (!/^-?\d+(\.\d+)?$/.test(value)) {
          error = "Latitude harus berupa angka desimal yang valid.";
        } else {
          const latitude = parseFloat(value);
          if (latitude < -90 || latitude > 90) {
            error = "Latitude harus berada di antara -90 dan 90 derajat.";
          }
        }
        break;

      case "longitude":
        if (!value) {
          error = "Longitude tidak boleh kosong.";
        } else if (!/^-?\d+(\.\d+)?$/.test(value)) {
          error = "Longitude harus berupa angka desimal yang valid.";
        } else {
          const longitude = parseFloat(value);
          if (longitude < -180 || longitude > 180) {
            error = "Longitude harus berada di antara -180 dan 180 derajat.";
          }
        }
        break;

      case "nama_pemilik_penanggungjawab":
        if (!value.trim()) {
          error = "Nama pemilik atau penaggungjawab tidak boleh kosong.";
        } else if (value.trim().length < 3) {
          error =
            "Nama pemilik atau penaggungjawab harus memiliki setidaknya 3 karakter.";
        }
        break;

      case "jenis_kelamin":
        if (!value) {
          error = "Jenis kelamin tidak boleh kosong.";
        }
        break;

      case "tanggal_lahir":
        if (!value) {
          error = "Tanggal lahir tidak boleh kosong.";
        } else if (!/^\d{2}-\d{2}-\d{4}$/.test(value)) {
          error = "Tanggal lahir harus dalam format HH-BB-TTTT.";
        }
        break;

      case "nik":
        if (!value) {
          error = "NIK tidak boleh kosong.";
        } else if (!/^\d{16}$/.test(value)) {
          error = "NIK harus terdiri dari 16 digit angka.";
        }
        break;

      case "no_hp":
        if (!value) {
          error = "No. HP tidak boleh kosong.";
        } else if (!/^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(value)) {
          error =
            "No. HP harus berupa nomor yang valid (contoh: +6281234567890).";
        }
        break;

      case "pendidikan_terakhir":
        if (!value) {
          error = "Pendidikan terakhir tidak boleh kosong.";
        }
        break;

      case "kategori_usaha":
        if (!value) {
          error = "Kategori usaha tidak boleh kosong.";
        }
        break;

      case "kegiatan_utama_usaha":
        if (!value.trim()) {
          error = "Kegiatan utama usaha tidak boleh kosong.";
        } else if (value.trim().length < 10) {
          error = "Kegiatan utama usaha harus memiliki setidaknya 10 karakter.";
        }
        break;

      case "bentuk_badan_usaha":
        if (!value) {
          error = "Bentuk badan usaha tidak boleh kosong.";
        }
        break;

      case "lokasi_tempat_usaha":
        if (!value) {
          error = "Lokasi tempat usaha tidak boleh kosong.";
        }
        break;

      case "skala_usaha":
        if (!value) {
          error = "Skala usaha tidak boleh kosong.";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    validateInput(name, value);
  };

  const canNavigateToNextBlock = useMemo(() => {
    const currentQuestions = blocks[currentBlock].questions;

    return currentQuestions.every((question) => {
      const value = formValues[question.name];
      validateInput(question.name, value);

      return !errors[question.name];
    });
  }, [currentBlock, formValues, errors]);

  const handleNavigate = (newBlock) => {
    setCurrentBlock(newBlock);
  };

  const handleSimpanClicked = () => {
    console.log("Simpan clicked");
    console.log("Form Values:", formValues);
    // setIsSimpanModalOpen(true);

    editProcessing();
  };

  const editProcessing = async () => {
    setIsLoading(true);
    try {
      const data = await updateKuesioner(id, formValues);
      console.log("Data:", data);
      message.success("Data kuesioner berhasil diedit.", 5);
      navigate("/kuesioner");
    } catch (error) {
      console.log("Error:", error);
      message.error("Terjadi error: " + error.message, 5);
    } finally { 
      setIsLoading(false);
    }
  };

  const handleSimpanModalClose = () => {
    setIsSimpanModalOpen(false);
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
        Edit Kuesioner UMKM Desa Simoangin-angin 2024
      </h1>
      <div className="w-[60%] mx-auto bg-base font-asap">
        <QuestionnaireBlock
          key={currentBlock}
          title={blocks[currentBlock].title}
          questions={blocks[currentBlock].questions}
          values={formValues}
          errors={errors}
          onChange={handleChange}
          handleSimpanClicked={handleSimpanClicked}
        />
        <BlockNavigation
          currentBlock={currentBlock}
          totalBlocks={blocks.length}
          onNavigate={handleNavigate}
          canNavigate={canNavigateToNextBlock}
        />
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

KuesionerEditSection.defaultProps = {
  data: {},
};

export default KuesionerEditSection;
