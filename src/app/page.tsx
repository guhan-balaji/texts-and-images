import dynamic from "next/dynamic";
import styles from "@/app/ui/page.module.css";

const ImageEditor = dynamic(() => import("@/app/ui/ImageEditor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.color}`}>
      <h1>Simple Image Editor</h1>
      <ImageEditor />
    </main>
  );
}
