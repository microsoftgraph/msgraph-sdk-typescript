import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DollarFrPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _decimalDollar?: Json | undefined;
    private _fraction?: Json | undefined;
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
     * Instantiates a new dollarFrPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the decimalDollar property value. 
     * @returns a Json
     */
    public get decimalDollar() {
        return this._decimalDollar;
    };
    /**
     * Sets the decimalDollar property value. 
     * @param value Value to set for the decimalDollar property.
     */
    public set decimalDollar(value: Json | undefined) {
        this._decimalDollar = value;
    };
    /**
     * Gets the fraction property value. 
     * @returns a Json
     */
    public get fraction() {
        return this._fraction;
    };
    /**
     * Sets the fraction property value. 
     * @param value Value to set for the fraction property.
     */
    public set fraction(value: Json | undefined) {
        this._fraction = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "decimalDollar": n => { this.decimalDollar = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "fraction": n => { this.fraction = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("decimalDollar", this.decimalDollar);
        writer.writeObjectValue<Json>("fraction", this.fraction);
        writer.writeAdditionalData(this.additionalData);
    };
}
