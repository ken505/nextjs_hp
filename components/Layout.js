import Head from "next/head";
import Link from "next/link";

// 各ページの全体をラップする。
// title のデフォルト値は HP by Nextjs
export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    // 大枠の div タグでコンテンツの中央寄せ フォントのカラー、サイズ、ファミリー指定
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      {/* タブのタイトル {title} は props で渡された値を動的に埋め込む。 */}
      <Head>
        <title>{title}</title>
      </Head>

      {/* nav バーの背景色と width: 100vw を指定。 */}
      <header className="bg-gray-800 w-screen">
        {/* ナビゲーションバー */}
        <nav className="bg-gray-800 w-screen">
          {/* nav 内 item 要素中央配置、paddingleft 、高さ指定。 */}
          <div className="flex items-center pl-8 h-14">
            {/* nav 内要素間のスペース指定。 */}
            <div className="flex space-x-4">
              {/* Next.js に用意されているリンクコンポーネント。 */}
              {/* 遷移先はフォルダ名に対応( Next.js の仕様 ) */}
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* children で受け取った値を main の中に埋め込む。 */}
      {/* スタイルは画面の央揃えを指定。 */}
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>

      {/*  */}
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          // a タグと img を横並び、縦方向中央寄せ指定。
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
