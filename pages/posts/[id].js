import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

// getStaticProps から props で渡された post を受け取って HTML を生成。
// post データがない場合は Loading... を表示。
export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }
  // 記事全体を Layout コンポーネントで囲う。
  // post データがある場合は、 id title body を出力。
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>

      {/* 詳細ページから Blog の一覧に戻るための Link コンポーネント */}
      {/* path はディレクトリ名 */}
      <Link href="/blog-page">
        {/* hero icon のスタイリング */}
        {/* ローワーキャメルケース等に変更し、記法を合わせること。 */}
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}

// build 時にAPI のエンドポイントにアクセスして、
// 必要な ID 一覧を取得する。
// fallback 存在しないアドレスへのアクセスがあった時の挙動設定。
// false は 404 の notfound を返す。
// true にすれば、動的に増えるコンテンツにも対応できる。
export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

// getPostData を実行して、取得したデータを props で返す。
// Post コンポーネントに渡して、静的サイトを構築する。
// あとは何言ってるか聞き取れなかった。 10 - 6:00
export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
