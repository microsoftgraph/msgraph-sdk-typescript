# PowerShell script to copy and modify README.md files in package folders

$scriptPath = Join-Path -Path $PSScriptRoot -ChildPath "README.md"
$packagesPath = Join-Path -Path (Split-Path $PSScriptRoot -Parent) -ChildPath "packages"
$packageFolders = Get-ChildItem -Path $packagesPath -Directory

foreach ($folder in $packageFolders) {
    $folderName = $folder.Name
    $packageName = $folderName.Split('-')[-1]  # Extract the last segment after splitting by '-'
    $destinationPath = Join-Path -Path $folder.FullName -ChildPath "README.md"

    # Read the content of the template README.md
    $readmeContent = Get-Content -Path $scriptPath

    # Replace the placeholder with the actual package name
    $modifiedContent = $readmeContent -replace '\$packageName', $packageName

    # Write the modified content to the destination README.md
    Set-Content -Path $destinationPath -Value $modifiedContent
}