import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class QuotientPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _denominator?: Json | undefined;
    private _numerator?: Json | undefined;
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
     * Instantiates a new quotientPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the denominator property value. 
     * @returns a Json
     */
    public get denominator() {
        return this._denominator;
    };
    /**
     * Sets the denominator property value. 
     * @param value Value to set for the denominator property.
     */
    public set denominator(value: Json | undefined) {
        this._denominator = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "denominator": n => { this.denominator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "numerator": n => { this.numerator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the numerator property value. 
     * @returns a Json
     */
    public get numerator() {
        return this._numerator;
    };
    /**
     * Sets the numerator property value. 
     * @param value Value to set for the numerator property.
     */
    public set numerator(value: Json | undefined) {
        this._numerator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("denominator", this.denominator);
        writer.writeObjectValue<Json>("numerator", this.numerator);
        writer.writeAdditionalData(this.additionalData);
    };
}
