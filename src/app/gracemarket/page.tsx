"use client"
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div class="justify-evenly">
    <p className="sale">70% sale</p>

   <div className="distance flex flex-col ">
<h1 className="scroll-m-20 text-5xl font-extrabold  ">


An Industrial <br/> Take on <br/> Streetwear
    </h1>
    <br/>
    <p>Anyone can beat you  but no one can<br/>  beat your outfit as long as you wear<br/> Dine outfits</p>
  <br/>
  <div>
  <Image
      src="/mainpic.png"
      width={500}
      height={500}
      alt="Picture of the lady "
    />
  </div>


</div>

<p className="cart">start shopping</p>
   </div>

<div className="flex justify-center text-color-blue-600">
 PROMOTIONS
   </div>
  <br/>
  <div className="flex justify-center text-color-blue-600 font-bold text-2xl ">
 Our Promotion Events
   </div>



<div className="container grid justify-evenly sm:grid-cols-3 mt-6">
<div className="sm:grid-row-2">
  <div className="longboxroo">

  </div>
<br/>
  <div className="longboxrootwo">

</div>

</div>
<div className="subscrtwo">

</div>



</div>


<div className="flex justify-center text-color-blue-600 mt-6">
 PRODUCTS
   </div>
   <div className="flex justify-center text-color-blue-600 font-bold text-2xl mt-6">
CHECK WHAT WE HAVE
   </div>

   
   <div className="container grid sm:grid-cols-3 mt-6">
 <div className="subone hover:containeronzoo">
 <Image
      src="/reglansweatshirt.png"
      width={500}
      height={500}
      alt="Picture of the lady in reglan sweat shirt "
    />
 </div>

<div className="subtwo hover:containeronzoo">
     <Image
      src="/mainpic.png"
      width={500}
      height={500}
      alt="Picture of the lady "
    />
</div>


<div className="subthree hover:containeronzoo">
<Image
      src="/brushedbomber.png"
      width={500}
      height={500}
      alt="Picture of the regla sweat shirt"
    />
</div>

</div>


<div className="flex justify-end mt-12 mr-120px">
  <h1 className="scroll-m-20 text-5xl font-bold mt-4">
    Unique and<br/> Authentic Vintage <br/>Designer Jewellery
  </h1>
</div>




<div className="container grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-6 mt-16">
  <div>
  <h1 className="font-bold text-2xl mt-1">Using good quality material</h1>
  <h2 className="contextt mt-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit</h2>

  <h1 className="font-bold text-2xl mt-6">Modern Fashion Design</h1>
  <h2 className="contextt  mt-4">Lorem ipsum dolor sit amt, consectetur adipiscing elit</h2>
</div>
<div>
  <h1  className="font-bold text-2xl mt-1">100% home made products</h1>
  <h2 className="contextt  mt-4">Loream ipsum dolor sit amt, consectetur adipiscing elit.</h2>

  <h1 className="mt-6 font-bold text-2xl">Discount for Bulk Orders</h1>
  <h2 className="contextt  mt-4">Lorem ipsum dolor sit amt, consectetur adipiscing elit</h2>
</div>
  <h1 className="sub">
  <Image
      src="/creamehoodie.png"
      width={500}
      height={1000}
      alt="Picture of the regla sweat shirt"
    />
  </h1>

  <h1 className="contextt">This piece is ethically<br/> crafted in our small family<br/> -owned workshop in Peru <br/> with unmatched attention <br/> to detail and care. The <br/> Natural color is the actual<br/>  natural color of the fiber,<br/>  undyed and 100% <br/> traceable.</h1>
</div>
<div className="flex justify-center text-color-blue-600 font-bold text-4xl mt-12">
Subscribe Our Newsletter
   </div>
<div className="flex justify-center text-color-grey mt-6">
Get the latest information and promo offers directly 
</div>

<div className="flex justify-center mt-8">
<div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Input Email address" />
      <Button type="submit">get started</Button>
    </div>
</div>
   </>
  )
}
