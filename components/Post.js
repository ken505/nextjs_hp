import Link from "next/link";

// post で受け取った、 id と title を出力。
// id と title は : で連結。
const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}

      {/* Blog 一覧から個別ページへ飛ぶための Link コンポーネント */}
      {/* 遷移先は動的に変わる id を指定。 */}
      <Link href={`/posts/${post.id}`}>
      <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
        {post.title}
      </span>
      </Link>
    </div>
  );
};

export default Post;
