import Image from "next/image";
import styles from "./page.module.scss";
import cn from 'classnames';
import { MoviesList } from "@/components/MoviesList";

export default function Home() {
  return (
    <main className={cn(styles.main, 'main', 'container')}>
      {/* temporary */}
      <MoviesList page={1} />
    </main>
  );
}
