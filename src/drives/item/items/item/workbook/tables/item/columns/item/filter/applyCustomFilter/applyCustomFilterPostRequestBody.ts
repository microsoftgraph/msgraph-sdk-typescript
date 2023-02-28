import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplyCustomFilterPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The criteria1 property */
    private _criteria1?: string | undefined;
    /** The criteria2 property */
    private _criteria2?: string | undefined;
    /** The oper property */
    private _oper?: string | undefined;
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
     * Instantiates a new applyCustomFilterPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the criteria1 property value. The criteria1 property
     * @returns a string
     */
    public get criteria1() {
        return this._criteria1;
    };
    /**
     * Sets the criteria1 property value. The criteria1 property
     * @param value Value to set for the criteria1 property.
     */
    public set criteria1(value: string | undefined) {
        this._criteria1 = value;
    };
    /**
     * Gets the criteria2 property value. The criteria2 property
     * @returns a string
     */
    public get criteria2() {
        return this._criteria2;
    };
    /**
     * Sets the criteria2 property value. The criteria2 property
     * @param value Value to set for the criteria2 property.
     */
    public set criteria2(value: string | undefined) {
        this._criteria2 = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "criteria1": n => { this.criteria1 = n.getStringValue(); },
            "criteria2": n => { this.criteria2 = n.getStringValue(); },
            "oper": n => { this.oper = n.getStringValue(); },
        };
    };
    /**
     * Gets the oper property value. The oper property
     * @returns a string
     */
    public get oper() {
        return this._oper;
    };
    /**
     * Sets the oper property value. The oper property
     * @param value Value to set for the oper property.
     */
    public set oper(value: string | undefined) {
        this._oper = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("criteria1", this.criteria1);
        writer.writeStringValue("criteria2", this.criteria2);
        writer.writeStringValue("oper", this.oper);
        writer.writeAdditionalData(this.additionalData);
    };
}
