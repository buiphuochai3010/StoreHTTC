import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout';
import { Carousel, ListGroup, Card, Breadcrumb } from 'flowbite-react';
import { BsFillPhoneFill } from 'react-icons/bs'
import { MdEmojiObjects } from 'react-icons/md'
import SanPham from '../sanpham';
import { HiHome } from 'react-icons/hi'
import { ProductCard } from '../components/product_card';
import { IconButton } from './IconButton';
import { Swiper, SwiperSlide } from 'swiper/react'
import { GiClothes } from "react-icons/gi"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios';
import { Button } from "flowbite-react"


import Link from 'next/link';
import CategoryId from './category/[id]';


const Category = ({ parentId }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategory] = useState([])
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`http://localhost:1337/api/danhmucs?fields[0]=TenDM&populate[Theloai][fields][0]=TenTL`,
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 44e1c4adc864717c17b7fc4c0d884aaf8cffbc57c1b937a36d168acd9bdbe535e56d1adbd934ef9355fc6462f8309dbad3606ca31b392c5191d2bd00f78a22edb58c5d46b71849cbc50b8fa8b8bb36c330ae69afe7ca86feff04cc31057ef726d0087b4e9ff748f88cb8977de146c1349133ca86d8d7698db77da8fc9a7d8e24'
                    }
                })
            console.log(res.data.data)
            setCategory(res.data.data)
        }
        fetchData()
    }, [])
    return (

        <>
            <Layout title="Danh mục" maxwidth='max-w-screen-xl'>

                <div className="grid h-auto mt-4 mb-4 rounded-lg bg-slate-200">
                    <div className='text-center py-2 px-4 '>
                        <h2 className='px-2 py-2 text-black md:text-3xl font-semibold text-xl'>Khám phá danh mục</h2>
                    </div>
                    {/* 
                    <ul className='flex flex-wrap gap-4 justify-around items-center mb-4 '>
                        {categories.slice(0, 5).map((category) => (
                            <li className='flex items-center' key={category.id} onClick={() => setSelectedCategory(category)}>
                                <Link className='button' href={`/categories/category?id=${category.id}=`}>
                                    < Button className="bg-black hover:bg-slate-600 text-[13px]" outline={true}>
                                        {
                                            category.attributes.TenDM

                                        }
                                    </ Button>

                                </Link>
                            </li>

                        ))}
                    </ul> */}

                    {selectedCategory ? (<CategoryId parentId={selectedCategory.attributes.Theloai.data} />)
                        : <ul className='flex flex-wrap gap-4 justify-around items-center mb-4 '>
                            {categories.slice(0, 5).map((category) => (
                                <li className='flex items-center' key={category.id} onClick={() => setSelectedCategory(category)}>
                                    {/* <Link className='button' href={"/categories/category/" + category.id}>

                                    </Link> */}
                                    <Button className="bg-black hover:bg-slate-600 text-[13px]" outline={true}>
                                        {
                                            category.attributes.TenDM
                                        }
                                    </Button>
                                </li>

                            ))}
                        </ul>
                    }
                    {/* // pathname: `/categories/category/[index]`,
                            // query: { index: String(`${category.id}`) } */}
                </div>

                <Breadcrumb className='mb-5'>
                    <Breadcrumb.Item href='/' icon={HiHome}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
                </Breadcrumb>

                <ProductCard discount={false} href="/sanpham/AppleWatch" />


            </Layout >


        </>
    )
}

export default Category