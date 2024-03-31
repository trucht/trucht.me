import Image from "next/image";

export default function DownloadCVButton() {
  return (
    <a
      href="/Truc-Huynh-Resume.pdf"
      className="px-4 py-2 font-semibold group inline-flex gap-2 border-black border-2 border-solid rounded-md"
      download
    >
      <span className="hidden md:block">Resume</span>
      <Image
        src="/icon-download.svg"
        alt="icon-download"
        width={20}
        height={20}
      />
    </a>
  );
}
