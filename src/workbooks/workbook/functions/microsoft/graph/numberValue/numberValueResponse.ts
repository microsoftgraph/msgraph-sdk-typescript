import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Microsoft.graph.numberValueResponse implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _decimalSeparator?: Json | undefined;
    private _groupSeparator?: Json | undefined;
    private _text?: Json | undefined;
    /**
     * Instantiates a new Microsoft.graph.numberValueResponse and sets the default values.
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
     * Gets the decimalSeparator property value. 
     * @returns a Json
     */
    public get decimalSeparator() {
        return this._decimalSeparator;
    };
    /**
     * Gets the groupSeparator property value. 
     * @returns a Json
     */
    public get groupSeparator() {
        return this._groupSeparator;
    };
    /**
     * Gets the text property value. 
     * @returns a Json
     */
    public get text() {
        return this._text;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["decimalSeparator", (o, n) => { (o as unknown as Microsoft.graph.numberValueResponse).decimalSeparator = n.getObjectValue<Json>(Json); }],
            ["groupSeparator", (o, n) => { (o as unknown as Microsoft.graph.numberValueResponse).groupSeparator = n.getObjectValue<Json>(Json); }],
            ["text", (o, n) => { (o as unknown as Microsoft.graph.numberValueResponse).text = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("decimalSeparator", this.decimalSeparator);
        writer.writeObjectValue<Json>("groupSeparator", this.groupSeparator);
        writer.writeObjectValue<Json>("text", this.text);
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
     * Sets the decimalSeparator property value. 
     * @param value Value to set for the decimalSeparator property.
     */
    public set decimalSeparator(value: Json | undefined) {
        this._decimalSeparator = value;
    };
    /**
     * Sets the groupSeparator property value. 
     * @param value Value to set for the groupSeparator property.
     */
    public set groupSeparator(value: Json | undefined) {
        this._groupSeparator = value;
    };
    /**
     * Sets the text property value. 
     * @param value Value to set for the text property.
     */
    public set text(value: Json | undefined) {
        this._text = value;
    };
}
