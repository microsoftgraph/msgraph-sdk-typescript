import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Confidence_NormPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _alpha?: Json | undefined;
    private _size?: Json | undefined;
    private _standardDev?: Json | undefined;
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
     * Gets the alpha property value. 
     * @returns a Json
     */
    public get alpha() {
        return this._alpha;
    };
    /**
     * Sets the alpha property value. 
     * @param value Value to set for the alpha property.
     */
    public set alpha(value: Json | undefined) {
        this._alpha = value;
    };
    /**
     * Instantiates a new confidence_NormPostRequestBody and sets the default values.
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
            "alpha": n => { this.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "size": n => { this.size = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "standardDev": n => { this.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("alpha", this.alpha);
        writer.writeObjectValue<Json>("size", this.size);
        writer.writeObjectValue<Json>("standardDev", this.standardDev);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size property value. 
     * @returns a Json
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. 
     * @param value Value to set for the size property.
     */
    public set size(value: Json | undefined) {
        this._size = value;
    };
    /**
     * Gets the standardDev property value. 
     * @returns a Json
     */
    public get standardDev() {
        return this._standardDev;
    };
    /**
     * Sets the standardDev property value. 
     * @param value Value to set for the standardDev property.
     */
    public set standardDev(value: Json | undefined) {
        this._standardDev = value;
    };
}
