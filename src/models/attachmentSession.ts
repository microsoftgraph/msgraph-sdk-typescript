import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttachmentSession extends Entity implements Parsable {
    /** The content streams that are uploaded. */
    private _content?: string | undefined;
    /** The date and time in UTC when the upload session will expire. The complete file must be uploaded before this expiration time is reached. */
    private _expirationDateTime?: Date | undefined;
    /** Indicates a single value {start} that represents the location in the file where the next upload should begin. */
    private _nextExpectedRanges?: string[] | undefined;
    /**
     * Instantiates a new attachmentSession and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The content streams that are uploaded.
     * @returns a base64url
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content streams that are uploaded.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the expirationDateTime property value. The date and time in UTC when the upload session will expire. The complete file must be uploaded before this expiration time is reached.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The date and time in UTC when the upload session will expire. The complete file must be uploaded before this expiration time is reached.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "nextExpectedRanges": n => { this.nextExpectedRanges = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the nextExpectedRanges property value. Indicates a single value {start} that represents the location in the file where the next upload should begin.
     * @returns a string
     */
    public get nextExpectedRanges() {
        return this._nextExpectedRanges;
    };
    /**
     * Sets the nextExpectedRanges property value. Indicates a single value {start} that represents the location in the file where the next upload should begin.
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
        super.serialize(writer);
        writer.writeStringValue("content", this.content);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("nextExpectedRanges", this.nextExpectedRanges);
    };
}
