import data from "@/data/posts.json";
import PostsSkeleton from "@/components/PostsSkeleton";
import PostsWithSearch from "@/components/PostsWithSearch";
import { Suspense } from "react";

async function BlogPosts() {
  return <PostsWithSearch posts={data.posts} />;
}

export default function BlogPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">my blog.</h1>

      <Suspense fallback={<PostsSkeleton rows={6} showControls />}>
        <BlogPosts />
      </Suspense>
    </article>
  );
}
