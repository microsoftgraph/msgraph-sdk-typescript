import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UploadSession implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration time is reached.  */
    private _expirationDateTime?: Date | undefined;
    /** A collection of byte ranges that the server is missing for the file. These ranges are zero indexed and of the format 'start-end' (e.g. '0-26' to indicate the first 27 bytes of the file). When uploading files as Outlook attachments, instead of a collection of ranges, this property always indicates a single value '{start}', the location in the file where the next upload should begin.  */
    private _nextExpectedRanges?: string[] | undefined;
    /** The URL endpoint that accepts PUT requests for byte ranges of the file.  */
    private _uploadUrl?: string | undefined;
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
     * Instantiates a new uploadSession and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the expirationDateTime property value. The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration time is reached.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration time is reached.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "expirationDateTime": (o, n) => { (o as unknown as UploadSession).expirationDateTime = n.getDateValue(); },
            "nextExpectedRanges": (o, n) => { (o as unknown as UploadSession).nextExpectedRanges = n.getCollectionOfPrimitiveValues<string>(); },
            "uploadUrl": (o, n) => { (o as unknown as UploadSession).uploadUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the nextExpectedRanges property value. A collection of byte ranges that the server is missing for the file. These ranges are zero indexed and of the format 'start-end' (e.g. '0-26' to indicate the first 27 bytes of the file). When uploading files as Outlook attachments, instead of a collection of ranges, this property always indicates a single value '{start}', the location in the file where the next upload should begin.
     * @returns a string
     */
    public get nextExpectedRanges() {
        return this._nextExpectedRanges;
    };
    /**
     * Sets the nextExpectedRanges property value. A collection of byte ranges that the server is missing for the file. These ranges are zero indexed and of the format 'start-end' (e.g. '0-26' to indicate the first 27 bytes of the file). When uploading files as Outlook attachments, instead of a collection of ranges, this property always indicates a single value '{start}', the location in the file where the next upload should begin.
     * @param value Value to set for the nextExpectedRanges property.
     */
    public set nextExpectedRanges(value: string[] | undefined) {
        this._nextExpectedRanges = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("nextExpectedRanges", this.nextExpectedRanges);
        writer.writeStringValue("uploadUrl", this.uploadUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the uploadUrl property value. The URL endpoint that accepts PUT requests for byte ranges of the file.
     * @returns a string
     */
    public get uploadUrl() {
        return this._uploadUrl;
    };
    /**
     * Sets the uploadUrl property value. The URL endpoint that accepts PUT requests for byte ranges of the file.
     * @param value Value to set for the uploadUrl property.
     */
    public set uploadUrl(value: string | undefined) {
        this._uploadUrl = value;
    };
}
