// サーバーサイドの fetch なので、 node-fetch から import しておく。
import fetch from "node-fetch";

// ブログデータを fetch する json place holder のエンドポイントを定義。
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