import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="NextJS Pokedex">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
    </Layout>
  )
}
