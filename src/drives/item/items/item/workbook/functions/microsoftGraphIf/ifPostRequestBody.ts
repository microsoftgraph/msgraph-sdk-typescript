import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IfPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _logicalTest?: Json | undefined;
    private _valueIfFalse?: Json | undefined;
    private _valueIfTrue?: Json | undefined;
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
     * Instantiates a new ifPostRequestBody and sets the default values.
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
            "logicalTest": n => { this.logicalTest = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "valueIfFalse": n => { this.valueIfFalse = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "valueIfTrue": n => { this.valueIfTrue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the logicalTest property value. 
     * @returns a Json
     */
    public get logicalTest() {
        return this._logicalTest;
    };
    /**
     * Sets the logicalTest property value. 
     * @param value Value to set for the logicalTest property.
     */
    public set logicalTest(value: Json | undefined) {
        this._logicalTest = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("logicalTest", this.logicalTest);
        writer.writeObjectValue<Json>("valueIfFalse", this.valueIfFalse);
        writer.writeObjectValue<Json>("valueIfTrue", this.valueIfTrue);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the valueIfFalse property value. 
     * @returns a Json
     */
    public get valueIfFalse() {
        return this._valueIfFalse;
    };
    /**
     * Sets the valueIfFalse property value. 
     * @param value Value to set for the valueIfFalse property.
     */
    public set valueIfFalse(value: Json | undefined) {
        this._valueIfFalse = value;
    };
    /**
     * Gets the valueIfTrue property value. 
     * @returns a Json
     */
    public get valueIfTrue() {
        return this._valueIfTrue;
    };
    /**
     * Sets the valueIfTrue property value. 
     * @param value Value to set for the valueIfTrue property.
     */
    public set valueIfTrue(value: Json | undefined) {
        this._valueIfTrue = value;
    };
}
