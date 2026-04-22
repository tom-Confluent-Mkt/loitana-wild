import os
import re
import requests
import browser_cookie3
from urllib.parse import urlparse

HTML_FILES = [
    r"stitch_website_strategy_content_outline_loitana_wild (1)/stitch_website_strategy_content_outline_loitana_wild/home_loitana_wild_authentic_imagery_fixed/code.html",
    r"stitch_website_strategy_content_outline_loitana_wild (1)/stitch_website_strategy_content_outline_loitana_wild/the_residence_authentic_imagery_fixed/code.html",
    r"stitch_website_strategy_content_outline_loitana_wild (1)/stitch_website_strategy_content_outline_loitana_wild/tailor_your_stay_authentic_imagery_fixed/code.html",
    r"stitch_website_strategy_content_outline_loitana_wild (1)/stitch_website_strategy_content_outline_loitana_wild/inquiry_authentic_imagery_fixed/code.html",
]

OUT_DIR = r"loitana-wild/public/images"
os.makedirs(OUT_DIR, exist_ok=True)

# Collect all unique Google AIDA image URLs across all HTML files
all_urls = []
seen = set()
for html_path in HTML_FILES:
    with open(html_path, encoding="utf-8") as f:
        content = f.read()
    urls = re.findall(r'https://lh3\.googleusercontent\.com/aida/[A-Za-z0-9_\-]+', content)
    for url in urls:
        if url not in seen:
            seen.add(url)
            all_urls.append(url)

print(f"Found {len(all_urls)} unique images across all pages.\n")

# Load Chrome cookies for Google's domain
print("Loading Chrome cookies...")
try:
    cookies = browser_cookie3.chrome(domain_name='.googleusercontent.com')
except Exception as e:
    print(f"Could not load Chrome cookies: {e}")
    print("Make sure Chrome is closed or try again.")
    exit(1)

session = requests.Session()
session.cookies = cookies
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://stitch.withgoogle.com/",
})

mapping = {}
failed = []

for i, url in enumerate(all_urls):
    token = url.split("/aida/")[-1][:20]
    filename = f"img_{i+1:02d}_{token}.jpg"
    out_path = os.path.join(OUT_DIR, filename)

    print(f"[{i+1}/{len(all_urls)}] Downloading {filename}...", end=" ")
    try:
        r = session.get(url, timeout=15)
        if r.status_code == 200:
            with open(out_path, "wb") as f:
                f.write(r.content)
            mapping[url] = f"/images/{filename}"
            print(f"OK ({len(r.content)//1024}KB)")
        else:
            print(f"FAILED ({r.status_code})")
            failed.append(url)
    except Exception as e:
        print(f"ERROR: {e}")
        failed.append(url)

print(f"\nDone. {len(mapping)} downloaded, {len(failed)} failed.")

if failed:
    print("\nFailed URLs:")
    for u in failed:
        print(" ", u)
