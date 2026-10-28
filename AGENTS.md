<!-- BEGIN SHARED WEBSITE STANDARDS -->
# Shared website instructions

Apply the standards below only when building, auditing, maintaining or improving websites, including Ewaso Digital and all client websites. They do not apply to unrelated work. Preserve existing repository instructions and each client's individual branding, approved content, design system and requirements. Apply optional features only when useful to the audience, business goal and agreed scope. Resolve conflicts using the applicable instruction hierarchy and explicit project requirements.

# Ewaso Digital Website Development Standards

Adopted from the user's six reference screenshots, reviewed 28 October 2026.
Scope: Ewaso Digital and client website work. Apply proportionately to the site's purpose and agreed scope. Preserve each client's brand and existing repository instructions.

## Working principle

Build distinctive, fast, accessible websites that help visitors understand the business and take a real next step. Treat production readiness as part of delivery. Do not add every feature in an inspiration list. Fix defects before adding decoration.

Before changing a site, inspect its existing architecture, design system, content and integrations. Preserve functioning behaviour. Identify the primary conversion: enquiry, WhatsApp, booking, purchase or another explicit goal. For tourism work, prioritise mobile visitors, slower connections, accurate property information and clear enquiry paths.

## Required baseline

- Remove starter branding, default framework tab titles, unused navigation, dummy links and placeholder content. Replace them with approved business content and a branded favicon. This does not mean removing React or Vite from the implementation.
- Make layouts work on narrow phones, tablets and desktops. Eliminate unintended horizontal overflow at its source; do not simply hide broken content. Make mobile navigation functional and keyboard accessible.
- Use semantic landmarks, a clear primary heading and logical heading hierarchy. Provide visible keyboard focus, labelled controls, sufficient contrast, meaningful image alt text, and empty alt text for decorative images. Provide a skip-to-content link where navigation repeats. Respect reduced-motion preferences.
- Test navigation, footer links, buttons and logo-to-home behaviour. Use real destinations and appropriate link/button semantics. Make displayed phone and email contacts actionable. Use verified international-format numbers for WhatsApp and telephone links.
- Forms need labels, suitable validation, loading/submission feedback, clear success and error states, and duplicate-submission protection. Show success only after the real service accepts the request. An enquiry is not a confirmed booking. Provide a useful fallback contact if submission fails.
- Use accurate business details, approved prices and genuine photography or clearly labelled illustrative imagery. Never invent reviews, awards, availability, guest numbers, partnerships or trust badges. Never present AI-generated property imagery as a photograph of the actual property.
- Resolve application-caused console errors, failed resource requests and broken images. Investigate warnings proportionately. Keep secrets out of frontend code and repositories; validate untrusted inputs on the server where applicable.

## Public website discovery and sharing

- Give each substantive indexable page an accurate, distinct title, useful meta description and descriptive URL. Use helpful internal links and meaningful page headings, without keyword stuffing.
- Choose the correct production canonical URLs. Do not point every page to the homepage. Exclude tracking parameters where appropriate and preserve meaningful page distinctions.
- Supply appropriate robots.txt and sitemap.xml for the production site. Include only canonical, indexable URLs in the sitemap. Check that staging directives do not accidentally block production. Robots.txt is not access control; protect private content with authentication.
- Provide a useful not-found page and a genuine HTTP 404 response where hosting supports it. Test direct navigation, refreshes and nonexistent routes, not just navigation from the homepage.
- Ensure critical public content and metadata are discoverable in the deployed output. Choose static generation, server rendering or prerendering when warranted; do not rewrite the stack solely to satisfy a vague demand for 'proper page sources'.
- Add social-sharing title, description and suitable image metadata. Check the actual deployed preview when tooling permits.
- Add structured data only when it accurately represents visible content and the actual business type. Use relevant organisation, local business or lodging types as appropriate; validate eligibility and syntax. Never fabricate ratings or promise rich results.
- Configure the approved custom domain, HTTPS and host redirects when domain access and deployment are within the task. Otherwise record the dependency. Do not buy domains or change unrelated DNS records under this standard alone.

## Performance

