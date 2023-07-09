import Image from "next/image";

export default function ImageContainer({ imgClass, imageKey }) {
  return <Image className={imgClass} src={imageKey} alt={String(imageKey)} loading="lazy" />;
}
