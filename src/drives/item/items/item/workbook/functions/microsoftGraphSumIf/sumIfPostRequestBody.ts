import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SumIfPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The criteria property */
    private _criteria?: Json | undefined;
    /** The range property */
    private _range?: Json | undefined;
    /** The sumRange property */
    private _sumRange?: Json | undefined;
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
     * Instantiates a new sumIfPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the criteria property value. The criteria property
     * @returns a Json
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Sets the criteria property value. The criteria property
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: Json | undefined) {
        this._criteria = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "criteria": n => { this.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "range": n => { this.range = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "sumRange": n => { this.sumRange = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the range property value. The range property
     * @returns a Json
     */
    public get range() {
        return this._range;
    };
    /**
     * Sets the range property value. The range property
     * @param value Value to set for the range property.
     */
    public set range(value: Json | undefined) {
        this._range = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("criteria", this.criteria);
        writer.writeObjectValue<Json>("range", this.range);
        writer.writeObjectValue<Json>("sumRange", this.sumRange);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sumRange property value. The sumRange property
     * @returns a Json
     */
    public get sumRange() {
        return this._sumRange;
    };
    /**
     * Sets the sumRange property value. The sumRange property
     * @param value Value to set for the sumRange property.
     */
    public set sumRange(value: Json | undefined) {
        this._sumRange = value;
    };
}
