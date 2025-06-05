import React from "react";
import articles from "./blog.json";
import ArticleCard from "../../components/ArticleCard";
import { Helmet } from "react-helmet";

export default function BlogList() {
  return (
    <>
      <Helmet>
        <title>Blog - NovaWeb Digital</title>
        <meta name="description" content="Découvrez nos articles sur le développement web, le SEO, la performance et l'actualité digitale." />
      </Helmet>
      <main className="bg-[#181B20] min-h-screen text-white font-sans pb-12">
        <section className="max-w-4xl mx-auto text-center py-16 px-4">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-300">Découvrez nos derniers articles sur le développement web, le SEO et plus encore.</p>
        </section>
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </section>
      </main>
    </>
  );
} 