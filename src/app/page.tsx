"use client";
import Image from "next/image";

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Products from "@/components/pages/Products";

export default function Home() {
  const sect2title = useRef<HTMLDivElement>(null); 

    useEffect(() => {
    const handleScroll = () => {
      if (!sect2title.current) return;

      const valueScrollY = window.scrollY;
 
      if(valueScrollY >= 200){
        sect2title.current.style.top = "-100px";
        sect2title.current.style.transitionDuration = '1.25s';
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="navbar">
      <div className="logo">BeadBerry</div>
      <div className="menu">
        <a href="#" className="menu menu-home">home</a>
        <a href="#aboutme" className="menu menu-about">about me</a>
        <a href="#shop" className="menu menu-product">product</a>
        <a href="#contact" className="menu menu-contact">contact</a>
      </div>
    </div>

    <header>
      <div className="head-section">
        <div className="left">
          <h1>Lorem Ipsum is BeadBerry</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <a href="#shop" className="btn btn-shop-now">ช้อปเลย</a>
        </div>
        <div className="right">
          <Image alt="product" src="/images/me-2-done.png" width={450} height={469} />
        </div>
      </div>
    </header>

    <div id="aboutme" className="section-2 section-about">
      <div className="products-section">
        <Products />
      </div>
      <div className="section-about-box">
        <div id="sect2title" ref={sect2title}>
          <h2>สินค้า handmade ที่ทำด้วยใจ</h2>
          <h3>ไม่เน้นกำไร เน้นขายเอาสังคม</h3>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="products-section products-section-right">
        <Products />
      </div>
    </div>

    <div id="shop" className="section-3">
      <h2>Explore our product</h2>
      <p className="title">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
      </p>
      <div className="products">
        <div className="product">
          <div className="icon-box">
            <Image src="/images/icon-bag.png" alt="สร้อยคอรุ้งสดใส" width={60} height={60} />
          </div>
          <h3>พวงกุญแจ เครื่องประดับตกแต่งกระเป๋า</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="#shop" className="btn btn-shop-now">ช้อปเลย</a>
        </div>
        <div className="product">
          <div className="icon-box">
            <Image src="/images/icon-necklace.png" alt="สร้อยคอรุ้งสดใส"  width={60} height={60} />
          </div>
          <h3>สร้อยคอ กำไลข้อมือ แหวน</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="#shop" className="btn btn-shop-now">ช้อปเลย</a>
        </div>
        <div className="product">
          <div className="icon-box">
            <Image src="/images/icon-tedd.png" alt="สร้อยคอรุ้งสดใส" width={60} height={60} />
          </div>
          <h3>ดินปั้น ตุ๊กตา</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="#shop" className="btn btn-shop-now">ช้อปเลย</a>
        </div>
      </div>
    </div>

    <div className="section-4 section-review">
      <h2>💬 รีวิวจากลูกค้า</h2>


      <div className="reviews-box">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="review">
              <div className="icon-box">
                <Image src="/images/icon-profiles-1.png" alt="สร้อยคอรุ้งสดใส" width={60} height={60} />
              </div>
              <div className="details">
                <div className="name">lily</div>
                <div className="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review">
              <div className="icon-box">
                <Image src="/images/icon-profiles-1.png" alt="สร้อยคอรุ้งสดใส" width={60} height={60} />
              </div>
              <div className="details">
                <div className="name">Bob</div>
                <div className="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review">
              <div className="icon-box">
                <Image src="/images/icon-profiles-1.png" alt="สร้อยคอรุ้งสดใส" width={60} height={60} />
              </div>
              <div className="details">
                <div className="name">lily</div>
                <div className="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review">
              <div className="icon-box">
                <Image src="/images/icon-profiles-1.png" alt="สร้อยคอรุ้งสดใส" width={60} height={60} />
              </div>
              <div className="details">
                <div className="name">Jack</div>
                <div className="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review">
              <div className="icon-box">
                <Image src="/images/icon-profiles-1.png" alt="สร้อยคอรุ้งสดใส" width={60} height={60} />
              </div>
              <div className="details">
                <div className="name">lily</div>
                <div className="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>

    <div className="cta" id="contact">
      <h2>Shopping online shop here!</h2>

      <div className="socials">
        <div className="ig icon-social">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
          </svg>
        </div>
        <div className="shopee icon-social">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 5.0585938 14 L 15.832031 14 A 1.0001 1.0001 0 0 0 16.158203 14 L 33.832031 14 A 1.0001 1.0001 0 0 0 34.158203 14 L 44.941406 14 L 43.216797 44.171875 C 43.126254 45.7692 41.823461 47 40.222656 47 L 9.7773438 47 C 8.177784 47 6.8737281 45.768887 6.7832031 44.171875 L 5.0585938 14.001953 L 5.0585938 14 z M 25.074219 18.001953 C 20.760219 18.001953 17.507812 20.689906 17.507812 24.253906 C 17.507812 28.283906 21.2555 29.653328 24.5625 30.861328 C 28.5665 32.324328 30.998047 33.441516 30.998047 36.603516 C 30.998047 39.045516 28.267156 41.033203 24.910156 41.033203 C 21.155156 41.033203 17.973406 38.291672 17.941406 38.263672 L 16.826172 39.90625 C 17.638172 40.56425 20.921156 43.007812 24.910156 43.007812 C 29.430156 43.007813 32.972703 40.194516 32.970703 36.603516 C 32.970703 31.833516 28.864234 30.330813 25.240234 29.007812 C 21.657234 27.696812 19.480469 26.724906 19.480469 24.253906 C 19.480469 21.775906 21.833219 19.976562 25.074219 19.976562 C 27.235219 19.976562 29.115719 20.794703 30.136719 21.345703 C 30.308719 21.437703 30.761672 21.709906 31.013672 21.878906 L 32.035156 20.216797 C 31.801156 20.064797 28.921219 18.001953 25.074219 18.001953 z"></path>
          </svg>
        </div>
        <div className="tiktok icon-social">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z"></path>
          </svg>
        </div>
      </div>
    </div>

    <footer>
      © 2025 BeadBerry | Instagram: @BeadBerry.ii.beads | Line: @BeadBerry.ii
    </footer>
    </>
  );
}
