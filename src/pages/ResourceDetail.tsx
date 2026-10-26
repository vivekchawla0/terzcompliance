import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock, ExternalLink, Share2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { resources } from "@/data/resources";
import { useNewsArticles } from "@/hooks/useNewsArticles";

const ResourceDetail = () => {
  const params = useParams<{ type: string; slug: string }>();
  const navigate = useNavigate();
  const { data: apiNews = [] } = useNewsArticles();

  const allResources = useMemo(() => {
    const merged = [...resources];
    const existingSlugs = new Set(resources.map((r) => r.slug));
    for (const article of apiNews) {
      if (!existingSlugs.has(article.slug)) merged.push(article);
    }
    return merged;
  }, [apiNews]);

  const resource = useMemo(() => {
    return allResources.find(
      (item) => item.slug === params.slug && item.type === params.type
    );
  }, [params.slug, params.type, allResources]);

  const isApiArticle = resource?.slug.startsWith("api-") ?? false;
  const sourceUrl = isApiArticle ? (resource as any)?.sourceUrl : undefined;

  const formatLongDate = (isoDate: string) => {
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(isoDate));
  };

  if (!resource) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="text-3xl font-semibold">Resource not found</h1>
        <p className="max-w-xl text-muted-foreground">
          The article you are looking for may have been moved. Explore the knowledge center to find the latest updates.
        </p>
        <Button onClick={() => navigate("/resources")}>Back to resources</Button>
      </div>
    );
  }

  const isNews = resource.type === "news";
  const heroGradient = isNews
    ? "from-brand-50 via-brand-100 to-brand-200"
    : "from-accent-100 via-brand-100 to-accent-200";

  const accentBorder = isNews
    ? "border-brand-400/40 bg-brand-100/70"
    : "border-accent-500/35 bg-accent-100/70";

  const accentText = isNews ? "text-brand-700" : "text-accent-700";

  const formattedDate = formatLongDate(resource.publishedOn);

  const recommendations = allResources
    .filter((item) => item.type === resource.type && item.slug !== resource.slug)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-background text-foreground">
      <section className={cn("relative overflow-hidden pb-28 pt-32", `bg-gradient-to-br ${heroGradient}`)}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-24 h-80 w-80 rounded-full bg-brand-200/35 blur-3xl animate-float-slow" />
          <div className="absolute right-[-10%] top-32 h-96 w-96 rounded-full bg-accent-200/30 blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.12),transparent_55%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-4 py-2 text-sm text-foreground transition hover:border-primary/50 hover:bg-card"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back
          </button>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-6 text-heading">
              <Badge className="rounded-full border border-border/70 bg-card/80 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {isNews ? "News" : "Blog"}
              </Badge>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                {resource.title}
              </h1>
              <p className="text-lg text-muted-foreground">{resource.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span>
                  <strong className="font-semibold text-heading">{resource.author}</strong>
                  {` · ${resource.authorRole}`}
                </span>
                <Separator orientation="vertical" className="hidden h-5 bg-border/70 md:block" />
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {resource.readTime}
                </span>
                <Separator orientation="vertical" className="hidden h-5 bg-border/70 md:block" />
                <span>{formattedDate}</span>
              </div>
            </div>
            <Card className="w-full max-w-sm rounded-3xl border border-border/70 bg-card/85 p-6 text-foreground backdrop-blur-xl shadow-surface-lg">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Key takeaways
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {resource.takeaways.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 pb-20">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:px-8">
          <div>
            <Card className="rounded-[32px] border border-border/60 bg-card/90 p-10 shadow-[0_24px_80px_hsla(209,53%,23%,0.12)]">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                {resource.content.map((block) => (
                  <div key={`${block.heading ?? "paragraph"}-${block.body.slice(0, 20)}`} className="space-y-4">
                    {block.heading && <h2>{block.heading}</h2>}
                    <p>{block.body}</p>
                    {block.bulletPoints && (
                      <ul>
                        {block.bulletPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {block.quote && <blockquote>{block.quote}</blockquote>}
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full bg-muted px-4 py-1 text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                {isApiArticle && sourceUrl && (
                  <Button
                    variant="default"
                    className="rounded-full"
                    asChild
                  >
                    <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Read full article
                    </a>
                  </Button>
                )}
                <Button variant="outline" className="rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
                  <Share2 className="mr-2 h-4 w-4" /> Share update
                </Button>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <Card className={cn("rounded-3xl border bg-card/80 p-6 backdrop-blur-xl", accentBorder)}>
              <h3 className={cn("text-sm font-semibold uppercase tracking-[0.2em]", accentText)}>
                {isNews ? "Regulatory impact" : "Reader essentials"}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {isNews
                  ? "This update has immediate operational implications. Align your teams on the revised submission formats and ensure internal trackers reflect the new timelines."
                  : "Use this guide to facilitate workshops, build alignment across stakeholders, and accelerate execution for your 2025 roadmap."}
              </p>
              <Separator className="my-6" />
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="font-semibold text-foreground">Next recommended action</p>
                  <p className="mt-2 text-muted-foreground">
                    {isNews
                      ? "Download the latest compliance checklist and run a readiness audit before the policy goes live."
                      : "Host a 45-minute working session with stakeholders to convert the insights into action items."}
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="font-semibold text-foreground">Who should read this</p>
                  <p className="mt-2 text-muted-foreground">
                    {isNews
                      ? "Regulatory leads, operations heads, and compliance officers managing submissions in the affected category."
                      : "Strategy leaders, regulatory affairs teams, and cross-functional program managers."}
                  </p>
                </div>
              </div>
            </Card>

            {recommendations.length > 0 && (
              <Card className="rounded-3xl border border-border/60 bg-card/90 p-6 shadow-[0_20px_60px_hsla(209,53%,20%,0.15)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Continue reading
                </h3>
                <div className="mt-6 space-y-4">
                  {recommendations.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/resources/${item.type}/${item.slug}`}
                      className="group block rounded-2xl border border-transparent bg-muted/30 p-4 transition hover:border-primary/40 hover:bg-primary/10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {item.title}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{item.excerpt}</p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {formatLongDate(item.publishedOn)}
                      </p>
                    </Link>
                  ))}
                </div>
              </Card>
            )}
          </aside>
        </div>
      </section>
    </article>
  );
};

export default ResourceDetail;
