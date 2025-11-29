"""
Script to clean up unnecessary pages from the Eleventy Excellent template.

REAL EXECUTION - Creates a backup and deletes files
"""

import os
import shutil
from datetime import datetime

# User instructions
instructions = """
================================================================================
🧹 CLEANUP SCRIPT - ELIS ELEVENTY
================================================================================

This script must be executed ON WINDOWS, not inside an AI assistant.

📋 INSTRUCTIONS TO RUN ON WINDOWS:

1. Save this script as: cleanup_pages.py
   Location: C:\\Users\\carlo\\elis-eleventy\\cleanup_pages.py

2. Open PowerShell in the project folder:
   cd C:\\Users\\carlo\\elis-eleventy

3. Run the script:
   python cleanup_pages.py

4. The script will:
   ✅ Create an automatic backup of the original pages
   ✅ Delete 7 unnecessary template pages
   ✅ Keep only the core pages such as index.njk, privacy.md, legal.md

================================================================================
"""

print(instructions)

# Configuration
PAGES_DIR = "src/pages"
BACKUP_DIR = f"backup_pages_{datetime.now().strftime('%Y%m%d_%H%M%S')}"

# Files to DELETE (template pages that are not needed for ELIS)
DELETE_FILES = [
    "about.md",
    "accessibility.md",
    "blog.njk",
    "built-with.njk",
    "get-started.md",
    "styleguide.njk",
    "sustainability.md",
]


def main():
    print("\n🔍 Checking project structure...")

    # Check that we are in the correct project directory
    if not os.path.exists(PAGES_DIR):
        print(f"❌ ERROR: Folder {PAGES_DIR} not found!")
        print("   Please run this script from the root of the elis-eleventy project.")
        return

    print(f"✅ Folder found: {PAGES_DIR}")

    # Create backup folder
    print(f"\n📦 Creating backup in: {BACKUP_DIR}")
    os.makedirs(BACKUP_DIR, exist_ok=True)

    # Copy all page files to backup
    for file in os.listdir(PAGES_DIR):
        if file.endswith((".njk", ".md")):
            src = os.path.join(PAGES_DIR, file)
            dst = os.path.join(BACKUP_DIR, file)
            shutil.copy2(src, dst)
            print(f"   ✓ Backup created: {file}")

    print("✅ Backup completed!")

    # Delete unnecessary template files
    print("\n🗑️  Deleting unnecessary template pages...")
    deleted_count = 0

    for file in DELETE_FILES:
        file_path = os.path.join(PAGES_DIR, file)
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"   ✓ Deleted: {file}")
            deleted_count += 1
        else:
            print(f"   ⚠️  Not found (already removed?): {file}")

    # List remaining page files
    print(f"\n📋 Remaining page files in {PAGES_DIR}:")
    remaining_files = [
        f for f in os.listdir(PAGES_DIR) if f.endswith((".njk", ".md"))
    ]
    for file in sorted(remaining_files):
        print(f"   ✓ {file}")

    print("\n" + "=" * 80)
    print("✅ CLEANUP COMPLETED SUCCESSFULLY!")
    print("=" * 80)
    print("\n📊 Summary:")
    print(f"   • Backup folder: {BACKUP_DIR}")
    print(f"   • Files deleted: {deleted_count}")
    print(f"   • Files kept: {len(remaining_files)}")
    print("\n🎯 Next step:")
    print("   Implement or refine the modular sections (About, Deliverables, etc.) in index.njk.")
    print("=" * 80)


if __name__ == "__main__":
    main()
