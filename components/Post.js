// import Link from "next/link";

// post で受け取った、 id と title を出力。
// id と title は : で連結。
const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      {/* <Link href={`/posts/${post.id}`}> */}
      <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
        {post.title}
      </span>
      {/* </Link> */}
    </div>
  );
};

export default Post;
