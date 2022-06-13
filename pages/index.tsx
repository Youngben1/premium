import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Header from "../components/Header"
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
};

const Home = ({posts}: Props) => {
  console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Premium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header />

      <div className="flex justify-between items-center bg-red-600 border-y border-black py-10 lg:py-0 ">
        <div className="px-10 space-y-5 py-5">
          <h1 className="text-6xl max-w-xl font-sans">
            <span className="underline decoration-black decoration-4">Premium</span> is a place to write, read and catch up</h1>
          <h2>
            It is easy and free, you can post your thoughts and link up with Ogees around the world
          </h2>
        </div>

        <img className="hidden md:inline-flex h-15 lg:h-full" src="data:image/png;base64,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" alt="banner" />
      </div>


      {/* Post */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`} >
          <div className="border rounded-lg overflow-hidden group cursor-pointer">
            <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt=""/>
            <div className='flex justify-between p-5 bg-white'>
              <div>
                <p className="text-lg font-bold" >{post.title}</p>
                <p className="text-xs">{post.description} by {post.author.name}</p>
                
              </div>
              <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()} alt="" />
            </div>
          </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query =  `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
};
