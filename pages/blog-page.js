import Layout from "../components/Layout";

// Post コンポーネントをインポート。
import Post from "../components/Post";

// json 形式のブログデータをインポート。
import { getAllPostsData } from "../lib/posts";

// ブログデータを props で受け取る。
// 受け取った posts のデータを map で展開して、一覧を取得。
// post が存在する場合 ( && ) 、map で一つづつ展開し、
// Post コンポーネントに、 post id と object をわたす。
export default function Blog({ posts }) {
  return (
    // JSONPlaceholder
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

// SSG build 時に、getAllPostData を実行し、API からデータを取得。
// build 時に、サーバーサイドで１回だけ実行される処理。
// 取得したposts を props の形で return する。
export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
