import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class AttachmentItem implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The type of attachment. Possible values are: file, item, reference. Required.  */
    private _attachmentType?: AttachmentType | undefined;
    /** The nature of the data in the attachment. Optional.  */
    private _contentType?: string | undefined;
    /** true if the attachment is an inline attachment; otherwise, false. Optional.  */
    private _isInline?: boolean | undefined;
    /** The display name of the attachment. This can be a descriptive string and does not have to be the actual file name. Required.  */
    private _name?: string | undefined;
    /** The length of the attachment in bytes. Required.  */
    private _size?: Int64 | undefined;
    /**
     * Instantiates a new attachmentItem and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the attachmentType property value. The type of attachment. Possible values are: file, item, reference. Required.
     * @returns a attachmentType
     */
    public get attachmentType() {
        return this._attachmentType;
    };
    /**
     * Gets the contentType property value. The nature of the data in the attachment. Optional.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the isInline property value. true if the attachment is an inline attachment; otherwise, false. Optional.
     * @returns a boolean
     */
    public get isInline() {
        return this._isInline;
    };
    /**
     * Gets the name property value. The display name of the attachment. This can be a descriptive string and does not have to be the actual file name. Required.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the size property value. The length of the attachment in bytes. Required.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["attachmentType", (o, n) => { (o as unknown as AttachmentItem).attachmentType = n.getObjectValue<AttachmentType>(AttachmentType); }],
            ["contentType", (o, n) => { (o as unknown as AttachmentItem).contentType = n.getStringValue(); }],
            ["isInline", (o, n) => { (o as unknown as AttachmentItem).isInline = n.getBooleanValue(); }],
            ["name", (o, n) => { (o as unknown as AttachmentItem).name = n.getStringValue(); }],
            ["size", (o, n) => { (o as unknown as AttachmentItem).size = n.getObjectValue<Int64>(Int64); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AttachmentType>("attachmentType", this.attachmentType);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeBooleanValue("isInline", this.isInline);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Int64>("size", this.size);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the attachmentType property value. The type of attachment. Possible values are: file, item, reference. Required.
     * @param value Value to set for the attachmentType property.
     */
    public set attachmentType(value: AttachmentType | undefined) {
        this._attachmentType = value;
    };
    /**
     * Sets the contentType property value. The nature of the data in the attachment. Optional.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the isInline property value. true if the attachment is an inline attachment; otherwise, false. Optional.
     * @param value Value to set for the isInline property.
     */
    public set isInline(value: boolean | undefined) {
        this._isInline = value;
    };
    /**
     * Sets the name property value. The display name of the attachment. This can be a descriptive string and does not have to be the actual file name. Required.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the size property value. The length of the attachment in bytes. Required.
     * @param value Value to set for the size property.
     */
    public set size(value: Int64 | undefined) {
        this._size = value;
    };
}
