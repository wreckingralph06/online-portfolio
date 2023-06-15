import Image from "next/image";

export default function ImageContainer({ imageKey }) {
  return <Image src={imageKey} alt={String(imageKey)} />;
}
