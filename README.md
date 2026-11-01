# Masters Concrete — Next.js Website

A complete App Router website starter for `mastersconcrete.ca`, designed around Toronto / Greater Toronto Area Local SEO.

## Included
- Responsive homepage, about, services index, 12 service detail pages, 16 service-area pages, projects index and 3 project case studies, contact, and field-notes page.
- Per-page metadata, canonical URLs, Open Graph defaults, JSON-LD for the contractor and service pages.
- Dynamic `sitemap.xml` and `robots.txt`.
- Responsive navigation, service and location internal linking, prominent phone CTAs.
- Quote request form with server-side validation, honeypot spam field and optional Resend email integration.
- 404 page and deployment notes.

## Run locally
Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Configure quote email
The quote form API is included. To send email, create a Resend account/API key and set these values in `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxx
QUOTE_TO_EMAIL=info@mastersconcrete.ca
QUOTE_FROM_EMAIL=Website Quotes <verified-sender@your-domain>
NEXT_PUBLIC_SITE_URL=https://mastersconcrete.ca
```

Verify the sender domain with Resend before production use. Without `RESEND_API_KEY`, the form deliberately returns a clear setup message and directs visitors to phone/email rather than silently discarding the enquiry.

## Deploy (Vercel)
1. Push this folder to a Git repository.
2. Import the repository into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL=https://mastersconcrete.ca`.
4. Set the Resend environment variables after verifying the sending domain.
5. Deploy and connect the production domain.

## SEO launch checklist
- Verify the business name, phone numbers, email, address, operating hours and service-area availability with the business owner. The current source website does not clearly publish a street address, so this build intentionally does not invent one.
- Confirm each service and location page reflects actual services and actual service coverage before indexing.
- Replace the abstract project artwork with approved Masters Concrete job photos and descriptive alt text.
- Add verified Google Business Profile URL, social profile URLs, and business address only after confirmation.
- Add Search Console and GA4, submit `/sitemap.xml`, and monitor index coverage, local landing-page impressions, calls and quote submissions.
- Redirect old WordPress URLs to their exact new equivalents. Preserve existing slugs where possible; use a complete 301 redirect map for any changed paths.
- Do not mass-publish thin city pages. Add original project evidence, local constraints, and useful information before expanding location content.
- Configure production email and test the quote form end-to-end.

## Important content notes
The content is based on publicly visible information on the existing Masters Concrete website. Project sizes and project descriptions are retained at a high level. Claims such as licences, insurance, guarantees, exact experience years, awards, pricing and street address are not added unless they can be verified by the business.
