"""
Script to verify whether the modular ELIS installation was applied correctly.
"""

import os
from pathlib import Path

print("=" * 70)
print("🔍 MODULAR INSTALLATION VERIFICATION - ELIS ELEVENTY")
print("=" * 70)

# Base directory for the project source
BASE_DIR = "src"

# Expected files grouped by area
expected_files = {
    "Sections (src/_includes/sections/)": [
        os.path.join(BASE_DIR, "_includes", "sections", "hero.njk"),
        os.path.join(BASE_DIR, "_includes", "sections", "about.njk"),
        os.path.join(BASE_DIR, "_includes", "sections", "deliverables.njk"),
        os.path.join(BASE_DIR, "_includes", "sections", "research.njk"),
        os.path.join(BASE_DIR, "_includes", "sections", "support.njk"),
        # Tools section can be added here if required:
        # os.path.join(BASE_DIR, "_includes", "sections", "tools.njk"),
    ],
    "Partials (src/_includes/partials/)": [
        os.path.join(BASE_DIR, "_includes", "partials", "footer.njk"),
        os.path.join(BASE_DIR, "_includes", "partials", "header.njk"),
        os.path.join(BASE_DIR, "_includes", "partials", "main-nav.njk"),
    ],
    "Pages (src/pages/)": [
        os.path.join(BASE_DIR, "pages", "index.njk"),
        os.path.join(BASE_DIR, "pages", "privacy.md"),
        os.path.join(BASE_DIR, "pages", "legal.md"),
    ],
    "CSS (src/assets/css/global/)": [
        os.path.join(BASE_DIR, "assets", "css", "global", "global.css"),
    ],
}

# Ensure we are running from the correct directory
if not os.path.exists(BASE_DIR):
    print(f"\n❌ ERROR: Folder '{BASE_DIR}' not found!")
    print("   Run this script from the root of the elis-eleventy project.")
    print("   Example: C:\\Users\\carlo\\elis-eleventy\\")
    exit(1)

print(f"\n✅ Base folder found: {os.path.abspath(BASE_DIR)}")

# Folder structure verification
print("\n" + "=" * 70)
print("📂 FOLDER VERIFICATION")
print("=" * 70)

folders_to_check = [
    os.path.join(BASE_DIR, "_includes", "sections"),
    os.path.join(BASE_DIR, "_includes", "partials"),
    os.path.join(BASE_DIR, "pages"),
    os.path.join(BASE_DIR, "assets", "css"),
    os.path.join(BASE_DIR, "assets", "css", "global"),
]

all_folders_ok = True
for folder in folders_to_check:
    if os.path.exists(folder):
        print(f"✅ {folder}")
    else:
        print(f"❌ {folder} - MISSING!")
        all_folders_ok = False

# File existence verification
print("\n" + "=" * 70)
print("📄 FILE VERIFICATION")
print("=" * 70)

all_files_ok = True
total_files = 0
found_files = 0

for category, files in expected_files.items():
    print(f"\n{category}")
    for file_path in files:
        total_files += 1
        if os.path.exists(file_path):
            # Check file size (avoid empty placeholders)
            size = os.path.getsize(file_path)
            if size > 0:
                print(f"  ✅ {os.path.basename(file_path)} ({size} bytes)")
                found_files += 1
            else:
                print(f"  ⚠️  {os.path.basename(file_path)} (empty file!)")
                all_files_ok = False
        else:
            print(f"  ❌ {os.path.basename(file_path)} - MISSING!")
            all_files_ok = False

# index.njk content verification
print("\n" + "=" * 70)
print("📋 INDEX.NJK VERIFICATION")
print("=" * 70)

index_path = os.path.join(BASE_DIR, "pages", "index.njk")
if os.path.exists(index_path):
    with open(index_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Check if it contains the expected includes
    required_includes = [
        'include "sections/hero.njk"',
        'include "sections/about.njk"',
        'include "sections/deliverables.njk"',
        'include "sections/research.njk"',
        'include "sections/support.njk"',
        'include "partials/footer.njk"',
    ]

    index_ok = True
    for include in required_includes:
        if include in content:
            print(f"  ✅ {include}")
        else:
            print(f"  ❌ {include} - MISSING!")
            index_ok = False
else:
    print("  ❌ index.njk not found!")
    index_ok = False

# CSS verification (global.css markers)
print("\n" + "=" * 70)
print("🎨 CSS VERIFICATION")
print("=" * 70)

css_path = os.path.join(BASE_DIR, "assets", "css", "global", "global.css")
if os.path.exists(css_path):
    with open(css_path, "r", encoding="utf-8") as f:
        css_content = f.read()

    # Check for key CSS markers related to the modular sections
    css_markers = [
        ".section-about",
        ".about-cards",
        ".deliverables-grid",
        ".section-research",
        ".section-support",
        ".site-footer",
    ]

    css_ok = True
    for marker in css_markers:
        if marker in css_content:
            print(f"  ✅ {marker} found")
        else:
            print(f"  ❌ {marker} - MISSING!")
            css_ok = False
else:
    print("  ❌ global.css not found at expected path!")
    css_ok = False

# Final summary
print("\n" + "=" * 70)
print("📊 VERIFICATION SUMMARY")
print("=" * 70)

print(f"\n📂 Folders: {'✅ OK' if all_folders_ok else '❌ INCOMPLETE'}")
print(f"📄 Files: {found_files}/{total_files} found")
print(f"📋 index.njk: {'✅ OK' if index_ok else '❌ INCOMPLETE'}")
print(f"🎨 CSS: {'✅ OK' if css_ok else '❌ INCOMPLETE'}")

print("\n" + "=" * 70)
if all_folders_ok and all_files_ok and index_ok and css_ok:
    print("✅ INSTALLATION COMPLETE AND CORRECT!")
    print("=" * 70)
    print("\n🎉 All checks passed. You can start the development server with:")
    print("   npm start")
    print("\n   Then open: http://localhost:8080")
else:
    print("⚠️  INSTALLATION INCOMPLETE")
    print("=" * 70)
    print("\n📝 Please review the items marked with ❌ above.")
    print("   Refer to GUIA_INSTALACAO_MODULAR.md for further details.")
print("\n" + "=" * 70)
