import {Json} from '../../../../../models/microsoft/graph/json';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Atan2RequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _xNum?: Json | undefined;
    private _yNum?: Json | undefined;
    /**
     * Instantiates a new atan2RequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the xNum property value. 
     * @returns a Json
     */
    public get xNum() {
        return this._xNum;
    };
    /**
     * Gets the yNum property value. 
     * @returns a Json
     */
    public get yNum() {
        return this._yNum;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["xNum", (o, n) => { (o as unknown as Atan2RequestBody).xNum = n.getObjectValue<Json>(Json); }],
            ["yNum", (o, n) => { (o as unknown as Atan2RequestBody).yNum = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("xNum", this.xNum);
        writer.writeObjectValue<Json>("yNum", this.yNum);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the xNum property value. 
     * @param value Value to set for the xNum property.
     */
    public set xNum(value: Json | undefined) {
        this._xNum = value;
    };
    /**
     * Sets the yNum property value. 
     * @param value Value to set for the yNum property.
     */
    public set yNum(value: Json | undefined) {
        this._yNum = value;
    };
}