import React, { useEffect, useState } from 'react'
import { Carousel, ListGroup, Card, Breadcrumb, Button } from 'flowbite-react';
import { BsFillPhoneFill } from 'react-icons/bs'
import { MdEmojiObjects } from 'react-icons/md'
import { HiHome } from 'react-icons/hi'
import axios from 'axios';
import { ProductCard } from '@/pages/components/product_card';
// import { IconButton } from '../IconButton';
import { Layout } from '@/pages/components/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';



const CategoryId = ({ parentId }) => {
    const router = useRouter();
    const categoryId = router.query.id;
    return (

        <>

            <ul className='flex flex-wrap gap-4 justify-around items-center mb-4 '>
                {parentId.map((category) => (
                    <li className='flex items-center' key={category.id} >
                        <Link className='button' href={'/'}>
                            <Button className="bg-black hover:bg-slate-600 text-[13px]" outline={true}>

                                {category.attributes.TenTL}

                            </Button>
                        </Link>
                    </li>

                ))}
            </ul>

        </>
    )
}

export default CategoryId