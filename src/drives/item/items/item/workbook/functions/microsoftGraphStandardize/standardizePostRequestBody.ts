import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StandardizePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The mean property */
    private _mean?: Json | undefined;
    /** The standardDev property */
    private _standardDev?: Json | undefined;
    /** The x property */
    private _x?: Json | undefined;
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
     * Instantiates a new standardizePostRequestBody and sets the default values.
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
            "mean": n => { this.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "standardDev": n => { this.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "x": n => { this.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the mean property value. The mean property
     * @returns a Json
     */
    public get mean() {
        return this._mean;
    };
    /**
     * Sets the mean property value. The mean property
     * @param value Value to set for the mean property.
     */
    public set mean(value: Json | undefined) {
        this._mean = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("mean", this.mean);
        writer.writeObjectValue<Json>("standardDev", this.standardDev);
        writer.writeObjectValue<Json>("x", this.x);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the standardDev property value. The standardDev property
     * @returns a Json
     */
    public get standardDev() {
        return this._standardDev;
    };
    /**
     * Sets the standardDev property value. The standardDev property
     * @param value Value to set for the standardDev property.
     */
    public set standardDev(value: Json | undefined) {
        this._standardDev = value;
    };
    /**
     * Gets the x property value. The x property
     * @returns a Json
     */
    public get x() {
        return this._x;
    };
    /**
     * Sets the x property value. The x property
     * @param value Value to set for the x property.
     */
    public set x(value: Json | undefined) {
        this._x = value;
    };
}
