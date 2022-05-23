
export interface UploadSession{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration time is reached. */
    expirationDateTime?:Date | undefined;
    /** When uploading files to document libraries, this is a collection of byte ranges that the server is missing for the file. These ranges are zero-indexed and of the format, '{start}-{end}' (e.g. '0-26' to indicate the first 27 bytes of the file). When uploading files as Outlook attachments, instead of a collection of ranges, this property always indicates a single value '{start}', the location in the file where the next upload should begin. */
    nextExpectedRanges?:string[] | undefined;
    /** The URL endpoint that accepts PUT requests for byte ranges of the file. */
    uploadUrl?:string | undefined;
}
