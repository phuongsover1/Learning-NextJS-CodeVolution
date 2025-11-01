import Link from "next/link";

const articles = ["article1", "article2"];
export default function Article() {
  return (
    <>
      <h1 className="text-2xl font-bold">List of Articles</h1>
      <ol className="list-decimal">
        {articles.map((ar) => (
          <li key={ar}>
            <Link href={`/articles/${ar}`}>{ar}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
