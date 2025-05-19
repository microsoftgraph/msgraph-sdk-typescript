# PowerShell script to copy and modify README.md files in package folders

$scriptPath = Join-Path -Path $PSScriptRoot -ChildPath "README.md"
$packagesPath = Join-Path -Path (Split-Path $PSScriptRoot -Parent) -ChildPath "packages"
$packageFolders = Get-ChildItem -Path $packagesPath -Directory

$rootPackage = "msgraph-sdk"

# Exclude the root package folder from the list
$packageFolders = $packageFolders | Where-Object { $_.Name -ne $rootPackage }

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

# Get the README.md in the parent directory
$parentReadmePath = Join-Path -Path (Split-Path $PSScriptRoot -Parent) -ChildPath "README.md"

#Copy it to "packages/$rootPackage/README.md"
$destinationPath = Join-Path -Path (Join-Path -Path $packagesPath -ChildPath $rootPackage) -ChildPath "README.md"
Copy-Item -Path $parentReadmePath -Destination $destinationPath -Force
