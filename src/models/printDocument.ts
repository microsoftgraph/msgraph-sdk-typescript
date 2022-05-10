import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintDocument extends Entity implements Parsable {
    /** The document's content (MIME) type. Read-only. */
    private _contentType?: string | undefined;
    /** The document's name. Read-only. */
    private _displayName?: string | undefined;
    /** The document's size in bytes. Read-only. */
    private _size?: number | undefined;
    /**
     * Instantiates a new printDocument and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentType property value. The document's content (MIME) type. Read-only.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The document's content (MIME) type. Read-only.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Gets the displayName property value. The document's name. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The document's name. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contentType": n => { this.contentType = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "size": n => { this.size = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeNumberValue("size", this.size);
    };
    /**
     * Gets the size property value. The document's size in bytes. Read-only.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The document's size in bytes. Read-only.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
