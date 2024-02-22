import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/profilepicsec.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
    />
  )
}