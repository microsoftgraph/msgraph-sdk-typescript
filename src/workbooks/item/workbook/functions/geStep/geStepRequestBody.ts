import {Json} from '../../../../../models/microsoft/graph/json';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GeStepRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _number?: Json | undefined;
    private _step?: Json | undefined;
    /**
     * Instantiates a new geStepRequestBody and sets the default values.
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
     * Gets the number property value. 
     * @returns a Json
     */
    public get number() {
        return this._number;
    };
    /**
     * Gets the step property value. 
     * @returns a Json
     */
    public get step() {
        return this._step;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["number", (o, n) => { (o as unknown as GeStepRequestBody).number = n.getObjectValue<Json>(Json); }],
            ["step", (o, n) => { (o as unknown as GeStepRequestBody).step = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeObjectValue<Json>("step", this.step);
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
     * Sets the number property value. 
     * @param value Value to set for the number property.
     */
    public set number(value: Json | undefined) {
        this._number = value;
    };
    /**
     * Sets the step property value. 
     * @param value Value to set for the step property.
     */
    public set step(value: Json | undefined) {
        this._step = value;
    };
}