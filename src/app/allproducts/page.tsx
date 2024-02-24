import React from "react";
import { itemlist } from "./data";
import Link from "next/link";
import Image from "next/image";


export default function Female() {
  const index = 0;
  const price = itemlist[index];

  return( 
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
   
    <div className="container justify-around grid sm:grid-cols-4 gap-x-14 mt-8">
    <div className="sm-grid-row-2">
        <div className="subscrthree ">
        <Image
      src="/brushedbomber.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    /> </div>
<h1 className="picdowntxt">Brushed Raglan Sweater</h1>
<h1>sweater</h1>
<h1 className="picdowntxt">$195</h1>
</div>

<div className="sm-grid-row-2">
        <div className="subscrthree ">
        <Image
      src="/muscletank.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    />
     </div>
<h1 className="picdowntxt">Cameryn Sash Tie Dress</h1>
<h1>Dress</h1>
<h1 className="picdowntxt">$545</h1>
</div>

<div className="sm-grid-row-2">
        <div className="subscrthree "> 
        <Image
      src="/flexsweatshirt.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    />
    </div>
<h1 className="picdowntxt">flex Sweater</h1>
<h1>Sweater</h1>
<h1 className="picdowntxt">$175</h1>
</div>

<div className="sm-grid-row-2">
        <div className="subscrthree "> 
        <Image
      src="/reglansweatshirt.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    />
    </div>
<h1 className="picdowntxt">flex Sweatpants</h1>
<h1>pants</h1>
<h1 className="picdowntxt">$175</h1>
</div>

<div className="sm-grid-row-2">
        <div className="subscrthree ">
        <Image
      src="/pinksweatpants.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    />
     </div>
<h1 className="picdowntxt">Pink Fleece Sweatpants</h1>
<h1>{price.item}</h1>
<h1 className="picdowntxt">$195</h1>
</div>

<div className="sm-grid-row-2">
        <div className="subscrthree "> 
        <Image
      src="/litesweatpants.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    />
    </div>
<h1 className="picdowntxt">Lit sweatpants</h1>
<h1>{price.item}</h1>
<h1 className="picdowntxt">$150</h1>
</div>

<div className="sm-grid-row-2">
        <div className="subscrthree "> 
        <Image
      src="/flexsweatpants.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    />
    </div>
<h1 className="picdowntxt">Imperial Alpaca Hoodie</h1>
<h1>jacket</h1>
<h1 className="picdowntxt">$525</h1>
</div>

<div className="sm-grid-row-2">
        <div className="subscrthree "> 
        <Image
      src="/mainpic.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    />
    </div>
<h1 className="picdowntxt">Muscle Tanks</h1>
<h1> T Shirts</h1>
<h1 className="picdowntxt">$175</h1>
</div>

<div className="sm-grid-row-2">
        <div className="subscrthree "> 
        <Image
      src="/creamehoodie.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    />
    </div>
<h1 className="picdowntxt">Brushed Bomber</h1>
<h1> Jacket</h1>
<h1 className="picdowntxt">$255</h1>
</div>

</div>
</>
  );
}
