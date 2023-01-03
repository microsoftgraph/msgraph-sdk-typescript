import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the admin singleton.
 */
export class TeamworkHostedContent extends Entity implements Parsable {
    /** Write only. Bytes for the hosted content (such as images). */
    private _contentBytes?: string | undefined;
    /** Write only. Content type. sicj as image/png, image/jpg. */
    private _contentType?: string | undefined;
    /**
     * Instantiates a new teamworkHostedContent and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentBytes property value. Write only. Bytes for the hosted content (such as images).
     * @returns a binary
     */
    public get contentBytes() {
        return this._contentBytes;
    };
    /**
     * Sets the contentBytes property value. Write only. Bytes for the hosted content (such as images).
     * @param value Value to set for the contentBytes property.
     */
    public set contentBytes(value: string | undefined) {
        this._contentBytes = value;
    };
    /**
     * Gets the contentType property value. Write only. Content type. sicj as image/png, image/jpg.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. Write only. Content type. sicj as image/png, image/jpg.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentBytes": n => { this.contentBytes = n.getStringValue(); },
            "contentType": n => { this.contentType = n.getStringValue(); },
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
        writer.writeStringValue("contentType", this.contentType);
    };
}
