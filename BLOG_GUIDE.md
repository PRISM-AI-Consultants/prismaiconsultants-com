# PRISM AI Blog Publishing Guide

## For VersAssist Team (Aubrey / Jamie)

### How to Add a New Blog Post

1. Create a new `.mdx` file in `content/blog/`
2. Name it with a URL-friendly slug: `your-post-title.mdx`
3. Add the frontmatter template at the top (see below)
4. Write content in Markdown
5. Commit to GitHub. Vercel auto-deploys.

### Frontmatter Template

```mdx
---
title: "Your Post Title Here"
date: "2026-03-15"
description: "A 150-160 character meta description for SEO. Include the target keyword."
tags: ["AI Systems", "Business AI"]
author: "Dr. Jeff Bullock"
featured: false
---

Your content here in Markdown format.
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| title | Yes | Post title. Shows as H1 and in browser tab |
| date | Yes | Publication date in YYYY-MM-DD format |
| description | Yes | Meta description for Google (150-160 chars) |
| tags | Yes | Array of tags (use existing tags when possible) |
| author | Yes | Always "Dr. Jeff Bullock" |
| featured | No | Set to `true` to feature on homepage |

### Existing Tags
- AI Systems
- AI Strategy
- Business AI
- AI Agents
- Automation
- AI Consulting
- Lehigh Valley
- Case Study

### SEO Checklist

Before publishing, verify:

- [ ] Title includes target keyword
- [ ] Title is under 60 characters
- [ ] Meta description is 150-160 characters
- [ ] Meta description includes target keyword
- [ ] H2 headings use related keywords
- [ ] Internal links to /portfolio, /how-it-works, /contact, or /results
- [ ] CTA at the end (Calendly link or /contact)
- [ ] No em dashes (use periods or commas instead)
- [ ] Date is correct
- [ ] Slug matches the target keyword if possible

### Writing Guidelines

- Voice: Direct, confident, no-nonsense. Jeff's perspective.
- Length: 500-1500 words
- NO em dashes (--). Jeff considers them an AI tell.
- Include at least one internal link to another page on the site
- End with a call to action
- Use real examples from PRISM builds when possible

### Markdown Features Available

```markdown
# Heading 1 (don't use - the title is already H1)
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list
- Another item

1. Numbered list
2. Second item

> Blockquote

[Link text](https://example.com)

`inline code`
```

### File Naming Convention

Use lowercase, hyphens, no special characters:
- Good: `why-ai-agents-beat-chatbots.mdx`
- Good: `lehigh-valley-ai-case-study.mdx`
- Bad: `Why AI Agents Beat Chatbots.mdx`
- Bad: `post_about_ai.mdx`

### Deployment

1. Save the `.mdx` file in `content/blog/`
2. Commit: `git add . && git commit -m "Add blog post: your-title"`
3. Push: `git push`
4. Vercel auto-deploys within 60 seconds
5. Verify at `prismaiconsultants.com/blog/your-slug`
