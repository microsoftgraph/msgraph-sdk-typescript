import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddFormulaLocalPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The comment property */
    private _comment?: string | undefined;
    /** The formula property */
    private _formula?: string | undefined;
    /** The name property */
    private _name?: string | undefined;
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
     * Gets the comment property value. The comment property
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. The comment property
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Instantiates a new addFormulaLocalPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the formula property value. The formula property
     * @returns a string
     */
    public get formula() {
        return this._formula;
    };
    /**
     * Sets the formula property value. The formula property
     * @param value Value to set for the formula property.
     */
    public set formula(value: string | undefined) {
        this._formula = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "formula": n => { this.formula = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("comment", this.comment);
        writer.writeStringValue("formula", this.formula);
        writer.writeStringValue("name", this.name);
        writer.writeAdditionalData(this.additionalData);
    };
}
