import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map(post => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    let post;
    const { slug } = await params;

    try {
        post = getPostBySlug(slug);
    } catch {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-12">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                <div className="text-gray-600 mb-4">
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </time>
                    {post.author && <span> • {post.author}</span>}
                </div>

                {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-sm rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