- Resize and compress images, use appropriate modern formats and responsive sources, reserve image dimensions, and lazy-load below-the-fold media. Do not lazy-load the main hero image by default.
- Keep JavaScript, dependencies, fonts and third-party widgets proportionate. Avoid unnecessary animation libraries, autoplay video and heavy sliders. Load expensive maps or embeds on demand where useful.
- Measure representative pages under mobile conditions. Aim for good Core Web Vitals and record the actual measurements and limitations. Do not invent scores or treat a single lab run as proof of real-user performance.
- Review production source maps deliberately. Private error-monitoring uploads may be useful; public source maps are a deployment choice, not a universal SEO defect. Removing them does not secure exposed secrets.

## Features to use selectively

| Feature from the images | Adoption rule |
| --- | --- |
| Sticky header | Use if navigation benefits; keep it compact and prevent content/focus obstruction. |
| Floating contact button | Often valuable for hospitality; verify the recipient and keep it clear of content and controls. |
| Expandable FAQ | Use real recurring questions; accessible controls and readable answers. |
| Breadcrumbs | Use for genuinely hierarchical sites, not every landing page. |
| Site search | Use when content volume makes navigation insufficient; implement useful empty and no-result states. |
| Dark mode | Add when it suits the audience and brand and both themes can be tested. |
| Loading animations | Use feedback for genuine waiting; avoid artificial delays and respect reduced motion. |
| Hover effects | Keep subtle and provide equivalent keyboard/touch behaviour. |
| Back-to-top and scroll progress | Consider for long pages only; avoid clutter. |
| Copy button | Use for useful copyable information and confirm the outcome accessibly. |
| Print stylesheet | Use for itineraries, invoices, guides and other printable content. |
| Password visibility toggle | Use where password input exists; preserve labels and accessible state. |
| Confirmation modal | Reserve for consequential actions; manage focus and keyboard dismissal correctly. |
| Last-updated date | Show only when useful and backed by a real content revision. Do not auto-refresh it daily. |
| UTM tracking | Use for defined campaign measurement; never put personal information in URLs. |
| Cookie banner | Assess actual tracking and applicable requirements. If consent is required, connect choices to real script behaviour; a decorative banner is insufficient. |
| llms.txt | Optional experiment for a demonstrated consuming system, not a required SEO or AI-discovery launch item. |

## Design direction and inspiration

Start with a short creative brief: audience, business goal, brand character, typography, palette, photography, spacing and interaction restraint. Use the client's existing design system when one exists. A safari lodge, community conservancy and digital agency should not receive identical styling.

The screenshots list these inspiration resources. These are transcribed references, not endorsements or sites audited by this review. Inspect availability and relevant examples when using them:

- land-book.com: overall page inspiration.
- supahero.io: hero references.
- pricingpages.design: pricing presentation.
- socialproofexamples.com: ways to present verified customer proof.
- reallygoodemails.com: email references.
- deck.gallery: presentation references.
- posts.design: social-content references.
- adfolio.design: advertising references.
- navbar.gallery: navigation references.
- ogimage.gallery: sharing-image references.

Study hierarchy, layout, spacing and clarity, then create an original implementation. Do not copy another business's branding, text or assets. The poster-style list includes Bauhaus, Psychedelic 1960s, Victorian Letterpress, Brutalist, Memphis Design, Swiss Punk/New Wave and Polish Poster School. Treat these as optional creative directions, primarily for campaigns and graphics, not mandatory website styles. Readability, brand fit and usability take priority.

## Delivery and acceptance

For a full build or readiness audit, check representative mobile, tablet and desktop views, keyboard navigation, the main conversion flow, success/failure paths, public routes and metadata. Run the repository's relevant build, lint, type and test checks when available. Use focused verification for small changes; do not expand every minor edit into a full redesign.

Report: what changed; what was actually tested; remaining blockers; and items marked not applicable with a reason. Distinguish verified facts from assumptions and checks that could not be run. Do not claim a site is production-ready if its main enquiry or booking path is unverified. Do not publish or alter live infrastructure solely because this document exists; follow the task's deployment authorization.

## Reference basis

- User's six supplied screenshots, with repeated advice consolidated.
- Ewaso Digital Master Brief, Harmonized May 2026, for business context.
- OpenAI, Custom instructions with AGENTS.md: https://developers.openai.com/codex/guides/agents-md/
- Google, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features

Reviewed 28 October 2026. Technical guidance should be checked again when implementation depends on changing platform behaviour.
<!-- END SHARED WEBSITE STANDARDS -->
