import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RandBetweenPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _bottom?: Json | undefined;
    private _top?: Json | undefined;
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
     * Gets the bottom property value. 
     * @returns a Json
     */
    public get bottom() {
        return this._bottom;
    };
    /**
     * Sets the bottom property value. 
     * @param value Value to set for the bottom property.
     */
    public set bottom(value: Json | undefined) {
        this._bottom = value;
    };
    /**
     * Instantiates a new randBetweenPostRequestBody and sets the default values.
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
            "bottom": n => { this.bottom = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "top": n => { this.top = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("bottom", this.bottom);
        writer.writeObjectValue<Json>("top", this.top);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the top property value. 
     * @returns a Json
     */
    public get top() {
        return this._top;
    };
    /**
     * Sets the top property value. 
     * @param value Value to set for the top property.
     */
    public set top(value: Json | undefined) {
        this._top = value;
    };
}
