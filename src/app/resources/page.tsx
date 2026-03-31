import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/content/blog-card";

export const metadata: Metadata = {
  title: "Resources",
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
    title: "PRISM Studios Game Portfolio",
    description:
      "Six fully deployed browser games showcasing AI-assisted game development. Pharmageddon, District Zero, Objection Blaster, and more.",
    url: "https://prismstudios.app",
    badge: "Games",
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

      {/* AI-Generated Music */}
      <Section className="border-t border-border">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight">
            AI-Generated Music
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every track written, produced, and mixed using AI tools we build for
            clients. 2,500+ songs composed. These are a few favorites.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/Ibzr1ISmsF8"
                    title="ROI From AI - PRISM AI Consultants"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-sm font-bold text-foreground">ROI From AI</h3>
              <p className="text-xs text-muted-foreground">
                Business automation turned into a song.
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dEURY8SA4mM"
                    title="I Built an AI Agent and Gave It a Theme Song"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-sm font-bold text-foreground">I Built an AI Agent and Gave It a Theme Song</h3>
              <p className="text-xs text-muted-foreground">
                What happens when your AI agent gets its own soundtrack.
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/QW2ViZlS2WU"
                    title="Did It Get Done Though"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-sm font-bold text-foreground">Did It Get Done Though</h3>
              <p className="text-xs text-muted-foreground">
                The only question that matters. Execution over everything.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Interactive Demos */}
      <Section className="border-t border-border bg-muted/10">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Interactive Demos
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            AI-built applications you can try right now. Every line of code assisted by the same tools we deploy for clients.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-2xl">
            {games.map((game) => (
              <Card key={game.title} href={game.url}>
                <CardHeader>
                  <Badge variant="outline">Try It</Badge>
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
