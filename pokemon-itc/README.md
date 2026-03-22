# Pokemon Next.js App (IT Consultis Assessment)

## Tech Stack
- **Next.js (App Router)** - Modern React framework with server components and client-side routing
- **TypeScript (strict)** - Type-safe development with strict type checking
- **TanStack Query** - Powerful data fetching and caching library
- **TailwindCSS** - Utility-first CSS framework for rapid UI development

## Architecture
- **Feature-Sliced Design** - Organized code by business features with clear boundaries
- **Separation of Concerns** - Distinct layers for UI, business logic, and data access
- **Atomic Design** - Components organized as atoms, molecules, and organisms

## Key Focus
This project demonstrates understanding of:
- Server vs Client Components
- Data fetching strategies
- Clean and scalable architecture

## Implementation Details

### Data Fetching Strategy

#### Server-Side Pagination (All Pokemon)
- Uses TanStack Query for efficient data fetching and caching
- Implements server-side pagination with configurable `offset` and `limit`
- Cache strategy: 5-minute stale time for optimal performance
- Error handling with user-friendly fallbacks

#### Client-Side Pagination (Type-Filtered Pokemon)
- Fetches all Pokemon of selected types in parallel using `Promise.all()`
- Deduplicates results using custom utility function
- Implements client-side pagination for filtered results
- Cache strategy: 10-minute stale time for type data

### Component Architecture

#### Atoms (Basic UI Elements)
- `PokemonCard` - Individual Pokemon display with error handling
- `PokemonTypes` - Type selection interface with multi-select
- `PaginationControls` - Reusable pagination component
- `PokemonCardSkeleton` - Loading state placeholders

#### Molecules (Composite UI Elements)
- `PokemonListAll` - Server-paginated Pokemon list
- `PokemonListFiltered` - Client-paginated filtered list

#### Organisms (Complex UI Sections)
- `PokemonList` - Main container with routing logic

### Custom Hooks

#### `usePokemons` Hook
- Centralized data fetching logic
- Manages multiple query states (types, all Pokemon, filtered Pokemon)
- Implements proper loading and error states
- Provides refetch functionality for data refresh

### Utility Functions

#### `deduplicatePokemon`
- Removes duplicate Pokemon entries by name
- Uses Map for efficient deduplication
- Pure function for testability

#### `clx` (Class Name Utility)
- Conditional class name concatenation
- Filters out falsy values safely
- TypeScript-safe implementation

### Error Handling & UX

#### Image Loading
- PNG format with fallback to default image
- Graceful error handling for broken image URLs
- Lazy loading for performance

#### Loading States
- Skeleton loaders during data fetch
- Contextual loading (only card area, not full screen)
- Smooth transitions between states

#### Type Filtering
- Multi-select type filtering
- "All" button refetches fresh data
- Maintains pagination state during filter changes

## Development Timeline
- **Total Development Time**: 4 hours 20 minutes
- **Focus Areas**: Architecture design, data fetching implementation, component optimization, and documentation

## How to run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
