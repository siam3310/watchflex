import Image from "next/image";
import styles from "./page.module.scss";
import cn from 'classnames';

export default function Home() {
  return (
    <main className={cn(styles.main, 'main')}>
      main page
    </main>
  );
}
