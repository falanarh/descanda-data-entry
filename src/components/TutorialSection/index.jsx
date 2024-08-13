import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GrDocumentText, GrLogin } from "react-icons/gr";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiPassValidLine } from "react-icons/ri";
import { BiSolidSave } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineItems = [
  {
    id: 1,
    title: "Menerima Akun PCL melalui E-Mail",
    description: "Cek email Anda untuk melihat apakah akun petugas pencacah lapangan (PCL) Anda sudah dikirim oleh petugas.",
    icon: <MdOutlineMarkEmailRead />,
  },
  {
    id: 2,
    title: "Login ke Aplikasi Entri Data",
    description: "Masuk aplikasi entri data menggunakan username dan password yang telah diberikan sebelumnya.",
    icon: <GrLogin />,
  },
  {
    id: 3,
    title: "Input Data Listing Individu",
    description: "Masuk ke menu Data Individu untuk meng-input data individu satu persatu secara keseluruhan. Setelah itu, klik tombol Input Listing untuk membuka formulir dan masukkan data listing. Data listing individu eligible akan digunakan untuk pengisian kuesioner lengkap individu tersebut.",
    icon: <GrDocumentText />,
  },
  {
    id: 4,
    title: "Input Data Lengkap Individu",
    description: "Setelah mengisi data listing individu, klik tombol Input Kuesioner untuk membuka formulir lalu pilih individu eligible kemudian input data lengkap individu tersebut.",
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    id: 5,
    title: "Periksa Validitas Data",
    description: "Pastikan bahwa setiap informasi yang diinputkan sudah valid dan tidak ada pesan kesalahan yang muncul.",
    icon: <RiPassValidLine />,
  },
  {
    id: 6,
    title: "Simpan Data Individu yang Belum Lengkap",
    description: "Klik tombol Simpan untuk menyimpan data individu apabila masih terdapat isian yang belum lengkap.",
    icon: <BiSolidSave />,
  },
  {
    id: 7,
    title: "Kirim Data Individu yang Sudah Lengkap",
    description: "Klik tombol Kirim apabila seluruh isian data individu sudah lengkap dan siap dikirim.",
    icon: <BsFillSendFill />,
  },
];

const iconStyle = {
  fontSize: "50px",
  background: "#EB891B",
  color: "#f9f5e5",
  boxShadow: "0 0 0 4px #D95F59, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)",
};

const contentStyle = {
  background: "#FFFFFF",
  color: "#D95F59",
  borderTop: "3px solid #D95F59",
};

const contentArrowStyle = {
  borderRight: "7px solid #FFFFFF",
};

const TutorialSection = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4">
      <h1 className="mt-10 text-2xl font-bold">Tahapan Entri Data</h1>
      <h2 className="text-lg">
        Ikuti langkah-langkah di bawah ini untuk memulai melakukan entri data.
      </h2>
      <VerticalTimeline lineColor="#D95F59" className="mt-10">
        {timelineItems.map(({ id, title, description, icon }) => (
          <VerticalTimelineElement
            key={id}
            className="relative vertical-timeline-element--work"
            icon={icon}
            iconStyle={iconStyle}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h3 className="vertical-timeline-element-title font-bold text-[16px] underline underline-offset-[3px]">
              {title}
            </h3>
            <p className="text-[16px] text-justify">{description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TutorialSection;
