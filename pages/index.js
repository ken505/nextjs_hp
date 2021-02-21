// Layout をインポートし、 p タグをインポートした Layout タグで囲み、スタイリングする。

import Layout from "../components/Layout";

// Home の名前で export
export default function Home() {
  return (

    // ホーム画面のタブタイトル
    <Layout title="Ken's Home">

    {/* ホーム画面のテキスト */}
      <p className="text-4xl">Welcome to Ken's room</p>
    </Layout>
  );
}
