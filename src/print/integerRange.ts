import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class IntegerRange implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The inclusive upper bound of the integer range.  */
    private _end?: Int64 | undefined;
    /** The inclusive lower bound of the integer range.  */
    private _start?: Int64 | undefined;
    /**
     * Instantiates a new integerRange and sets the default values.
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
     * Gets the end property value. The inclusive upper bound of the integer range.
     * @returns a int64
     */
    public get end() {
        return this._end;
    };
    /**
     * Gets the start property value. The inclusive lower bound of the integer range.
     * @returns a int64
     */
    public get start() {
        return this._start;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["end", (o, n) => { (o as unknown as IntegerRange).end = n.getObjectValue<Int64>(Int64); }],
            ["start", (o, n) => { (o as unknown as IntegerRange).start = n.getObjectValue<Int64>(Int64); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Int64>("end", this.end);
        writer.writeObjectValue<Int64>("start", this.start);
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
     * Sets the end property value. The inclusive upper bound of the integer range.
     * @param value Value to set for the end property.
     */
    public set end(value: Int64 | undefined) {
        this._end = value;
    };
    /**
     * Sets the start property value. The inclusive lower bound of the integer range.
     * @param value Value to set for the start property.
     */
    public set start(value: Int64 | undefined) {
        this._start = value;
    };
}
