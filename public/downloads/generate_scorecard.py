#!/usr/bin/env python3
"""
AI Readiness Scorecard PDF Generator
PRISM AI Consultants | prismaiconsultants.com
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor, white, Color
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.enums import TA_CENTER, TA_LEFT
import os

# Brand colors
BG_PRIMARY = HexColor("#0A0A0A")
BG_CARD = HexColor("#171717")
BG_SECONDARY = HexColor("#1C1C1C")
BORDER = HexColor("#262626")
TEXT_PRIMARY = HexColor("#F5F5F4")
TEXT_SECONDARY = HexColor("#A3A3A3")
TEXT_TERTIARY = HexColor("#D4D4D4")
ACCENT = HexColor("#7C3AED")
ACCENT_LIGHT = HexColor("#8B5CF6")
SUCCESS = HexColor("#22C55E")
WARNING = HexColor("#EAB308")
ERROR = HexColor("#EF4444")

OUTPUT_PATH = os.path.expanduser(
    "~/prism/prismaiconsultants-com/public/downloads/ai-readiness-scorecard.pdf"
)

W, H = letter  # 612 x 792


def draw_bg(c):
    """Fill page with primary background."""
    c.setFillColor(BG_PRIMARY)
    c.rect(0, 0, W, H, fill=1, stroke=0)


def draw_accent_bar(c, y, width=W, height=4):
    """Draw a thin purple accent bar."""
    c.setFillColor(ACCENT)
    c.rect(0, y, width, height, fill=1, stroke=0)


def draw_footer(c):
    """Draw consistent footer on every page."""
    c.setFillColor(BORDER)
    c.rect(0, 0, W, 40, fill=1, stroke=0)
    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 8)
    c.drawCentredString(W / 2, 16, "prismaiconsultants.com  |  877-418-2507  |  PRISM AI Consultants")


def draw_card(c, x, y, w, h, fill=BG_CARD):
    """Draw a rounded-corner card."""
    c.setFillColor(fill)
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.roundRect(x, y, w, h, 8, fill=1, stroke=1)


def wrapped_text(c, text, x, y, max_width, font="Helvetica", size=11, color=TEXT_PRIMARY, leading=None):
    """Draw text that wraps within max_width. Returns the y position after the last line."""
    if leading is None:
        leading = size * 1.4
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    lines = []
    current_line = ""
    for word in words:
        test = f"{current_line} {word}".strip()
        if c.stringWidth(test, font, size) <= max_width:
            current_line = test
        else:
            if current_line:
                lines.append(current_line)
            current_line = word
    if current_line:
        lines.append(current_line)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_circle_number(c, x, y, number, radius=14):
    """Draw a purple circle with a number inside."""
    c.setFillColor(ACCENT)
    c.circle(x, y, radius, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 14)
    c.drawCentredString(x, y - 5, str(number))


def draw_score_boxes(c, x, y, labels):
    """Draw a row of 5 scoring boxes with labels underneath."""
    box_w = 80
    box_h = 28
    gap = 8
    total_w = 5 * box_w + 4 * gap
    start_x = x

    for i in range(5):
        bx = start_x + i * (box_w + gap)
        # Box
        c.setStrokeColor(ACCENT if i == 0 or i == 4 else BORDER)
        c.setLineWidth(1)
        c.setFillColor(BG_SECONDARY)
        c.roundRect(bx, y, box_w, box_h, 4, fill=1, stroke=1)
        # Score number
        c.setFillColor(ACCENT_LIGHT)
        c.setFont("Helvetica-Bold", 14)
        c.drawCentredString(bx + box_w / 2, y + 8, str(i + 1))
        # Label below
        c.setFillColor(TEXT_SECONDARY)
        c.setFont("Helvetica", 7)
        label = labels[i]
        # Center the label under the box
        c.drawCentredString(bx + box_w / 2, y - 12, label)

    return y - 24


# ──────────────────────────────────────────
# PAGE 1: COVER
# ──────────────────────────────────────────
def page_cover(c):
    draw_bg(c)

    # Top accent bar
    draw_accent_bar(c, H - 6, W, 6)

    # PRISM AI CONSULTANTS header
    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 12)
    c.drawCentredString(W / 2, H - 80, "PRISM AI CONSULTANTS")

    # Purple line under header
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2)
    c.line(W / 2 - 80, H - 90, W / 2 + 80, H - 90)

    # Main title block
    y = H - 200
    c.setFillColor(TEXT_PRIMARY)
    c.setFont("Helvetica-Bold", 42)
    c.drawCentredString(W / 2, y, "AI Readiness")
    y -= 52
    c.drawCentredString(W / 2, y, "Scorecard")

    # Decorative purple glow rectangle behind subtitle
    y -= 60
    glow_w = 440
    glow_h = 60
    glow_color = Color(124 / 255, 58 / 255, 237 / 255, 0.12)
    c.setFillColor(glow_color)
    c.roundRect(W / 2 - glow_w / 2, y - 10, glow_w, glow_h, 10, fill=1, stroke=0)

    # Subtitle
    c.setFillColor(TEXT_TERTIARY)
    c.setFont("Helvetica", 16)
    c.drawCentredString(W / 2, y + 18, "5 Questions. 2 Minutes.")
    c.drawCentredString(W / 2, y - 2, "Find Out Where AI Saves You the Most.")

    # Divider dots
    y -= 70
    c.setFillColor(ACCENT)
    for i in range(5):
        c.circle(W / 2 - 40 + i * 20, y, 3, fill=1, stroke=0)

    # Bottom info card
    y -= 80
    card_w = 360
    card_h = 100
    card_x = W / 2 - card_w / 2
    draw_card(c, card_x, y, card_w, card_h)

    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 10)
    c.drawCentredString(W / 2, y + 72, "Artificial Intelligence Strategy Partners")
    c.setFillColor(ACCENT_LIGHT)
    c.setFont("Helvetica-Bold", 13)
    c.drawCentredString(W / 2, y + 48, "prismaiconsultants.com")
    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 10)
    c.drawCentredString(W / 2, y + 28, "877-418-2507")

    # Bottom accent bar
    draw_accent_bar(c, 42, W, 3)
    draw_footer(c)


# ──────────────────────────────────────────
# PAGES 2-3: THE 5 QUESTIONS
# ──────────────────────────────────────────
QUESTIONS = [
    {
        "q": "How much time does your team spend on repetitive tasks weekly?",
        "labels": ["Under 5 hrs", "5-10 hrs", "10-20 hrs", "20-40 hrs", "Over 40 hrs"],
        "insight": "Teams averaging 20+ hours on repetitive work typically reclaim 60-80% of that time within 90 days of AI deployment.",
    },
    {
        "q": "How many tools/platforms does your team use that don't talk to each other?",
        "labels": ["1-2 tools", "3-4 tools", "5-6 tools", "7-9 tools", "10+ tools"],
        "insight": "Disconnected systems create data silos. AI integration layers eliminate copy-paste workflows and reduce errors by 90%.",
    },
    {
        "q": "How often do you make decisions without real-time data?",
        "labels": ["Rarely", "Monthly", "Weekly", "Several/wk", "Daily"],
        "insight": "Real-time dashboards powered by AI surface the metrics that matter, so decisions happen in minutes, not meetings.",
    },
    {
        "q": "How long does it take to onboard a new client or project?",
        "labels": ["Under 1 day", "1-3 days", "3-7 days", "1-2 weeks", "Over 2 weeks"],
        "insight": "Automated onboarding sequences reduce client ramp-up time by 70% and improve first-week satisfaction scores.",
    },
    {
        "q": "What percentage of your revenue comes from manual outreach?",
        "labels": ["Under 10%", "10-25%", "25-35%", "35-50%", "Over 50%"],
        "insight": "AI-driven outreach systems generate 3-5x more qualified conversations than manual methods at a fraction of the cost.",
    },
]


def page_questions_1(c):
    """Questions 1-3"""
    draw_bg(c)
    draw_accent_bar(c, H - 4, W, 4)

    # Header
    c.setFillColor(ACCENT_LIGHT)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(50, H - 45, "AI READINESS SCORECARD")
    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 11)
    c.drawRightString(W - 50, H - 45, "Rate yourself 1-5 on each question")

    # Divider
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(50, H - 55, W - 50, H - 55)

    y = H - 85
    for i in range(3):
        q = QUESTIONS[i]
        card_h = 190
        card_x = 40
        card_w = W - 80
        draw_card(c, card_x, y - card_h, card_w, card_h)

        # Question number circle
        draw_circle_number(c, card_x + 30, y - 25, i + 1)

        # Question text
        wrapped_text(c, q["q"], card_x + 55, y - 20, card_w - 70,
                     font="Helvetica-Bold", size=14, color=TEXT_PRIMARY)

        # Score boxes
        draw_score_boxes(c, card_x + 20, y - 80, q["labels"])

        # Insight
        c.setFillColor(Color(124 / 255, 58 / 255, 237 / 255, 0.08))
        insight_y = y - card_h + 12
        c.roundRect(card_x + 15, insight_y, card_w - 30, 36, 4, fill=1, stroke=0)
        wrapped_text(c, q["insight"], card_x + 25, insight_y + 22, card_w - 50,
                     font="Helvetica", size=8.5, color=TEXT_SECONDARY)

        y -= card_h + 18

    draw_footer(c)


def page_questions_2(c):
    """Questions 4-5"""
    draw_bg(c)
    draw_accent_bar(c, H - 4, W, 4)

    # Header
    c.setFillColor(ACCENT_LIGHT)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(50, H - 45, "AI READINESS SCORECARD")
    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 11)
    c.drawRightString(W - 50, H - 45, "Rate yourself 1-5 on each question")

    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(50, H - 55, W - 50, H - 55)

    y = H - 85
    for i in range(3, 5):
        q = QUESTIONS[i]
        card_h = 190
        card_x = 40
        card_w = W - 80
        draw_card(c, card_x, y - card_h, card_w, card_h)

        draw_circle_number(c, card_x + 30, y - 25, i + 1)

        wrapped_text(c, q["q"], card_x + 55, y - 20, card_w - 70,
                     font="Helvetica-Bold", size=14, color=TEXT_PRIMARY)

        draw_score_boxes(c, card_x + 20, y - 80, q["labels"])

        c.setFillColor(Color(124 / 255, 58 / 255, 237 / 255, 0.08))
        insight_y = y - card_h + 12
        c.roundRect(card_x + 15, insight_y, card_w - 30, 36, 4, fill=1, stroke=0)
        wrapped_text(c, q["insight"], card_x + 25, insight_y + 22, card_w - 50,
                     font="Helvetica", size=8.5, color=TEXT_SECONDARY)

        y -= card_h + 18

    # Total score box at the bottom
    y -= 20
    total_card_w = 300
    total_card_x = W / 2 - total_card_w / 2
    draw_card(c, total_card_x, y - 70, total_card_w, 70, fill=BG_SECONDARY)

    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 11)
    c.drawString(total_card_x + 20, y - 25, "YOUR TOTAL SCORE:")
    # Empty box for writing
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.5)
    c.roundRect(total_card_x + 180, y - 45, 80, 35, 6, fill=0, stroke=1)
    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 9)
    c.drawCentredString(total_card_x + 220, y - 55, "out of 25")

    draw_footer(c)


# ──────────────────────────────────────────
# PAGE 4: SCORING GUIDE
# ──────────────────────────────────────────
def page_scoring(c):
    draw_bg(c)
    draw_accent_bar(c, H - 4, W, 4)

    c.setFillColor(TEXT_PRIMARY)
    c.setFont("Helvetica-Bold", 28)
    c.drawCentredString(W / 2, H - 70, "Your Results")

    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 12)
    c.drawCentredString(W / 2, H - 95, "Add up your scores and find your tier below.")

    tiers = [
        {
            "range": "5 - 10",
            "label": "Early Stage",
            "color": SUCCESS,
            "headline": "You're early. That's a good thing.",
            "body": "One well-placed AI system could save your team 10+ hours per week. You have the advantage of building smart from the start instead of retrofitting broken processes. A single automation sprint would put you ahead of 80% of businesses your size.",
        },
        {
            "range": "11 - 17",
            "label": "Ready to Move",
            "color": WARNING,
            "headline": "You're ready. The foundation is there.",
            "body": "Your operations have enough complexity that AI will deliver immediate, measurable ROI. A Momentum Sprint would transform your operations in 90 days, connecting your tools, automating your outreach, and giving you dashboards that actually drive decisions.",
        },
        {
            "range": "18 - 25",
            "label": "Overdue",
            "color": ERROR,
            "headline": "You're overdue. Your competitors are already automating what you do manually.",
            "body": "Every week without AI systems costs you revenue, time, and competitive position. The good news: the higher your score, the bigger the ROI when you deploy. PRISM builds the systems that turn operational chaos into a scalable machine.",
        },
    ]

    y = H - 140
    card_x = 45
    card_w = W - 90

    for tier in tiers:
        card_h = 165
        draw_card(c, card_x, y - card_h, card_w, card_h)

        # Score range badge
        badge_w = 80
        badge_h = 32
        c.setFillColor(tier["color"])
        c.roundRect(card_x + 18, y - 42, badge_w, badge_h, 6, fill=1, stroke=0)
        c.setFillColor(BG_PRIMARY)
        c.setFont("Helvetica-Bold", 16)
        c.drawCentredString(card_x + 18 + badge_w / 2, y - 34, tier["range"])

        # Tier label
        c.setFillColor(tier["color"])
        c.setFont("Helvetica-Bold", 12)
        c.drawString(card_x + 110, y - 28, tier["label"])

        # Headline (wrapped to avoid clipping long lines)
        wrapped_text(c, tier["headline"], card_x + 110, y - 50, card_w - 120,
                     font="Helvetica-Bold", size=12, color=TEXT_PRIMARY, leading=15)

        # Body
        wrapped_text(c, tier["body"], card_x + 25, y - 80, card_w - 50,
                     font="Helvetica", size=10, color=TEXT_SECONDARY, leading=14)

        y -= card_h + 20

    draw_footer(c)


# ──────────────────────────────────────────
# PAGE 5: WHAT PRISM BUILDS + CTA
# ──────────────────────────────────────────
def page_cta(c):
    draw_bg(c)
    draw_accent_bar(c, H - 4, W, 4)

    c.setFillColor(TEXT_PRIMARY)
    c.setFont("Helvetica-Bold", 28)
    c.drawCentredString(W / 2, H - 70, "What PRISM Builds")

    c.setFillColor(TEXT_SECONDARY)
    c.setFont("Helvetica", 12)
    c.drawCentredString(W / 2, H - 95, "Custom AI systems that run your business while you focus on growth.")

    # System types
    systems = [
        ("AI Agents", "Autonomous systems that handle research, outreach, scheduling, and follow-ups without human intervention."),
        ("Real-Time Dashboards", "Live performance views that surface the numbers that matter, updated automatically from your actual data."),
        ("CRM Automations", "Lead scoring, pipeline management, and nurture sequences that turn your CRM into a revenue engine."),
        ("Email & Communication Systems", "Smart drafting, triage, and routing that keeps your inbox at zero and your response time under an hour."),
        ("Research & Intelligence Tools", "Market analysis, competitor tracking, and trend detection that inform strategy in real time."),
    ]

    y = H - 140
    card_x = 45
    card_w = W - 90

    for idx, (title, desc) in enumerate(systems):
        card_h = 68
        draw_card(c, card_x, y - card_h, card_w, card_h)

        # Purple bullet
        c.setFillColor(ACCENT)
        c.circle(card_x + 24, y - card_h / 2, 5, fill=1, stroke=0)

        # Title
        c.setFillColor(TEXT_PRIMARY)
        c.setFont("Helvetica-Bold", 12)
        c.drawString(card_x + 40, y - 20, title)

        # Description
        wrapped_text(c, desc, card_x + 40, y - 36, card_w - 60,
                     font="Helvetica", size=9, color=TEXT_SECONDARY, leading=12)

        y -= card_h + 10

    # Stats bar
    y -= 15
    stats_h = 50
    c.setFillColor(Color(124 / 255, 58 / 255, 237 / 255, 0.12))
    c.roundRect(card_x, y - stats_h, card_w, stats_h, 8, fill=1, stroke=0)

    c.setFillColor(ACCENT_LIGHT)
    c.setFont("Helvetica-Bold", 13)
    c.drawCentredString(W / 2, y - 22, "34 autonomous agents built.")
    c.setFillColor(TEXT_TERTIARY)
    c.setFont("Helvetica", 11)
    c.drawCentredString(W / 2, y - 40, "$350K - $700K+ in systems delivered to clients.")

    # CTA Card
    y -= stats_h + 25
    cta_h = 105
    c.setFillColor(ACCENT)
    c.roundRect(card_x, y - cta_h, card_w, cta_h, 10, fill=1, stroke=0)

    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 18)
    c.drawCentredString(W / 2, y - 30, "Ready to see what AI can do for you?")

    c.setFont("Helvetica", 12)
    c.drawCentredString(W / 2, y - 55, "Book a free strategy call. No pitch, just a plan.")

    c.setFont("Helvetica-Bold", 14)
    c.drawCentredString(W / 2, y - 82, "calendly.com/prismaiconsultants/introductory-call")

    draw_footer(c)


# ──────────────────────────────────────────
# BUILD PDF
# ──────────────────────────────────────────
def main():
    c = canvas.Canvas(OUTPUT_PATH, pagesize=letter)
    c.setTitle("AI Readiness Scorecard - PRISM AI Consultants")
    c.setAuthor("PRISM AI Consultants")
    c.setSubject("Assess your organization's AI readiness in 2 minutes")

    page_cover(c)
    c.showPage()

    page_questions_1(c)
    c.showPage()

    page_questions_2(c)
    c.showPage()

    page_scoring(c)
    c.showPage()

    page_cta(c)
    c.showPage()

    c.save()
    print(f"PDF saved to: {OUTPUT_PATH}")
    print(f"File size: {os.path.getsize(OUTPUT_PATH):,} bytes")


if __name__ == "__main__":
    main()
