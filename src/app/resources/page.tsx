import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/content/blog-card";

export const metadata: Metadata = {
  title: "Resources | PRISM AI Consultants",
  description:
    "Books, games, blog posts, and community resources from PRISM AI Consultants. Learn how to build real AI systems for your business.",
};

const books = [
  {
    title: "AI-Powered: A Non-Technical Leader's Playbook",
    description:
      "The practical guide for business leaders who want to understand and implement AI without needing a computer science degree.",
    url: "https://www.amazon.com/dp/B0DQ5K2QXC",
    badge: "Book",
  },
  {
    title: "AI-Powered: The Sequel",
    description:
      "Advanced strategies for leaders who are ready to go deeper. Covers autonomous agents, system architecture, and scaling AI operations.",
    url: "https://www.amazon.com/dp/B0F1JL5KP7",
    badge: "Book",
  },
  {
    title: "The AI Whisperer",
    description:
      "Explore the full library of books by Dr. Jeff Bullock, covering AI, business strategy, and technology leadership.",
    url: "https://drjeffbullock.com/books",
    badge: "All Books",
  },
];

const games = [
  {
    title: "A Prompt's Tale",
    description:
      "An interactive narrative game that puts you inside the world of AI prompting. Learn prompt engineering through gameplay.",
    url: "https://aprompts-tale.prismaiconsultants.com",
    badge: "Game",
  },
  {
    title: "Pharmageddon",
    description:
      "A fast-paced browser game built with AI-assisted development. Survive the pharmaceutical apocalypse.",
    url: "https://pharmageddon-game.prismaiconsultants.com",
    badge: "Game",
  },
];

export default function ResourcesPage() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <>
      <PageHeader
        title="Resources"
        description="Books, games, community, and insights from the PRISM team."
      />

      {/* Latest from PRISM */}
      <Section>
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Latest from PRISM
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Thoughts on AI systems, automation, and what actually works in
            production.
          </p>
          {posts.length > 0 ? (
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            <p className="mt-8 text-muted-foreground">
              Blog posts coming soon.
            </p>
          )}
        </Container>
      </Section>

      {/* Books */}
      <Section className="border-t border-border bg-muted/30">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight">Books</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Written by Dr. Jeff Bullock. Practical AI knowledge for leaders who
            build.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <Card key={book.title} href={book.url}>
                <CardHeader>
                  <Badge variant="accent">{book.badge}</Badge>
                  <h3 className="mt-3 text-lg font-bold text-foreground">
                    {book.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {book.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Games */}
      <Section className="border-t border-border">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight">Games</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Interactive experiences built with AI-assisted development.
            Playable in your browser.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {games.map((game) => (
              <Card key={game.title} href={game.url}>
                <CardHeader>
                  <Badge variant="outline">{game.badge}</Badge>
                  <h3 className="mt-3 text-lg font-bold text-foreground">
                    {game.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {game.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Community */}
      <Section className="border-t border-border bg-muted/30">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight">Community</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Connect with business owners and professionals who are building
            with AI.
          </p>
          <div className="mt-8 max-w-lg">
            <Card href="https://www.skool.com/prism-ai-consultants">
              <CardHeader>
                <Badge variant="accent">Free Community</Badge>
                <h3 className="mt-3 text-lg font-bold text-foreground">
                  PRISM AI University
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Free community on Skool for business owners learning AI.
                  Templates, frameworks, live workshops, and a network of
                  professionals who are building with AI right now.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
