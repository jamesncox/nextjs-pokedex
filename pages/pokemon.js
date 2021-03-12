import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Pokemon({pokeman}) {
    console.log(pokeman)

    return (
        <Layout title={pokeman.name}>
            <h1 className="text-4xl mb-2 text-center capitalize"></h1>
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeman = await res.json();
        const paddedId = ('00' + id).slice(-3);
        pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return {
            props: { pokeman },
        };
    } catch (err) {
        console.error(err);
    }
}