# Naufal Ilmi Portfolio

Personal portfolio for Naufal Ilmi, focused on cloud, network security, SOC monitoring, infrastructure, and AI automation.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- lucide-react
- Vercel-ready deployment

## Local Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Production Build

```bash
npm run lint
npm run build
```

## Content Direction

Main positioning:

**Cloud, Network Security, and AI Automation Enthusiast**

Current featured work:

- PulangSehat AI Agent
- AI SOC Assistant
- Mini SOC Lab with Wazuh
- IBM X3620 M3 Server Virtualization
- Compostify Smart Composting
- Calmate Mood Tracking App

Future domain plan:

- `naufalilmi.my.id` for the main portfolio
- `labs.naufalilmi.my.id` for technical documentation and lab notes

## Notion CMS for Labs

The `/labs` pages can read posts from Notion while keeping the website design fully custom.

Required Vercel environment variables:

- `NOTION_TOKEN`
- `NOTION_DATA_SOURCE_ID`

Expected Notion database properties:

| Property | Type | Notes |
| --- | --- | --- |
| `Title` | Title | Article title |
| `Slug` | Text | URL slug, for example `building-mini-soc-lab-with-wazuh` |
| `Category` | Select | Example: `Security Lab`, `AI Automation`, `Linux & Cloud` |
| `Tags` | Multi-select | Technologies or topics |
| `Summary` | Text | Short excerpt shown on cards |
| `Date` | Date | Published date |
| `Published` | Checkbox | Only checked posts appear on the site |
| `Featured` | Checkbox | Optional marker for highlighted notes |

If the environment variables are not set, `/labs` uses local sample notes so the site still builds and deploys.
