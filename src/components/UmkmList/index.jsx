/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Avatar, Divider, List, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroll-component";
const UmkmList = ({
  data,
  onClose,
}) => {
    const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="scrollableDiv"
        style={{
          height: "fit-content",
          maxHeight: 500,
          width: 400,
          backgroundColor: "#f9f5e5",
          overflow: "auto",
          padding: "0 16px",
          border: "3px solid rgba(217, 95, 89, 0.3)",
          borderRadius: "10px",
          fontFamily: "Asap",
        }}
      >
        {/* <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      > */}
      <h1 className="sticky my-6 text-2xl font-semibold text-center">Pilih salah satu</h1>
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              key={item.kode}
              className="cursor-pointer"
              onClick={() => navigate('tambah/'+item._id)}
            >
              <List.Item.Meta
                //   avatar={<Avatar src={item.picture.large} />}
                title={item.kode}
                description={item.nama_kk_ak_bangunan}
              />
              <div>UMKM</div>
            </List.Item>
          )}
        />
        {/* </InfiniteScroll> */}
      </div>
    </div>
  );
};
export default UmkmList;
