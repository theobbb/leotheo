import styles from '../styles/Home.module.css';

import connectDB from '../utils/connectDB';
import Test from '../models/testModel';

import Layout from "@layouts/main";

/*
export const getServerSideProps = async () => {

  try {
    await connectDB();
    const tests = await Test.find();

    return {
      props: { 
        tests: JSON.parse(JSON.stringify(tests)),
      }
    }
  } catch (error) {
      console.log(error);
      return {
        notFound: true
      }
  }  
}*/



export default function Home() { 

  const createTest = async () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const res = await fetch('/api/test/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Test ${randomNum}`,
        email: `test${randomNum}@test.com`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={styles.container}>


      <Layout>


        


      {/*tests.map((test) => (
                <TableRow
                  key={test.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {test.name}
                  </TableCell>
                  <TableCell align="right">{test.email}</TableCell>
                </TableRow>
              ))*/}



        <main>
        <button onClick={createTest}>Create Test</button>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            leotheo
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
          <h1>fdfd</h1>
          <h1>fdfd</h1>
          <h1>fdfd</h1>
          <h1>fdfd</h1>
          <h1>fdfd</h1>
          <h1>fdfd</h1>
          <h1>fdfd</h1>
          <h1>fdfd</h1>
          
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </footer>

      </Layout>
    </div>
  )
}
