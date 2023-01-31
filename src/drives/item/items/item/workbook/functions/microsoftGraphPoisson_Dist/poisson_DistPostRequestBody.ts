import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Poisson_DistPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _cumulative?: Json | undefined;
    private _mean?: Json | undefined;
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
     * Instantiates a new poisson_DistPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cumulative property value. 
     * @returns a Json
     */
    public get cumulative() {
        return this._cumulative;
    };
    /**
     * Sets the cumulative property value. 
     * @param value Value to set for the cumulative property.
     */
    public set cumulative(value: Json | undefined) {
        this._cumulative = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cumulative": n => { this.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "mean": n => { this.mean = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "x": n => { this.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the mean property value. 
     * @returns a Json
     */
    public get mean() {
        return this._mean;
    };
    /**
     * Sets the mean property value. 
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
        writer.writeObjectValue<Json>("cumulative", this.cumulative);
        writer.writeObjectValue<Json>("mean", this.mean);
        writer.writeObjectValue<Json>("x", this.x);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the x property value. 
     * @returns a Json
     */
    public get x() {
        return this._x;
    };
    /**
     * Sets the x property value. 
     * @param value Value to set for the x property.
     */
    public set x(value: Json | undefined) {
        this._x = value;
    };
}
