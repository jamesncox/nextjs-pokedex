import Layout from '../components/Layout'

export default function Home({pokemon}) {
  return (
    <Layout title="NextJS Pokedex">
        <h1 className="text-4xl mb-8 text-center">
          NextJS Pokedex
        </h1>
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const {results} = await res.json()
    const pokemon = results.map((result, index) => {
      const paddedId = ('00' + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return {
        ...result,
        image
      }
    })

    return {
      props: {pokemon}
    }
  } catch (err) {
    console.error(err)
  }

  return {
    props: {}
  }
}