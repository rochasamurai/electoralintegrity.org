param(
    [string]$CommitMessage
)

Write-Host "=== Git Sync Script (main) ===" -ForegroundColor Cyan

# 1) Check if we are inside a Git repository
git rev-parse --is-inside-work-tree 2>$null 1>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "This directory is not a Git repository." -ForegroundColor Red
    exit 1
}

# 2) Check for pending changes
$changes = git status --porcelain

if (-not $changes) {
    Write-Host "No changes to commit. Working tree is clean." -ForegroundColor Yellow
    exit 0
}

Write-Host "Changes detected:"
git status

# 3) Ask for the commit message if not provided
if (-not $CommitMessage -or $CommitMessage.Trim() -eq "") {
    $CommitMessage = Read-Host "Enter commit message (leave blank to use an automatic message)"
}

if (-not $CommitMessage -or $CommitMessage.Trim() -eq "") {
    $CommitMessage = "Auto-commit $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    Write-Host "Using automatic message: '$CommitMessage'" -ForegroundColor Yellow
} else {
    Write-Host "Using commit message: '$CommitMessage'" -ForegroundColor Cyan
}

# 4) Stage files (new, modified, deleted)
Write-Host "`nStaging files..." -ForegroundColor Cyan
git add -A
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error while running 'git add -A'." -ForegroundColor Red
    exit 1
}

# 5) Create commit
Write-Host "Creating commit..." -ForegroundColor Cyan
git commit -m "$CommitMessage"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error while running 'git commit'." -ForegroundColor Red
    exit 1
}

# 6) Pull latest changes from remote with rebase
Write-Host "`nRunning 'git pull --rebase origin main'..." -ForegroundColor Cyan
git pull --rebase origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Rebase failed. Please resolve conflicts and complete the rebase manually." -ForegroundColor Red
    exit 1
}

# 7) Push to remote
Write-Host "`nPushing to 'origin main'..." -ForegroundColor Cyan
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error while running 'git push'." -ForegroundColor Red
    exit 1
}

Write-Host "`nAll done! ✅" -ForegroundColor Green
git status
