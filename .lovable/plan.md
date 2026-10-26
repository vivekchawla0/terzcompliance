

## Fix Global Search Feature

### Problems Identified

1. **Static search index only** - Search only looks through a hardcoded `searchIndex` array with brief keyword strings, not actual page content. So most searches return no results or irrelevant ones.
2. **Broken navigation from results** - Result links append `?q=` to paths that contain `#` (e.g., `/services#medical-devices?q=term`), which breaks because the `?` must come before `#` in URLs. The browser treats everything after `#` as a fragment, so the query param is lost.
3. **No live DOM search** - The search doesn't scan actual rendered page text, so newly added content won't be searchable unless manually added to the index.

### Solution: Switch to Live DOM-Based Search

Instead of relying on a static index, the search will **scan actual rendered page content** at search time. This means any new content added to the site will automatically be searchable.

**Approach:**

**1. Rewrite Search Page (`src/pages/Search.tsx`)**
- Keep the static `searchIndex` as a **page directory** (maps titles to routes) but NOT as the search corpus
- When user searches, show results from the static index (for page-level matches) but the real value comes from navigating to pages and highlighting
- Fix URL construction: for paths with `#`, place `?q=` before the `#` (e.g., `/services?q=term#medical-devices`)
- Add instant filtering as user types (no need to press Enter)

**2. Fix Result Link URLs (`src/pages/Search.tsx`)**
- Split `result.path` on `#` and reconstruct as `basePath?q=query#hash` so navigation works correctly
- Ensure clicking a result actually navigates to the correct page and section

**3. Improve Search Index (`src/data/searchIndex.ts`)**
- Expand content strings with much more actual text from each page so the static search returns meaningful results
- This acts as a fallback and provides the "directory" of searchable pages

**4. Fix Highlight Hook (`src/hooks/useSearchHighlight.ts`)**
- Increase delay slightly for pages with lazy-loaded/animated content
- Handle hash-based navigation (services page sections that render on hash change)
- Strip `?q=` param from URL after highlighting is done (clean URL)

**5. Navbar search improvements (`src/components/Navbar.tsx`)**
- No structural changes needed, just ensure the form submits correctly

### Files to Edit
| File | Change |
|------|--------|
| `src/pages/Search.tsx` | Fix URL construction, add instant search, improve UX |
| `src/data/searchIndex.ts` | Expand content text significantly for better matching |
| `src/hooks/useSearchHighlight.ts` | Fix timing, handle hash routes, improve reliability |

### Technical Details
- URL fix: `const [basePath, hash] = result.path.split('#'); const url = basePath + '?q=' + encodeURIComponent(query) + (hash ? '#' + hash : '')`
- Instant search: remove form submit requirement, filter on every keystroke via `useEffect` syncing query state to URL params with debounce
- Highlight timing: increase to 1200ms for animated content, add MutationObserver fallback to re-highlight when new DOM nodes appear

