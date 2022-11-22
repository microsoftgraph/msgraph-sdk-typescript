import {AttachmentType} from './attachmentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttachmentInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The attachmentType property */
    private _attachmentType?: AttachmentType | undefined;
    /** The contentType property */
    private _contentType?: string | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The size property */
    private _size?: number | undefined;
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
     * Gets the attachmentType property value. The attachmentType property
     * @returns a attachmentType
     */
    public get attachmentType() {
        return this._attachmentType;
    };
    /**
     * Sets the attachmentType property value. The attachmentType property
     * @param value Value to set for the attachmentType property.
     */
    public set attachmentType(value: AttachmentType | undefined) {
        this._attachmentType = value;
    };
    /**
     * Instantiates a new attachmentInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the contentType property value. The contentType property
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The contentType property
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
        return {
            "attachmentType": n => { this.attachmentType = n.getEnumValue<AttachmentType>(AttachmentType); },
            "contentType": n => { this.contentType = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "size": n => { this.size = n.getNumberValue(); },
        };
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<AttachmentType>("attachmentType", this.attachmentType);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("size", this.size);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size property value. The size property
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The size property
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
