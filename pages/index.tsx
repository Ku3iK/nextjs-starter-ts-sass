import Head from 'next/head';
import Image from 'next/image';
import styles from '../src/styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.homepage}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.homepage__content}>
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.js</a> starter!
                </h1>

                <p>This starter is using TypeScript and Sass</p>

                <p>
                    Get started by editing <code>pages/index.tsx</code>
                </p>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
                <p>&</p>
                <a href="https://github.com/Ku3iK" target="_blank" rel="noreferrer">
                    <span>
                        <Image src="/github-brands.svg" alt="GitHhub Logo" width={20} height={20} />
                    </span>
                    Ku3iK
                </a>
            </footer>
        </div>
    );
}
