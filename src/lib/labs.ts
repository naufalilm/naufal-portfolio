import { Client } from "@notionhq/client";

export type LabPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  summary: string;
  date: string;
  readingTime: string;
  featured?: boolean;
  blocks?: LabBlock[];
};

export type LabBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "bulleted"; text: string }
  | { type: "numbered"; text: string }
  | { type: "quote"; text: string }
  | { type: "code"; text: string; language?: string };

type NotionRichText = Array<{ plain_text?: string }>;

type NotionProperty = {
  type?: string;
  title?: NotionRichText;
  rich_text?: NotionRichText;
  select?: { name?: string };
  url?: string;
  date?: { start?: string };
  multi_select?: Array<{ name: string }>;
  checkbox?: boolean;
};

type NotionPageLike = {
  id: string;
  created_time?: string;
  properties?: Record<string, NotionProperty>;
};

type NotionBlockLike = {
  type?: string;
  paragraph?: { rich_text?: NotionRichText };
  heading_2?: { rich_text?: NotionRichText };
  heading_3?: { rich_text?: NotionRichText };
  bulleted_list_item?: { rich_text?: NotionRichText };
  numbered_list_item?: { rich_text?: NotionRichText };
  quote?: { rich_text?: NotionRichText };
  code?: { rich_text?: NotionRichText; language?: string };
};

const fallbackPosts: LabPost[] = [
  {
    id: "fallback-wazuh",
    title: "Building My First Mini SOC Lab with Wazuh",
    slug: "building-mini-soc-lab-with-wazuh",
    category: "Security Lab",
    tags: ["Wazuh", "SOC", "Linux", "Incident Report"],
    summary:
      "A planned security monitoring lab for collecting endpoint logs, simulating SSH brute force, and writing analyst-style incident notes.",
    date: "2026-05-27",
    readingTime: "4 min read",
    featured: true,
    blocks: [
      {
        type: "paragraph",
        text: "This lab is designed as portfolio proof for entry-level SOC and cloud security roles.",
      },
      {
        type: "heading",
        level: 2,
        text: "Lab Goals",
      },
      {
        type: "bulleted",
        text: "Set up Wazuh server and endpoint agent.",
      },
      {
        type: "bulleted",
        text: "Simulate SSH brute force against a Linux endpoint.",
      },
      {
        type: "bulleted",
        text: "Capture alert evidence and write a short incident report.",
      },
      {
        type: "quote",
        text: "The goal is not only to install tools, but to explain evidence clearly.",
      },
    ],
  },
  {
    id: "fallback-ai-soc",
    title: "Building an AI Assistant for Security Alert Triage",
    slug: "building-ai-assistant-for-security-alert-triage",
    category: "AI Automation",
    tags: ["LLM", "SOC", "Alert Triage", "Streamlit"],
    summary:
      "A practical AI assistant concept that summarizes security alerts, classifies severity, and generates next-step recommendations.",
    date: "2026-05-27",
    readingTime: "5 min read",
    featured: true,
    blocks: [
      {
        type: "paragraph",
        text: "This project connects security operations with applied AI automation.",
      },
      {
        type: "heading",
        level: 2,
        text: "Expected Workflow",
      },
      {
        type: "numbered",
        text: "Paste or ingest a Wazuh alert.",
      },
      {
        type: "numbered",
        text: "Generate a concise analyst summary.",
      },
      {
        type: "numbered",
        text: "Recommend containment, verification, and escalation actions.",
      },
    ],
  },
  {
    id: "fallback-haproxy",
    title: "Implementasi Load Balancing dengan HAProxy di Ubuntu",
    slug: "implementasi-load-balancing-haproxy-ubuntu",
    category: "Linux & Cloud",
    tags: ["Ubuntu", "HAProxy", "Infrastructure"],
    summary:
      "Documentation of a Linux infrastructure lab for load balancing traffic using HAProxy.",
    date: "2026-02-12",
    readingTime: "6 min read",
    blocks: [
      {
        type: "paragraph",
        text: "Existing blog documentation like this can be rewritten as polished lab notes inside the new portfolio website.",
      },
    ],
  },
];

function notionClient() {
  const token = process.env.NOTION_TOKEN;

  if (!token) {
    return null;
  }

  return new Client({ auth: token });
}

