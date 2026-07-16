import { useState } from "react";
import { BookText } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { blogPosts, upcomingBlogPosts } from "../data/portfolio";

export function Blog() {
  const [activeSlug, setActiveSlug] = useState(blogPosts[0]?.slug);
  const activePost = blogPosts.find((post) => post.slug === activeSlug) ?? blogPosts[0];

  return (
    <section id="blog" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Product writing"
          title="How I approach product decisions and execution."
          description="Published notes on enterprise products, AI-assisted workflows, customer operations, and launch discipline."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-4">
            {blogPosts.map((post) => (
              <Card key={post.slug} className={activePost.slug === post.slug ? "border-teal-500 shadow-soft" : "border-slate-200"}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <BookText className="mt-1 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                    <div>
                      <CardTitle>{post.title}</CardTitle>
                      <p className="mt-2 text-sm text-slate-500">{post.date} / {post.readingTime}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{post.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <Button className="mt-5" onClick={() => setActiveSlug(post.slug)} variant="secondary">
                    Read article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <Badge tone="success">Product note</Badge>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-950">{activePost.title}</h3>
            <p className="mt-3 text-sm text-slate-500">{activePost.date} / {activePost.readingTime}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {activePost.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              {activePost.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-10">
          <div className="max-w-3xl">
            <Badge tone="neutral">Upcoming writing</Badge>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Topics in the writing pipeline</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The next articles will focus on launch decisions, customer support signals, and enterprise administrator workflows.
            </p>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {upcomingBlogPosts.map((post) => (
              <Card key={post.title} className="border-slate-200 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle>{post.title}</CardTitle>
                    <Badge tone={post.status === "Coming next" ? "success" : "neutral"}>{post.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{post.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
