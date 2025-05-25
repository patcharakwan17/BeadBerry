"use client";
import React from 'react'
import Image from "next/image";

export default function Products() {
  return (
    <>
        <div className="slider">
            <div className="slide-track">
                <Image alt="product" src="/images/product/1.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/2.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/3.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/4.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/5.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/6.png" width={250} height={333} className='slide' />

                <Image alt="product" src="/images/product/1.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/2.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/3.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/4.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/5.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/6.png" width={250} height={333} className='slide' />
            </div>
            <div className="slide-track-2">
                <Image alt="product" src="/images/product/1.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/2.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/3.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/4.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/5.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/6.png" width={250} height={333} className='slide' />

                <Image alt="product" src="/images/product/1.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/2.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/3.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/4.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/5.png" width={250} height={333} className='slide' />
                <Image alt="product" src="/images/product/6.png" width={250} height={333} className='slide' />
            </div>
        </div>
    </>
  )
}
