import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/blog/${article.slug}`} className="block">
      <div className="bg-[#23262B] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col border border-[#2A2D33] cursor-pointer">
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img 
            src={article.cover} 
            alt={article.title} 
            className="w-full h-48 object-contain bg-[#181B20] transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <span className="text-sm text-gray-400 mb-2">{new Date(article.date).toLocaleDateString("fr-FR")}</span>
          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors duration-200">{article.title}</h2>
          <p className="text-gray-300 flex-1 line-clamp-3">{article.excerpt}</p>
          <div className="mt-4 text-blue-500 font-semibold group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
            Lire l'article
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 