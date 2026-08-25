import 'server-only';

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Asciidoctor from 'asciidoctor';

const asciidoctor = Asciidoctor();
const postsDirectory = join(process.cwd(), 'content/posts/adoc');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    author?: string;
    tags?: string[];
    draft?: boolean;
    content: string;
}

export function getPostSlugs(): string[] {
    return readdirSync(postsDirectory).filter(file => file.endsWith('.adoc'));
}

export function getPostBySlug(slug: string): BlogPost {
    const realSlug = slug.replace(/\.adoc$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.adoc`);
    const fileContents = readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    const html = asciidoctor.convert(content, {
        safe: 'safe',
        attributes: { showtitle: true },
    }) as string;

    return {
        slug: realSlug,
        title: data.title || realSlug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt,
        author: data.author,
        tags: data.tags,
        draft: data.draft ?? false,
        content: html,
    };
}

export function getAllPosts(): BlogPost[] {
    const slugs = getPostSlugs();
    return slugs
        .map(slug => getPostBySlug(slug))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}