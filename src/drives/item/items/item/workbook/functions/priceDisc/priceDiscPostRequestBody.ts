import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PriceDiscPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The basis property */
    private _basis?: Json | undefined;
    /** The discount property */
    private _discount?: Json | undefined;
    /** The maturity property */
    private _maturity?: Json | undefined;
    /** The redemption property */
    private _redemption?: Json | undefined;
    /** The settlement property */
    private _settlement?: Json | undefined;
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
     * Gets the basis property value. The basis property
     * @returns a Json
     */
    public get basis() {
        return this._basis;
    };
    /**
     * Sets the basis property value. The basis property
     * @param value Value to set for the basis property.
     */
    public set basis(value: Json | undefined) {
        this._basis = value;
    };
    /**
     * Instantiates a new priceDiscPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the discount property value. The discount property
     * @returns a Json
     */
    public get discount() {
        return this._discount;
    };
    /**
     * Sets the discount property value. The discount property
     * @param value Value to set for the discount property.
     */
    public set discount(value: Json | undefined) {
        this._discount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "basis": n => { this.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "discount": n => { this.discount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "maturity": n => { this.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "redemption": n => { this.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "settlement": n => { this.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the maturity property value. The maturity property
     * @returns a Json
     */
    public get maturity() {
        return this._maturity;
    };
    /**
     * Sets the maturity property value. The maturity property
     * @param value Value to set for the maturity property.
     */
    public set maturity(value: Json | undefined) {
        this._maturity = value;
    };
    /**
     * Gets the redemption property value. The redemption property
     * @returns a Json
     */
    public get redemption() {
        return this._redemption;
    };
    /**
     * Sets the redemption property value. The redemption property
     * @param value Value to set for the redemption property.
     */
    public set redemption(value: Json | undefined) {
        this._redemption = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("basis", this.basis);
        writer.writeObjectValue<Json>("discount", this.discount);
        writer.writeObjectValue<Json>("maturity", this.maturity);
        writer.writeObjectValue<Json>("redemption", this.redemption);
        writer.writeObjectValue<Json>("settlement", this.settlement);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the settlement property value. The settlement property
     * @returns a Json
     */
    public get settlement() {
        return this._settlement;
    };
    /**
     * Sets the settlement property value. The settlement property
     * @param value Value to set for the settlement property.
     */
    public set settlement(value: Json | undefined) {
        this._settlement = value;
    };
}
