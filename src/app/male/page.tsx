import React from "react";
import { itemlist } from "../female/data";
import Link from "next/link";
import Image from "next/image";


export default function Female() {
  const index = 0;
  const price = itemlist[index];

  return (
    <>
    <div className="container justify-evenly grid sm:grid-cols-4 gap-x-14 mt-8">
        <div className="sm-grid-row-2">
        <div className="subscrthree "> 
        <Image
      src="/male1.png"
      width={500}
      height={700}
      alt="Picture of the men in flex push button bomber"
    />
        </div>
<h1 className="font-bold mt-2">flex push button bomber</h1>
<h1>jacket</h1>
<h1 className="picdowntxt">$225</h1>
</div>

<div className="sm-grid-row-2">
<div className="subscrthree bg-grey-700"> 
<Image
      src="/male2.png"
      width={500}
      height={500}
      alt="Picture of the men in raglan sweatshirt "
    />
</div>
<h1 className="picdowntxt">Raglan sweat shirt</h1>
<h1>sweater</h1>
<h1 className="picdowntxt">$195</h1>
</div>
   </div>    
    </>
    )
    }