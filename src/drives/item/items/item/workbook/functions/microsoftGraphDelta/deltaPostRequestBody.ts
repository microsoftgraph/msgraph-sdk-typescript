import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeltaPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _number1?: Json | undefined;
    private _number2?: Json | undefined;
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
     * Instantiates a new deltaPostRequestBody and sets the default values.
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
            "number1": n => { this.number1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "number2": n => { this.number2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the number1 property value. 
     * @returns a Json
     */
    public get number1() {
        return this._number1;
    };
    /**
     * Sets the number1 property value. 
     * @param value Value to set for the number1 property.
     */
    public set number1(value: Json | undefined) {
        this._number1 = value;
    };
    /**
     * Gets the number2 property value. 
     * @returns a Json
     */
    public get number2() {
        return this._number2;
    };
    /**
     * Sets the number2 property value. 
     * @param value Value to set for the number2 property.
     */
    public set number2(value: Json | undefined) {
        this._number2 = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("number1", this.number1);
        writer.writeObjectValue<Json>("number2", this.number2);
        writer.writeAdditionalData(this.additionalData);
    };
}
