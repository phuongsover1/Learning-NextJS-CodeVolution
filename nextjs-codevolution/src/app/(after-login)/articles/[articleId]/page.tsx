import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  let displayLanguage;
  switch (lang) {
    case "fr":
      displayLanguage = "France";
      break;
    case "es":
      displayLanguage = "Espanol";
      break;
    case "en":
    default:
      displayLanguage = "English";
      break;
  }
  return (
    <div>
      <h2 className="text-4xl">News article id : {articleId}</h2>
      <p>Reading in language {displayLanguage}</p>
      <h3 className="text-2xl">Reading in Language: </h3>
      <ul className="list-disc">
        <li>
          <Link className="font-bold" href={`/articles/${articleId}?lang=en`}>
            English
          </Link>
        </li>
        <li>
          <Link className="font-bold" href={`/articles/${articleId}?lang=fr`}>
            France
          </Link>
        </li>
      </ul>
      <div>
        <Link className="text-xl font-semibold" href="/articles">
          Back to List of Article
        </Link>
      </div>
    </div>
  );
}
