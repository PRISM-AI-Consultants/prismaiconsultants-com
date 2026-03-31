const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  const logoBase64 = fs.readFileSync(path.join(__dirname, '../public/images/prism-logo.png')).toString('base64');
  const headshot = fs.readFileSync(path.join(__dirname, '../public/images/jeff-bullock-headshot.jpg')).toString('base64');

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@700;800&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      width: 1200px;
      height: 630px;
      background: #0A0A0A;
      color: #F5F5F4;
      font-family: 'Inter', sans-serif;
      overflow: hidden;
      position: relative;
    }

    /* Subtle gradient background */
    .bg-gradient {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(124, 58, 237, 0.08) 0%, transparent 40%);
    }

    /* Top accent bar */
    .accent-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #7C3AED, #9F67FF, #7C3AED);
    }

    .container {
      position: relative;
      z-index: 1;
      display: flex;
      height: 100%;
      padding: 48px 56px;
      gap: 48px;
    }

    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 280px;
    }

    .logo-row {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 28px;
    }

    .logo {
      width: 48px;
      height: 48px;
      border-radius: 10px;
    }

    .company-name {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #F5F5F4;
    }

    .headline {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 46px;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      margin-bottom: 20px;
      color: #FFFFFF;
    }

    .headline .accent {
      color: #9F67FF;
    }

    .subtitle {
      font-size: 20px;
      color: #A8A29E;
      line-height: 1.5;
      margin-bottom: 32px;
      max-width: 520px;
    }

    .stats-row {
      display: flex;
      gap: 32px;
    }

    .stat {
      display: flex;
      flex-direction: column;
    }

    .stat-value {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 26px;
      font-weight: 800;
      color: #9F67FF;
    }

    .stat-label {
      font-size: 13px;
      color: #78716C;
      margin-top: 2px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
    }

    .headshot-wrapper {
      position: relative;
    }

    .headshot-glow {
      position: absolute;
      inset: -8px;
      border-radius: 20px;
      background: rgba(124, 58, 237, 0.2);
      filter: blur(16px);
    }

    .headshot {
      width: 260px;
      height: 340px;
      object-fit: cover;
      object-position: center top;
      border-radius: 16px;
      border: 2px solid rgba(124, 58, 237, 0.3);
      position: relative;
    }

    .name-badge {
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      background: #171717;
      border: 1px solid #262626;
      border-radius: 8px;
      padding: 8px 16px;
      white-space: nowrap;
    }

    .name-badge .name {
      font-size: 14px;
      font-weight: 700;
      color: #F5F5F4;
    }

    .name-badge .title {
      font-size: 11px;
      color: #7C3AED;
      font-weight: 600;
    }

    /* Bottom URL bar */
    .url-bar {
      position: absolute;
      bottom: 24px;
      left: 56px;
      font-size: 14px;
      color: #57534E;
      font-weight: 600;
      letter-spacing: 0.02em;
    }
  </style>
</head>
<body>
  <div class="bg-gradient"></div>
  <div class="accent-bar"></div>

  <div class="container">
    <div class="left">
      <div class="logo-row">
        <img class="logo" src="data:image/png;base64,${logoBase64}" alt="PRISM" />
        <span class="company-name">PRISM AI Consultants</span>
      </div>

      <div class="headline">
        AI Systems <span class="accent">Architect.</span><br/>
        Business Partner.<br/>
        Builder.
      </div>

      <div class="subtitle">
        We build production AI systems that run live in your business. Not slides. Not strategies. Working systems.
      </div>

      <div class="stats-row">
        <div class="stat">
          <span class="stat-value">34</span>
          <span class="stat-label">Agents Built</span>
        </div>
        <div class="stat">
          <span class="stat-value">$350K-$700K+</span>
          <span class="stat-label">Systems Delivered</span>
        </div>
        <div class="stat">
          <span class="stat-value">2-5x</span>
          <span class="stat-label">Client ROI</span>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="headshot-wrapper">
        <div class="headshot-glow"></div>
        <img class="headshot" src="data:image/jpeg;base64,${headshot}" alt="Dr. Jeff Bullock" />
        <div class="name-badge">
          <div class="name">Dr. Jeff Bullock, PharmD</div>
          <div class="title">CEO & AI Systems Architect</div>
        </div>
      </div>
    </div>
  </div>

  <div class="url-bar">prismaiconsultants.com</div>
</body>
</html>`;

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 }
  });

  await page.setContent(html, { waitUntil: 'networkidle' });

  // Wait for fonts to load
  await page.waitForTimeout(2000);

  const outputPath = path.join(__dirname, '../public/images/og-image.png');
  await page.screenshot({
    path: outputPath,
    type: 'png'
  });

  await browser.close();
  console.log(`OG image generated: ${outputPath}`);

  // Verify file size
  const stats = fs.statSync(outputPath);
  console.log(`File size: ${(stats.size / 1024).toFixed(1)} KB`);
}

generateOGImage().catch(console.error);
