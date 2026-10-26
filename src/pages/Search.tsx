import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Search as SearchIcon, ArrowRight, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchIndex } from "@/data/searchIndex";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  // Sync local query when URL param changes
  useEffect(() => {
    const urlQ = searchParams.get("q") || "";
    if (urlQ !== query) setQuery(urlQ);
  }, [searchParams]);

  // Instant search: update URL params as user types (debounced)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const trimmed = query.trim();
      if (trimmed && trimmed !== (searchParams.get("q") || "")) {
        setSearchParams({ q: trimmed }, { replace: true });
      } else if (!trimmed && searchParams.get("q")) {
        setSearchParams({}, { replace: true });
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  const activeQuery = searchParams.get("q") || "";

  const results = useMemo(() => {
    const q = activeQuery.toLowerCase().trim();
    if (!q || q.length < 2) return [];

    return searchIndex
      .filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) ||
          entry.content.toLowerCase().includes(q)
      )
      .map((entry) => {
        const contentLower = entry.content.toLowerCase();
        const idx = contentLower.indexOf(q);
        let snippet = "";
        if (idx !== -1) {
          const start = Math.max(0, idx - 60);
          const end = Math.min(entry.content.length, idx + q.length + 60);
          snippet =
            (start > 0 ? "..." : "") +
            entry.content.substring(start, end) +
            (end < entry.content.length ? "..." : "");
        }
        return { ...entry, snippet };
      });
  }, [activeQuery]);

  // Build correct URL: ?q= must come BEFORE #hash
  const buildResultUrl = (path: string) => {
    const [basePath, hash] = path.split("#");
    return (
      basePath +
      "?q=" +
      encodeURIComponent(activeQuery) +
      (hash ? "#" + hash : "")
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const handleResultClick = (path: string) => {
    const url = buildResultUrl(path);
    navigate(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Search Results
          </h1>

          {/* Search bar */}
          <form onSubmit={handleSubmit} className="mb-10">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search across all pages..."
                className="pl-12 pr-4 h-12 text-base rounded-full border-border/60 bg-card focus-visible:ring-primary/50"
                autoFocus
              />
            </div>
          </form>

          {/* Results */}
          {activeQuery && (
            <p className="text-sm text-muted-foreground mb-6">
              {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
              <span className="font-semibold text-foreground">
                "{activeQuery}"
              </span>
            </p>
          )}

          <div className="space-y-4">
            {results.map((result) => (
              <button
                key={result.path}
                onClick={() => handleResultClick(result.path)}
                className="group block w-full text-left rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="h-4 w-4 text-primary shrink-0" />
                      {result.section && (
                        <span className="text-xs font-medium text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full">
                          {result.section}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {result.title}
                    </h3>
                    {result.snippet && (
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {result.snippet}
                      </p>
                    )}
                    <span className="mt-2 inline-block text-xs text-muted-foreground/60">
                      {result.path}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
              </button>
            ))}

            {activeQuery && results.length === 0 && (
              <div className="text-center py-16">
                <SearchIcon className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  No results found
                </p>
                <p className="text-sm text-muted-foreground">
                  Try different keywords or check your spelling
                </p>
              </div>
            )}

            {!activeQuery && (
              <div className="text-center py-16">
                <SearchIcon className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  Start searching
                </p>
                <p className="text-sm text-muted-foreground">
                  Type a keyword to search across all pages
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
