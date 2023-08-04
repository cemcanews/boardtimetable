import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <p>The All Board of India will conduct the 12th Class Annual Exam in February or March of 2024. Students should check the 5th, 8th, 9th, 10th, 11th, 12th Class Exam Schedule 2024 in PDF format for subject-wise exam dates. Once they have reviewed all the information, students can start preparing for their exams according to the given time tables.
You can find the time tables for all Boards’ 12th exams on this page. Stay updated with the latest information regarding the release of the 12th Board Time Table. By checking this page, students can access complete details about SSC/HSC Exam Time Tables for 2024.
        </p> 
          <a
            href="https://cemca.org.in/board-time-table/"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://cemca.org.in/10th-board-time-table/"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find 10th Board Time table 2024 here.</p>
        </a>

        <a
          href="https://cemca.org.in/12th-board-time-table/"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>12th Board Time table 2024</p>
        </a>

        <a
          href="https://cemca.org.in/category/time-table/board-time-table/"
        >
          <h2>
            Board time table 2024 <span>-&gt;</span>
          </h2>
          <p>board time table 2024</p>
        </a>

        <a
          href="https://cemca.org.in/category/time-table/university-time-table/"
        >
          <h2>
            University date sheer <span>-&gt;</span>
          </h2>
          <p>
            Find Uni. exam dates.
          </p>
        </a>
      </div>
    </main>
  )
}
