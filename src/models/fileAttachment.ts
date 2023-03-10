import {Attachment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileAttachment extends Attachment implements Parsable {
    /** The base64-encoded contents of the file. */
    private _contentBytes?: string | undefined;
    /** The ID of the attachment in the Exchange store. */
    private _contentId?: string | undefined;
    /** Do not use this property as it is not supported. */
    private _contentLocation?: string | undefined;
    /**
     * Instantiates a new FileAttachment and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.fileAttachment";
    };
    /**
     * Gets the contentBytes property value. The base64-encoded contents of the file.
     * @returns a base64url
     */
    public get contentBytes() {
        return this._contentBytes;
    };
    /**
     * Sets the contentBytes property value. The base64-encoded contents of the file.
     * @param value Value to set for the contentBytes property.
     */
    public set contentBytes(value: string | undefined) {
        this._contentBytes = value;
    };
    /**
     * Gets the contentId property value. The ID of the attachment in the Exchange store.
     * @returns a string
     */
    public get contentId() {
        return this._contentId;
    };
    /**
     * Sets the contentId property value. The ID of the attachment in the Exchange store.
     * @param value Value to set for the contentId property.
     */
    public set contentId(value: string | undefined) {
        this._contentId = value;
    };
    /**
     * Gets the contentLocation property value. Do not use this property as it is not supported.
     * @returns a string
     */
    public get contentLocation() {
        return this._contentLocation;
    };
    /**
     * Sets the contentLocation property value. Do not use this property as it is not supported.
     * @param value Value to set for the contentLocation property.
     */
    public set contentLocation(value: string | undefined) {
        this._contentLocation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentBytes": n => { this.contentBytes = n.getStringValue(); },
            "contentId": n => { this.contentId = n.getStringValue(); },
            "contentLocation": n => { this.contentLocation = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("contentBytes", this.contentBytes);
        writer.writeStringValue("contentId", this.contentId);
        writer.writeStringValue("contentLocation", this.contentLocation);
    };
}
