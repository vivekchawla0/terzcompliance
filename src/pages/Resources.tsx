import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Filter,
  Flame,
  Loader2,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { resources as staticResources } from "@/data/resources";
import type { ResourceItem } from "@/data/resources";
import { useNewsArticles } from "@/hooks/useNewsArticles";

type FilterKey = "all" | "news" | "blog";

const filterButtons: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "news", label: "News" },
  { key: "blog", label: "Blogs" },
];

const trendingTopics = [
  "Medical Devices",
  "Market Entry",
  "Digital Compliance",
  "Audit Ready",
];

const Resources = () => {
  const [activeTab, setActiveTab] = useState<FilterKey>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCompressed, setIsCompressed] = useState(false);

  const { data: apiNews = [], isLoading: isNewsLoading } = useNewsArticles();

  // Merge static + dynamic, deduplicate by slug
  const allResources = useMemo(() => {
    const merged: ResourceItem[] = [...staticResources];
    const existingSlugs = new Set(staticResources.map((r) => r.slug));
    for (const article of apiNews) {
      if (!existingSlugs.has(article.slug)) {
        merged.push(article);
      }
    }
    // Sort by date descending
    return merged.sort((a, b) => new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime());
  }, [apiNews]);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompressed(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredResources = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();
    const filterByType =
      activeTab === "all"
        ? allResources
        : allResources.filter((item) => item.type === activeTab);

    if (!normalizedQuery) {
      return filterByType;
    }

    return filterByType.filter((item) => {
      const haystack = [
        item.title,
        item.excerpt,
        item.category,
        item.author,
        item.tags.join(" "),
        item.content.map((block) => `${block.heading ?? ""} ${block.body}`).join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [activeTab, searchTerm, allResources]);

  const resultLabel = useMemo(() => {
    const count = filteredResources.length;
    if (count === 0) return "No matches yet";
    if (count === 1) return "1 resource";
    return `${count} resources`;
  }, [filteredResources.length]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const formatDate = (isoDate: string) => {
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(isoDate));
  };

  const getTypeStyles = (type: "news" | "blog") => {
    if (type === "news") {
      return {
        pill: "bg-sky-500/15 text-sky-500 border border-sky-500/30",
        accent: "from-sky-500/10 via-sky-400/5 to-transparent",
      };
    }
    return {
      pill: "bg-fuchsia-500/15 text-fuchsia-500 border border-fuchsia-500/30",
      accent: "from-fuchsia-500/10 via-fuchsia-400/5 to-transparent",
    };
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden p-0">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] animate-float-slow" />
          <div className="absolute bottom-20 right-[-10%] h-[600px] w-[600px] rounded-full bg-sky-400/20 blur-[100px] animate-float-delayed" />
          <div className="absolute left-[-15%] top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-400/15 blur-[100px]" />
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_center,hsla(209,53%,30%,0.4)_0%,transparent_50%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-8 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-6 py-2 text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Terz Knowledge Center
            </Badge>
            <h1 className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
              Insights engineered to keep your compliance edge sharp
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Dive into curated news and long-form analysis from our regulatory experts.
              Every story is designed to make your next decision faster and more confident.
            </p>
            
            {/* Stats Cards */}
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <div className="text-4xl font-bold text-primary">{allResources.length}</div>
                <div className="mt-2 text-sm text-muted-foreground">Expert Articles</div>
              </div>
              <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="mt-2 text-sm text-muted-foreground">Industry Topics</div>
              </div>
              <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <div className="text-4xl font-bold text-primary">Weekly</div>
                <div className="mt-2 text-sm text-muted-foreground">Fresh Updates</div>
              </div>
            </div>
          </div>

          {/* Trending & Recent Cards */}
          <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-2">
            <div className="group rounded-3xl border border-border/60 bg-card/70 p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-center gap-3 text-primary">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Trending Topics</span>
              </div>
              <Separator className="my-5 bg-border/50" />
              <div className="flex flex-wrap gap-3">
                {trendingTopics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => handleSearchChange(topic)}
                    className="group/btn flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                  >
                    <span>{topic}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
            <div className="group rounded-3xl border border-border/60 bg-card/70 p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-center gap-3 text-primary">
                <Flame className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Fresh This Week</span>
              </div>
              <Separator className="my-5 bg-border/50" />
              <ul className="space-y-4">
                {isNewsLoading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <li key={i} className="flex items-center justify-between gap-4">
                      <Skeleton className="h-4 flex-1" />
                      <Skeleton className="h-3 w-20" />
                    </li>
                  ))
                ) : (
                  allResources.slice(0, 3).map((item) => (
                    <li key={item.slug} className="group/item flex items-center justify-between gap-4 transition-colors">
                      <span className="line-clamp-1 text-sm font-medium text-foreground group-hover/item:text-primary">{item.title}</span>
                      <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {formatDate(item.publishedOn)}
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Sticky Search & Filter Bar */}
      <div
        className={cn(
          "sticky top-16 z-40 mx-auto w-full transition-all duration-500 ease-out",
          isCompressed ? "shadow-lg" : "-mt-12 py-8"
        )}
      >
        <div className={cn(
          "border-b backdrop-blur-xl transition-all duration-500",
          isCompressed 
            ? "border-border/40 bg-background/95" 
            : "border-transparent bg-transparent"
        )}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                "mx-auto overflow-hidden transition-all duration-500",
                isCompressed 
                  ? "max-w-full rounded-none border-0 bg-transparent py-3" 
                  : "max-w-5xl rounded-[2rem] border border-border/60 bg-card/95 py-8 shadow-2xl shadow-primary/20"
              )}
            >
              <div className={cn("px-6 sm:px-8", isCompressed && "px-0")}>
                {/* Main Content Row */}
                <div className={cn(
                  "flex items-center gap-4 transition-all duration-500",
                  isCompressed 
                    ? "flex-col gap-3" 
                    : "flex-col gap-6"
                )}>
                  
                  {/* Knowledge Centre Section */}
                  <div className={cn(
                    "flex items-center gap-3 transition-all duration-500",
                    isCompressed ? "w-full" : "w-full"
                  )}>
                    <div className={cn(
                      "flex shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner shadow-primary/20 transition-all duration-500",
                      isCompressed ? "h-8 w-8" : "h-14 w-14"
                    )}>
                      <Search className={cn("transition-all duration-500", isCompressed ? "h-4 w-4" : "h-7 w-7")} />
                    </div>
                    <div className={cn("min-w-0 transition-all duration-500")}>
                      <p className={cn(
                        "font-semibold uppercase tracking-[0.3em] text-primary/70 transition-all duration-500",
                        isCompressed ? "text-[9px]" : "text-xs"
                      )}>
                        Knowledge Centre
                      </p>
                      {!isCompressed && (
                        <h2 className="mt-2 text-2xl font-semibold text-foreground transition-all duration-500">
                          Search across news, explainers, and deep dives
                        </h2>
                      )}
                    </div>
                  </div>

                  {/* Search Box + Filter Buttons Row */}
                  <div className={cn(
                    "flex items-center gap-3 transition-all duration-500",
                    isCompressed ? "w-full" : "w-full flex-col gap-6"
                  )}>
                    {/* Search Box */}
                    <div className={cn(
                      "relative transition-all duration-500",
                      isCompressed ? "flex-1 min-w-[150px]" : "w-full"
                    )}>
                      <Search className={cn(
                        "absolute top-1/2 -translate-y-1/2 text-muted-foreground transition-all duration-500",
                        isCompressed ? "left-3 h-4 w-4" : "left-5 h-5 w-5"
                      )} />
                      <Input
                        value={searchTerm}
                        onChange={(event) => handleSearchChange(event.target.value)}
                        placeholder={isCompressed ? "Search..." : "Search by title, topic, or author"}
                        className={cn(
                          "rounded-full border-border bg-background shadow-inner shadow-primary/5 transition-all duration-500 focus:border-primary focus:shadow-lg focus:shadow-primary/10",
                          isCompressed 
                            ? "h-9 pl-9 pr-4 text-sm" 
                            : "h-16 pl-14 pr-6 text-base"
                        )}
                      />
                    </div>

                    {/* Filter Buttons */}
                    <div className={cn(
                      "flex items-center gap-2 transition-all duration-500",
                      isCompressed ? "shrink-0" : "w-full justify-center"
                    )}>
                      <Filter className={cn(
                        "text-muted-foreground transition-all duration-500",
                        isCompressed ? "h-3.5 w-3.5" : "h-4 w-4"
                      )} />
                      {filterButtons.map((button) => (
                        <Button
                          key={button.key}
                          variant={activeTab === button.key ? "default" : "outline"}
                          size={isCompressed ? "sm" : "default"}
                          className={cn(
                            "rounded-full border-transparent font-medium transition-all duration-300",
                            isCompressed ? "px-3 py-1 text-xs" : "px-6 py-2 text-sm",
                            activeTab === button.key
                              ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                              : "border-border/50 bg-card hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                          )}
                          onClick={() => setActiveTab(button.key)}
                        >
                          {button.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Result Label (only when not compressed) */}
                {!isCompressed && (
                  <p className="mt-3 text-center text-xs text-muted-foreground transition-all duration-500">
                    {resultLabel} - Filters update in real time as you type.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <section className="relative z-20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading indicator */}
          {isNewsLoading && (
            <div className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
              <span>Fetching latest regulatory news…</span>
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {/* Skeleton cards while loading */}
            {isNewsLoading && filteredResources.length === 0 &&
              Array.from({ length: 6 }).map((_, i) => (
                <Card key={`skel-${i}`} className="rounded-[28px] border border-border/60 bg-card/70 p-6">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="mt-5 h-7 w-3/4" />
                  <Skeleton className="mt-3 h-5 w-full" />
                  <Skeleton className="mt-2 h-5 w-2/3" />
                  <div className="mt-6 flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-5 w-5 rounded" />
                  </div>
                </Card>
              ))
            }

            {filteredResources.map((resource) => {
              const { pill, accent } = getTypeStyles(resource.type);
              const isApiArticle = resource.slug.startsWith("api-");

              return (
                <Card
                  key={resource.slug}
                  className="group relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-6 shadow-[0_24px_60px_hsla(209,53%,23%,0.15)] transition duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_40px_90px_hsla(209,53%,23%,0.25)]"
                >
                  <div className={cn("pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100", `bg-gradient-to-br ${accent}`)} />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className={cn("inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]", pill)}>
                        {resource.type === "news" ? "News" : "Blog"}
                        {isApiArticle && (
                          <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" title="Live from API" />
                        )}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {formatDate(resource.publishedOn)}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {resource.title}
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                      {resource.excerpt}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-8 flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                          {resource.category}
                        </span>
                        <span>{resource.readTime}</span>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                    </div>
                    <Link
                      to={`/resources/${resource.type}/${resource.slug}`}
                      className="absolute inset-0"
                      aria-label={`Open ${resource.title}`}
                    />
                  </div>
                </Card>
              );
            })}
          </div>

          {!isNewsLoading && filteredResources.length === 0 && (
            <div className="mt-20 text-center">
              <p className="text-lg text-muted-foreground">
                Nothing matched your filters yet. Try a different keyword or explore another format.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden bg-primary/5 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(209,53%,30%,0.12),transparent_55%)]" />
        <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-primary/20 bg-background/90 p-10 text-center shadow-[0_32px_80px_hsla(209,53%,26%,0.18)]">
            <Sparkles className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-6 text-3xl font-semibold">Stay ahead of every compliance move</h2>
            <p className="mt-4 text-muted-foreground">
              Join 4,000+ professionals receiving our weekly regulatory signal report. No spam - just precise insights you can action immediately.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Input
                type="email"
                placeholder="Enter your work email"
                className="h-12 w-full rounded-full border border-primary/20 bg-background/60 shadow-inner shadow-primary/10 sm:max-w-md"
              />
              <Button className="h-12 rounded-full px-8 text-base shadow-lg shadow-primary/40">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resources;
