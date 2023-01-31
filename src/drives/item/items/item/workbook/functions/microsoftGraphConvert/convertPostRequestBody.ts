import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConvertPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _fromUnit?: Json | undefined;
    private _number?: Json | undefined;
    private _toUnit?: Json | undefined;
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
     * Instantiates a new convertPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the fromUnit property value. 
     * @returns a Json
     */
    public get fromUnit() {
        return this._fromUnit;
    };
    /**
     * Sets the fromUnit property value. 
     * @param value Value to set for the fromUnit property.
     */
    public set fromUnit(value: Json | undefined) {
        this._fromUnit = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fromUnit": n => { this.fromUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "number": n => { this.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "toUnit": n => { this.toUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the number property value. 
     * @returns a Json
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. 
     * @param value Value to set for the number property.
     */
    public set number(value: Json | undefined) {
        this._number = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("fromUnit", this.fromUnit);
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeObjectValue<Json>("toUnit", this.toUnit);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the toUnit property value. 
     * @returns a Json
     */
    public get toUnit() {
        return this._toUnit;
    };
    /**
     * Sets the toUnit property value. 
     * @param value Value to set for the toUnit property.
     */
    public set toUnit(value: Json | undefined) {
        this._toUnit = value;
    };
}
