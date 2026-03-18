import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost } from "@/lib/types";

const contentDirectory = path.join(process.cwd(), "content");

export function getFiles(dir: string): string[] {
  const dirPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  return fs.readdirSync(dirPath).filter((file) => file.endsWith(".mdx"));
}

export function readFile(dir: string, filename: string) {
  const filePath = path.join(contentDirectory, dir, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getBlogPosts(): BlogPost[] {
  const files = getFiles("blog");

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const { data, content } = readFile("blog", filename);
    const stats = readingTime(content);

    return {
      title: data.title || "",
      slug,
      date: data.date || "",
      tags: data.tags || [],
      description: data.description || "",
      featured: data.featured || false,
      coverImage: data.coverImage || undefined,
      readingTime: stats.text,
      content,
    } as BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | null {
  const filename = `${slug}.mdx`;
  const filePath = path.join(contentDirectory, "blog", filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const { data, content } = readFile("blog", filename);
  const stats = readingTime(content);

  return {
    title: data.title || "",
    slug,
    date: data.date || "",
    tags: data.tags || [],
    description: data.description || "",
    featured: data.featured || false,
    coverImage: data.coverImage || undefined,
    readingTime: stats.text,
    content,
  } as BlogPost;
}
