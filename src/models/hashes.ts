
export interface Hashes{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The CRC32 value of the file (if available). Read-only. */
    crc32Hash?:string | undefined;
    /** A proprietary hash of the file that can be used to determine if the contents of the file have changed (if available). Read-only. */
    quickXorHash?:string | undefined;
    /** SHA1 hash for the contents of the file (if available). Read-only. */
    sha1Hash?:string | undefined;
    /** SHA256 hash for the contents of the file (if available). Read-only. */
    sha256Hash?:string | undefined;
}
