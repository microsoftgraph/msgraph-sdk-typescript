import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ErfPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _lowerLimit?: Json | undefined;
    private _upperLimit?: Json | undefined;
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
     * Instantiates a new erfPostRequestBody and sets the default values.
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
            "lowerLimit": n => { this.lowerLimit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "upperLimit": n => { this.upperLimit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lowerLimit property value. 
     * @returns a Json
     */
    public get lowerLimit() {
        return this._lowerLimit;
    };
    /**
     * Sets the lowerLimit property value. 
     * @param value Value to set for the lowerLimit property.
     */
    public set lowerLimit(value: Json | undefined) {
        this._lowerLimit = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("lowerLimit", this.lowerLimit);
        writer.writeObjectValue<Json>("upperLimit", this.upperLimit);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the upperLimit property value. 
     * @returns a Json
     */
    public get upperLimit() {
        return this._upperLimit;
    };
    /**
     * Sets the upperLimit property value. 
     * @param value Value to set for the upperLimit property.
     */
    public set upperLimit(value: Json | undefined) {
        this._upperLimit = value;
    };
}
