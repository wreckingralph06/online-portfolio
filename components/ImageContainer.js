import Image from "next/image";

export default function ImageContainer({ imageKey }) {
  return <Image className="profile-img" src={imageKey} alt={String(imageKey)} loading="lazy"/>;
}
