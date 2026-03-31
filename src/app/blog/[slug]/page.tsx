import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPost } from "@/lib/content";
import { MDXContent } from "@/components/content/mdx-content";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Dr. Jeff Bullock"],
      url: `https://prismaiconsultants.com/blog/${slug}`,
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Dr. Jeff Bullock",
      jobTitle: "AI Systems Architect & CEO",
      url: "https://drjeffbullock.com",
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "PRISM AI Consultants",
      url: "https://prismaiconsultants.com",
    },
    mainEntityOfPage: `https://prismaiconsultants.com/blog/${slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Post Header */}
      <Section className="pb-0">
        <Container size="md">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Blog
          </Link>

          <div className="mt-8">
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                By Dr. Jeff Bullock
              </span>
              <span>&middot;</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Post Content */}
      <Section className="pt-8">
        <Container size="md">
          <MDXContent source={post.content} />
        </Container>
      </Section>

      {/* Back Link Footer */}
      <Section className="border-t border-border pt-8 pb-16">
        <Container size="md">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all posts
          </Link>
        </Container>
      </Section>
    </>
  );
}
