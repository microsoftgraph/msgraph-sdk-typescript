import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PercentRank_IncPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The array property */
    private _array?: Json | undefined;
    /** The significance property */
    private _significance?: Json | undefined;
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
     * Gets the array property value. The array property
     * @returns a Json
     */
    public get array() {
        return this._array;
    };
    /**
     * Sets the array property value. The array property
     * @param value Value to set for the array property.
     */
    public set array(value: Json | undefined) {
        this._array = value;
    };
    /**
     * Instantiates a new percentRank_IncPostRequestBody and sets the default values.
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
            "array": n => { this.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "significance": n => { this.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "x": n => { this.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("array", this.array);
        writer.writeObjectValue<Json>("significance", this.significance);
        writer.writeObjectValue<Json>("x", this.x);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the significance property value. The significance property
     * @returns a Json
     */
    public get significance() {
        return this._significance;
    };
    /**
     * Sets the significance property value. The significance property
     * @param value Value to set for the significance property.
     */
    public set significance(value: Json | undefined) {
        this._significance = value;
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