function plainText(richText: Array<{ plain_text?: string }> | undefined) {
  return richText?.map((text) => text.plain_text ?? "").join("") ?? "";
}

function propertyText(properties: Record<string, NotionProperty>, key: string) {
  const property = properties[key];

  if (!property) {
    return "";
  }

  if (property.type === "title") {
    return plainText(property.title);
  }

  if (property.type === "rich_text") {
    return plainText(property.rich_text);
  }

  if (property.type === "select") {
    return property.select?.name ?? "";
  }

  if (property.type === "url") {
    return property.url ?? "";
  }

  return "";
}

function propertyDate(properties: Record<string, NotionProperty>, key: string) {
  const property = properties[key];
  return property?.type === "date" ? property.date?.start ?? "" : "";
}

function propertyTags(properties: Record<string, NotionProperty>, key: string) {
  const property = properties[key];
  return property?.type === "multi_select"
    ? property.multi_select?.map((tag: { name: string }) => tag.name) ?? []
    : [];
}

function propertyCheckbox(properties: Record<string, NotionProperty>, key: string) {
  const property = properties[key];
  return property?.type === "checkbox" ? property.checkbox : false;
}

function estimateReadingTime(blocks: LabBlock[]) {
  const words = blocks
    .map((block) => block.text)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function pageToPost(page: NotionPageLike): LabPost {
  const properties = page.properties ?? {};
  const title = propertyText(properties, "Title") || "Untitled note";
  const slug =
    propertyText(properties, "Slug") ||
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return {
    id: page.id,
    title,
    slug,
    category: propertyText(properties, "Category") || "Lab Notes",
    tags: propertyTags(properties, "Tags"),
    summary: propertyText(properties, "Summary"),
    date: propertyDate(properties, "Date") || page.created_time?.slice(0, 10) || "",
    readingTime: "3 min read",
    featured: propertyCheckbox(properties, "Featured"),
  };
}

function blockToLabBlock(block: NotionBlockLike): LabBlock | null {
  switch (block.type) {
    case "paragraph":
      return { type: "paragraph", text: plainText(block.paragraph?.rich_text) };
    case "heading_2":
      return { type: "heading", level: 2, text: plainText(block.heading_2?.rich_text) };
    case "heading_3":
      return { type: "heading", level: 3, text: plainText(block.heading_3?.rich_text) };
    case "bulleted_list_item":
      return { type: "bulleted", text: plainText(block.bulleted_list_item?.rich_text) };
    case "numbered_list_item":
      return { type: "numbered", text: plainText(block.numbered_list_item?.rich_text) };
    case "quote":
      return { type: "quote", text: plainText(block.quote?.rich_text) };
    case "code":
      return {
        type: "code",
        text: plainText(block.code?.rich_text),
        language: block.code?.language,
      };
    default:
      return null;
  }
}

export async function getLabPosts(): Promise<LabPost[]> {
  const dataSourceId = process.env.NOTION_DATA_SOURCE_ID ?? process.env.NOTION_DATABASE_ID;
  const notion = notionClient();

  if (!dataSourceId || !notion) {
    return fallbackPosts;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page) => pageToPost(page as NotionPageLike));
  } catch (error) {
    console.error("Failed to fetch Notion lab posts", error);
    return fallbackPosts;
  }
}

export async function getLabPost(slug: string): Promise<LabPost | undefined> {
  const dataSourceId = process.env.NOTION_DATA_SOURCE_ID ?? process.env.NOTION_DATABASE_ID;
  const notion = notionClient();

  if (!dataSourceId || !notion) {
    return fallbackPosts.find((post) => post.slug === slug);
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
      page_size: 1,
    });

    const page = response.results[0];

    if (!page) {
      return undefined;
    }

    const blocksResponse = await notion.blocks.children.list({
      block_id: page.id,
      page_size: 100,
    });

    const blocks = blocksResponse.results
      .map((block) => blockToLabBlock(block as NotionBlockLike))
      .filter((block): block is LabBlock => block !== null && block.text.length > 0);

    return {
      ...pageToPost(page as NotionPageLike),
      readingTime: estimateReadingTime(blocks),
      blocks,
    };
  } catch (error) {
    console.error("Failed to fetch Notion lab post", error);
    return fallbackPosts.find((post) => post.slug === slug);
  }
}
