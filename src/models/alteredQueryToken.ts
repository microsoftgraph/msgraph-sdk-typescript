import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlteredQueryToken implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Defines the length of a changed segment.  */
    private _length?: number | undefined;
    /** Defines the offset of a changed segment.  */
    private _offset?: number | undefined;
    /** Represents the corrected segment string.  */
    private _suggestion?: string | undefined;
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
     * Instantiates a new alteredQueryToken and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "length": n => { this.length = n.getNumberValue(); },
            "offset": n => { this.offset = n.getNumberValue(); },
            "suggestion": n => { this.suggestion = n.getStringValue(); },
        };
    };
    /**
     * Gets the length property value. Defines the length of a changed segment.
     * @returns a integer
     */
    public get length() {
        return this._length;
    };
    /**
     * Sets the length property value. Defines the length of a changed segment.
     * @param value Value to set for the length property.
     */
    public set length(value: number | undefined) {
        this._length = value;
    };
    /**
     * Gets the offset property value. Defines the offset of a changed segment.
     * @returns a integer
     */
    public get offset() {
        return this._offset;
    };
    /**
     * Sets the offset property value. Defines the offset of a changed segment.
     * @param value Value to set for the offset property.
     */
    public set offset(value: number | undefined) {
        this._offset = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("length", this.length);
        writer.writeNumberValue("offset", this.offset);
        writer.writeStringValue("suggestion", this.suggestion);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the suggestion property value. Represents the corrected segment string.
     * @returns a string
     */
    public get suggestion() {
        return this._suggestion;
    };
    /**
     * Sets the suggestion property value. Represents the corrected segment string.
     * @param value Value to set for the suggestion property.
     */
    public set suggestion(value: string | undefined) {
        this._suggestion = value;
    };
}
