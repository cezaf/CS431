import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import main_img from "/colby_map.png"
import 'react-tooltip/dist/react-tooltip.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>Colby Compass</title>
        <meta name="description" content="Colby Compass Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div id='banner'>
          <h1>Colby Compass</h1>
        </div>
        <div className={`${styles.map_container}`}>
          <img src="/colby_map.png" width='100%' height='100%' style={{bottom:0}}/>
          <Link href="/davis" className={`${styles.davis}`}>
            Davis Science Center 
          </Link>
          <Link href="/diamond" className={`${styles.diamond}`}>
            Diamond Building 
          </Link>
          <Link href="/gordon" className={`${styles.gordon}`}>
          Gordon Center for Creative and Performing Arts 
          </Link>
          <Link href="/parker_reed" className={`${styles.parker_reed}`}>
          Schair-Swenson-Watson Alumni Center (Parker Reed) 
          </Link>
          <Link href="/parker_reed" className={`${styles.parker_reed}`}>
          Schair-Swenson-Watson Alumni Center (Parker Reed) 
          </Link>
          <Link href="/runnals" className={`${styles.runnals}`}>
          Runnals Building 
          </Link>
          <Link href="/dana" className={`${styles.dana}`}>
          Dana Hall 
          </Link>
          <Link href="/cotter" className={`${styles.cotter}`}>
          Cotter Union
          </Link>
          <Link href="/olin" className={`${styles.olin}`}>
          F.W. Olin Science Center
          </Link>
          <Link href="/miller" className={`${styles.miller}`}>
          Miller Library
          </Link>
          <Link href="/art" className={`${styles.art}`}>
          Colby College Museum of Art
          </Link>
          <Link href="/lorimer" className={`${styles.lorimer}`}>
          Lorimer Chapel
          </Link>
          <Link href="/bixler" className={`${styles.bixler}`}>
          Bixler Art and Music Center
          </Link>
          <Link href="/grossman" className={`${styles.grossman}`}>
          Grossman Hall
          </Link>
          <Link href="/athletics" className={`${styles.athletics}`}>
          Harold Alfond Athletics and Recreation Center
          </Link>
          <Link href="/bobs" className={`${styles.bobs}`}>
          Roberts Hall
          </Link>
          <Link href="/mary_lowe" className={`${styles.mary_lowe}`}>
          Mary Lowe Coffeehouse
          </Link>
          <Link href="/eustis_parking" className={`${styles.eustis}`}>
          Eustis Parking Lot
          </Link>
          <Link href="/foss" className={`${styles.foss}`}>
          Foss Dining Hall
          </Link>
          <Link href="/colby_green" className={`${styles.colby_green}`}>
          Colby Green
          </Link>
          <Link href="/johnson" className={`${styles.johnson}`}>
          Johnson Pond
          </Link>
        </div>
    </>
  );
}
