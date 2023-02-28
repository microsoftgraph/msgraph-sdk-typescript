import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AverageIfPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The averageRange property */
    private _averageRange?: Json | undefined;
    /** The criteria property */
    private _criteria?: Json | undefined;
    /** The range property */
    private _range?: Json | undefined;
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
     * Gets the averageRange property value. The averageRange property
     * @returns a Json
     */
    public get averageRange() {
        return this._averageRange;
    };
    /**
     * Sets the averageRange property value. The averageRange property
     * @param value Value to set for the averageRange property.
     */
    public set averageRange(value: Json | undefined) {
        this._averageRange = value;
    };
    /**
     * Instantiates a new averageIfPostRequestBody and sets the default values.
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
            "averageRange": n => { this.averageRange = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "criteria": n => { this.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "range": n => { this.range = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
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
        writer.writeObjectValue<Json>("averageRange", this.averageRange);
        writer.writeObjectValue<Json>("criteria", this.criteria);
        writer.writeObjectValue<Json>("range", this.range);
        writer.writeAdditionalData(this.additionalData);
    };
}
