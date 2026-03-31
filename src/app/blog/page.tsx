import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { BlogCard } from "@/components/content/blog-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI systems, automation pipelines, and building real technology for business. From the team that runs 34 autonomous agents in production.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <PageHeader
        title="PRISM AI Blog"
        description="Insights on AI systems, automation, and building real technology for business."
      />

      <Section>
        <Container>
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  slug={post.slug}
                  date={post.date}
                  tags={post.tags}
                  description={post.description}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-muted-foreground">
              Blog posts coming soon.
            </p>
          )}
        </Container>
      </Section>
    </>
  );
}
