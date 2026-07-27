# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router project. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), a reverse proxy is configured in `next.config.ts` to route analytics traffic through `/ingest`, and two key user-action events are now captured in the interactive components.

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the 'Explore Events' CTA button to scroll to the events list. | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks an event card to navigate to the event detail page (properties: `event_title`, `event_slug`, `event_location`, `event_date`). | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/529804/dashboard/1909351)
- [Explore Events clicks over time (wizard)](https://us.posthog.com/project/529804/insights/2SgATLkL)
- [Event card clicks over time (wizard)](https://us.posthog.com/project/529804/insights/x8TKR5vX)
- [Most clicked events by title (wizard)](https://us.posthog.com/project/529804/insights/afwWt1d2)
- [Explore to event click funnel (wizard)](https://us.posthog.com/project/529804/insights/Adpltv0l)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names (`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST`) to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
