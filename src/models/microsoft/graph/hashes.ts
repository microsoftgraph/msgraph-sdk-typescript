import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Hashes implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The CRC32 value of the file in little endian (if available). Read-only.  */
    private _crc32Hash?: string | undefined;
    /** A proprietary hash of the file that can be used to determine if the contents of the file have changed (if available). Read-only.  */
    private _quickXorHash?: string | undefined;
    /** SHA1 hash for the contents of the file (if available). Read-only.  */
    private _sha1Hash?: string | undefined;
    /** SHA256 hash for the contents of the file (if available). Read-only.  */
    private _sha256Hash?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new hashes and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the crc32Hash property value. The CRC32 value of the file in little endian (if available). Read-only.
     * @returns a string
     */
    public get crc32Hash() {
        return this._crc32Hash;
    };
    /**
     * Sets the crc32Hash property value. The CRC32 value of the file in little endian (if available). Read-only.
     * @param value Value to set for the crc32Hash property.
     */
    public set crc32Hash(value: string | undefined) {
        this._crc32Hash = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "crc32Hash": (o, n) => { (o as unknown as Hashes).crc32Hash = n.getStringValue(); },
            "quickXorHash": (o, n) => { (o as unknown as Hashes).quickXorHash = n.getStringValue(); },
            "sha1Hash": (o, n) => { (o as unknown as Hashes).sha1Hash = n.getStringValue(); },
            "sha256Hash": (o, n) => { (o as unknown as Hashes).sha256Hash = n.getStringValue(); },
        };
    };
    /**
     * Gets the quickXorHash property value. A proprietary hash of the file that can be used to determine if the contents of the file have changed (if available). Read-only.
     * @returns a string
     */
    public get quickXorHash() {
        return this._quickXorHash;
    };
    /**
     * Sets the quickXorHash property value. A proprietary hash of the file that can be used to determine if the contents of the file have changed (if available). Read-only.
     * @param value Value to set for the quickXorHash property.
     */
    public set quickXorHash(value: string | undefined) {
        this._quickXorHash = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("crc32Hash", this.crc32Hash);
        writer.writeStringValue("quickXorHash", this.quickXorHash);
        writer.writeStringValue("sha1Hash", this.sha1Hash);
        writer.writeStringValue("sha256Hash", this.sha256Hash);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sha1Hash property value. SHA1 hash for the contents of the file (if available). Read-only.
     * @returns a string
     */
    public get sha1Hash() {
        return this._sha1Hash;
    };
    /**
     * Sets the sha1Hash property value. SHA1 hash for the contents of the file (if available). Read-only.
     * @param value Value to set for the sha1Hash property.
     */
    public set sha1Hash(value: string | undefined) {
        this._sha1Hash = value;
    };
    /**
     * Gets the sha256Hash property value. SHA256 hash for the contents of the file (if available). Read-only.
     * @returns a string
     */
    public get sha256Hash() {
        return this._sha256Hash;
    };
    /**
     * Sets the sha256Hash property value. SHA256 hash for the contents of the file (if available). Read-only.
     * @param value Value to set for the sha256Hash property.
     */
    public set sha256Hash(value: string | undefined) {
        this._sha256Hash = value;
    };
}
