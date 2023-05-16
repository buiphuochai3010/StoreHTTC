import React from "react";
import "flowbite";
import { Layout } from "@/pages/components/layout";
import { Breadcrumb, Button, Card } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { NumericFormat } from "react-number-format";
import Link from "next/link";
import { ProductCard } from "@/pages/components/product_card";
function ButtonHover(){
    console.log('ee')
}
const ProfileShop = (props: any) => {
  return (
    <Layout title="Quản lý sản phẩm" maxwidth="max-w-screen-2xl">
      <Breadcrumb className="mb-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Quản lý sản phẩm</Breadcrumb.Item>
      </Breadcrumb>
      <div className=" w-full">
      <div className="flex justify-center">
        <span className="font-bold text-2xl text-center text-black">
                Các sản phẩm đã được tạo
        </span>
      </div>
      <Button href="/user/productmanage/createproduct" className="after:first-letter:">Thêm sản phẩm mới</Button>
      <div className="flex flex-wrap justify-center">
        <ProductCard discount={false} href="/sanpham/AppleWatch" />
        <ProductCard discount={true} href="/sanpham/AppleWatch" />
        <ProductCard discount={false} href="/sanpham/AppleWatch" />
        <ProductCard discount={false} href="/sanpham/AppleWatch" />
        <ProductCard discount={true} href="/sanpham/AppleWatch" />
        <ProductCard discount={false} href="/sanpham/AppleWatch" />
        <ProductCard discount={false} href="/sanpham/AppleWatch" />
        <ProductCard discount={false} href="/sanpham/AppleWatch" />
      </div>
      </div>
    </Layout>
  );
};
export default ProfileShop;
