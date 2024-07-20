import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

const Posts = () => {
    const allPosts = getAllPosts();

    const morePosts = allPosts.slice(1, 9);
    return ( 
        <Container>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            <Link href={'/posts'}>More</Link>
        </Container>
     );
};

export default Posts;