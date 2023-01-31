import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Percentile_IncPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _array?: Json | undefined;
    private _k?: Json | undefined;
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
     * Gets the array property value. 
     * @returns a Json
     */
    public get array() {
        return this._array;
    };
    /**
     * Sets the array property value. 
     * @param value Value to set for the array property.
     */
    public set array(value: Json | undefined) {
        this._array = value;
    };
    /**
     * Instantiates a new percentile_IncPostRequestBody and sets the default values.
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
            "k": n => { this.k = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the k property value. 
     * @returns a Json
     */
    public get k() {
        return this._k;
    };
    /**
     * Sets the k property value. 
     * @param value Value to set for the k property.
     */
    public set k(value: Json | undefined) {
        this._k = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("array", this.array);
        writer.writeObjectValue<Json>("k", this.k);
        writer.writeAdditionalData(this.additionalData);
    };
}
