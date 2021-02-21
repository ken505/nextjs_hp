// サーバーサイドの fetch なので、 node-fetch から import しておく。
import fetch from "node-fetch";

// ブログデータを fetch する JSONPlaceholder のエンドポイントを定義。
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// async と await で処理を同期化。
// エンドポイントからデータを取得するのを待つ。
// 取得したデータを const res に格納。
// res を json 形式に変換し、 posts に格納し、それを return
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

// fetxh で JSONPlaceholder のエンドポイントにアクセス。
// 結果を posts に格納。
// その結果を map で展開し、 id の要素だけを取り出し、 id 一覧を生成。
// getStaticPaths は フィールドの名前に params をつけるルール。
// フィールドが何かはわからん。
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 特定の id を使ってデータベースから build 時にデータを取得。
// 取得したい Blog の id を引数で受け取る。
// エンドポイントの末尾に id を埋め込み、データを fetch で取得。
// post でデータを return
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();
  return post;
}


