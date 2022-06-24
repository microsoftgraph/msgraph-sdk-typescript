Get-ChildItem -Recurse -File `
| Group-Object -Property Length `
| ?{ $_.Count -gt 1 } `
| %{ $_.Group } `
| Group-Object -Property Hash `
| ?{ $_.Count -gt 1 } `
| %{ $_.Group }