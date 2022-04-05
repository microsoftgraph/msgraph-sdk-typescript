import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalculatedColumn implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** For dateTime output types, the format of the value. Must be one of dateOnly or dateTime.  */
    private _format?: string | undefined;
    /** The formula used to compute the value for this column.  */
    private _formula?: string | undefined;
    /** The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text.  */
    private _outputType?: string | undefined;
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
     * Instantiates a new calculatedColumn and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the format property value. For dateTime output types, the format of the value. Must be one of dateOnly or dateTime.
     * @returns a string
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. For dateTime output types, the format of the value. Must be one of dateOnly or dateTime.
     * @param value Value to set for the format property.
     */
    public set format(value: string | undefined) {
        this._format = value;
    };
    /**
     * Gets the formula property value. The formula used to compute the value for this column.
     * @returns a string
     */
    public get formula() {
        return this._formula;
    };
    /**
     * Sets the formula property value. The formula used to compute the value for this column.
     * @param value Value to set for the formula property.
     */
    public set formula(value: string | undefined) {
        this._formula = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "format": (o, n) => { (o as unknown as CalculatedColumn).format = n.getStringValue(); },
            "formula": (o, n) => { (o as unknown as CalculatedColumn).formula = n.getStringValue(); },
            "outputType": (o, n) => { (o as unknown as CalculatedColumn).outputType = n.getStringValue(); },
        };
    };
    /**
     * Gets the outputType property value. The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text.
     * @returns a string
     */
    public get outputType() {
        return this._outputType;
    };
    /**
     * Sets the outputType property value. The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text.
     * @param value Value to set for the outputType property.
     */
    public set outputType(value: string | undefined) {
        this._outputType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("format", this.format);
        writer.writeStringValue("formula", this.formula);
        writer.writeStringValue("outputType", this.outputType);
        writer.writeAdditionalData(this.additionalData);
    };
}
