import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Input } from "@/components/ui/input"
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
    

<div>
  <header className='flex justify-evenly paddingTop-20px mt-7 items-center flex-grow minHeight-150vh'>
  <h1 className="scroll-m-20 text-2xl font-bold padding-Top 20px">
     <Link href="gracemarket">Grace Market</Link>
    </h1>
    <h2 className="flex justify-between gap-14">
    <Link href="female">Female</Link>
    <Link href="male">Male</Link>
    <Link href="#Kids">Kids</Link>
    <Link href="#allproducts">All Producs</Link></h2>
    <div className="mt-1 border-round">
    <Input type="email" placeholder="what are you looking for"/>
</div>
<p>Cart</p>
  </header>
</div>


{children}



<footer>

<div className='flex flex-column flex-grow justify-evenly mt-12 '>
<div>
<h2 className="scroll-m-20 border-b pb-2 text-3xl first:mt-0">
      Grace Market
      <div className="flex flex-col text-small">
      <p>Small, artisan label that offers a<br/> thoughtfully curated collection of high<br/> quality everyday essentials made.</p>
    </div>
</h2>
</div>

    <h3 className="p scroll-m-20 text-2xl ">
     Company
     <p>About</p>
     <p>Terms of use</p>
     <p>Privacy Policy</p>
     <p>How it works</p>
     <p>Contact us</p>
    </h3>
    <h3 className="p scroll-m-20 text-2xl ">
     Support
     <p>
      Support Career
    </p>
    <p >
     24th Services
    </p>
    <p>
      Quick Chat
    </p>
    </h3>
    <h3 className="scroll-m-20 text-2xl">
      Contact
      <p >
     Whatapp
    </p>
    <p>
      Support24h
    </p>
    </h3>
    </div>

<div className="flex justify-evenly mt-12">

<p>copy right 2023</p>

<p>designed by M.Abu Bakar</p>

<p>code by M.Abu Bakar GitHub</p>
</div>
</footer>

</body>
</html>
</>

  )
}
