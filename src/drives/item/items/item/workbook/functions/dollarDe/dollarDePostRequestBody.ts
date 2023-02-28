import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DollarDePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The fraction property */
    private _fraction?: Json | undefined;
    /** The fractionalDollar property */
    private _fractionalDollar?: Json | undefined;
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
     * Instantiates a new dollarDePostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the fraction property value. The fraction property
     * @returns a Json
     */
    public get fraction() {
        return this._fraction;
    };
    /**
     * Sets the fraction property value. The fraction property
     * @param value Value to set for the fraction property.
     */
    public set fraction(value: Json | undefined) {
        this._fraction = value;
    };
    /**
     * Gets the fractionalDollar property value. The fractionalDollar property
     * @returns a Json
     */
    public get fractionalDollar() {
        return this._fractionalDollar;
    };
    /**
     * Sets the fractionalDollar property value. The fractionalDollar property
     * @param value Value to set for the fractionalDollar property.
     */
    public set fractionalDollar(value: Json | undefined) {
        this._fractionalDollar = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fraction": n => { this.fraction = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "fractionalDollar": n => { this.fractionalDollar = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("fraction", this.fraction);
        writer.writeObjectValue<Json>("fractionalDollar", this.fractionalDollar);
        writer.writeAdditionalData(this.additionalData);
    };
}
