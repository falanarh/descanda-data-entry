import {
  Button,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { Popconfirm } from "antd";
import { DeleteIcon } from "./DeleteIcon";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "./SearchIcon";
import { columns, dummy } from "./data";
import "./style.css";
import { MdAdd } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
import CustomButton from "../CustomButton";
import { FaPlus } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import UmkmList from "../UmkmList";
import { wilayahRt } from "../KuesionerSection/data";

const KuesionerTable = ({ fetchedData, umkms}) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isUmkmListOpen, setIsUmkmListOpen] = useState(false);

  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDetailClick = (data) => {
    console.log("Detail Clicked", data);
    navigate(`detail/${data._id}`);
  };

  const handleEditClick = (data) => {
    console.log("Edit Clicked", data);
    navigate(`edit/${data._id}`);
  };

  const handleDeleteClick = (data) => {};

  const handleAddClick = () => {
    console.log("Add Clicked");
    setIsUmkmListOpen(true);
    // navigate("tambah");
  };

  const filteredData = data.filter((dataItem) =>
    Object.values(dataItem).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const renderCell = (data, columnKey) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
      case "aksi":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Tooltip content="Detail">
              <span
                className="text-lg cursor-pointer text-default-400 active:opacity-50"
                onClick={() => handleDetailClick(data)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit">
              <span
                className="text-lg cursor-pointer text-default-400 active:opacity-50"
                onClick={() => handleEditClick(data)}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Hapus">
              <Popconfirm
                title="Hapus Data"
                description="Anda yakin ingin menghapus data kuesioner ini?"
                onConfirm={() => handleDeleteClick(data)}
                onOpenChange={() => console.log("open change")}
              >
                <span className="text-lg cursor-pointer text-danger active:opacity-50">
                  <DeleteIcon />
                </span>
              </Popconfirm>
            </Tooltip>
          </div>
        );
      default:
        if (columnKey === "rt_rw_dusun") {
          return getLabelByValue("wilayahRt", cellValue);
        }
        return cellValue;
    }
  };

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 20;

  const pages = Math.ceil(data.length / rowsPerPage);

  console.log(pages);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredData.slice(start, end);
  }, [page, filteredData]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["bg-default-50", "rounded-xl", "shadow", "w-full"],
      th: ["bg-porange", "text-[#f9f5e5]", "text-[15px]"],
      // td: [
      //   // changing the rows border radius
      //   // first
      //   "group-data-[first=true]:first:before:rounded-none",
      //   "group-data-[first=true]:last:before:rounded-none",
      //   // middle
      //   "group-data-[middle=true]:before:rounded-none",
      //   // last
      //   "group-data-[last=true]:first:before:rounded-none",
      //   "group-data-[last=true]:last:before:rounded-none",
      // ],
      td: ["text-[15px]"],
    }),
    []
  );

  const getLabelByValue = (type, value) => {
    const dataMap = {
      wilayahRt,
    };

    const dataArray = dataMap[type];
    if (!dataArray) {
      throw new Error(`Unknown type: ${type}`);
    }

    const found = dataArray.find((item) => item.value === value);
    return found ? found.label : "Label not found";
  };

  return (
    <div className="flex flex-col items-center justify-center font-asap w-[85%] mx-auto my-10">
      <div className="flex items-center justify-between w-full">
        <Input
          label="Pencarian"
          radius="lg"
          classNames={{
            inputWrapper: ["shadow", "bg-default-50"],
          }}
          placeholder="Ketikkan kata kunci..."
          startContent={
            <SearchIcon className="mb-0.5 text-pdarkblue pointer-events-none flex-shrink-0" />
          }
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4 w-[50%]"
        />
        <div className="flex items-center gap-3">
          <CustomButton
            bgColor="bg-pblue"
            icon={<FaPlus className="size-[24px] text-white ml-[10px]" />}
            label="Input"
            onClick={handleAddClick}
          />
          <CustomButton
            bgColor="bg-pgreen"
            icon={
              <PiMicrosoftExcelLogoFill className="size-[24px] text-white ml-[10px]" />
            }
            label="Ekspor"
          />
        </div>
      </div>
      <Table
        isStriped
        aria-label="Example table with custom cells"
        shadow="none"
        // className="shadow rounded-xl"
        classNames={classNames}
        bottomContent={
          <div className="flex justify-center w-full">
            <Pagination
              isCompact
              showControls
              showShadow
              color="red"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "aksi" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={items} emptyContent={"No rows to display."}>
          {(item) => (
            <TableRow key={item.no} className="striped-row">
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {isUmkmListOpen && (
        <UmkmList
          // isOpen={isUmkmListOpen}
          onClose={() => setIsUmkmListOpen(false)}
          data={umkms}
        />
      )}
    </div>
  );
};

export default KuesionerTable;
