import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of applicationTemplate entities.
 */
export class AttachmentSession extends Entity implements Parsable {
    /** The content property */
    private _content?: string | undefined;
    /** The expirationDateTime property */
    private _expirationDateTime?: Date | undefined;
    /** The nextExpectedRanges property */
    private _nextExpectedRanges?: string[] | undefined;
    /**
     * Instantiates a new attachmentSession and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The content property
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content property
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the expirationDateTime property value. The expirationDateTime property
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The expirationDateTime property
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
     * Gets the nextExpectedRanges property value. The nextExpectedRanges property
     * @returns a string
     */
    public get nextExpectedRanges() {
        return this._nextExpectedRanges;
    };
    /**
     * Sets the nextExpectedRanges property value. The nextExpectedRanges property
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
