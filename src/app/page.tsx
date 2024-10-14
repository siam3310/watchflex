import Image from "next/image";
import styles from "./page.module.scss";
import cn from 'classnames';
import { Movies } from "@/components/Movies";

export default function Home() {
  return (
    <main className={cn(styles.main, 'main', 'container')}>
      <Movies />
    </main>
  );
}
