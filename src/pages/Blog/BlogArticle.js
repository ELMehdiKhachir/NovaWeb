import React from "react";
import { useParams, Link } from "react-router-dom";
import articles from "./blog.json";
import { Helmet } from "react-helmet";
import ArticleCard from "../../components/ArticleCard";

export default function BlogArticle() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <main className="bg-[#0f172a] min-h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Article introuvable</h1>
        <p className="mb-8">L'article que vous cherchez n'existe pas ou a été supprimé.</p>
        <Link to="/blog" className="text-blue-500 font-semibold hover:underline">Retour au blog</Link>
      </main>
    );
  }

  // Autres articles (hors article courant)
  const otherArticles = articles.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} - NovaWeb Digital</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>
      <main className="bg-[#181B20] min-h-screen text-white font-sans pb-12">
        <section className="max-w-3xl mx-auto py-16 px-4">
          <Link to="/blog" className="text-blue-500 hover:underline mb-6 inline-block">&larr; Retour au blog</Link>
          <img
  src={article.cover}
  alt={article.title}
  className="w-full h-64 object-contain rounded-xl mb-8 bg-[#0E1012]"
/>
<h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <span className="text-gray-400 text-sm mb-8 block">{new Date(article.date).toLocaleDateString("fr-FR")}</span>
          <div className="prose prose-invert max-w-none">
            {article.content.map((block, i) => {
              if (block.type === "paragraph") {
                return <p key={i}>{block.text}</p>;
              }
              if (block.type === "image") {
                return <img key={i} src={block.src} alt={block.alt} className="my-6 rounded-lg" />;
              }
              if (block.type === "heading") {
                return <h2 key={i}>{block.text}</h2>;
              }
              return null;
            })}
          </div>
        </section>
        {otherArticles.length > 0 && (
          <section className="max-w-4xl mx-auto mt-12 px-4">
            <h2 className="text-2xl font-bold mb-6">Autres articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherArticles.map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
} 