
export interface AgreementFileData{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Data that represents the terms of use PDF document. Read-only. Note: You can use the .NET Convert.ToBase64String method to convert your file to binary data for uploading using the Create agreements API. A sample syntax using this method in PowerShell is [convert]::ToBase64String((Get-Content -path 'your_file_path' -Encoding byte)). */
    data?:string | undefined;
}
