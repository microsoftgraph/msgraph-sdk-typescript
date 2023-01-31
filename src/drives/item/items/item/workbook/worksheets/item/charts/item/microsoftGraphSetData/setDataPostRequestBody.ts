import {Json} from '../../../../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SetDataPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _seriesBy?: string | undefined;
    private _sourceData?: Json | undefined;
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
     * Instantiates a new setDataPostRequestBody and sets the default values.
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
            "seriesBy": n => { this.seriesBy = n.getStringValue(); },
            "sourceData": n => { this.sourceData = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("seriesBy", this.seriesBy);
        writer.writeObjectValue<Json>("sourceData", this.sourceData);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the seriesBy property value. 
     * @returns a string
     */
    public get seriesBy() {
        return this._seriesBy;
    };
    /**
     * Sets the seriesBy property value. 
     * @param value Value to set for the seriesBy property.
     */
    public set seriesBy(value: string | undefined) {
        this._seriesBy = value;
    };
    /**
     * Gets the sourceData property value. 
     * @returns a Json
     */
    public get sourceData() {
        return this._sourceData;
    };
    /**
     * Sets the sourceData property value. 
     * @param value Value to set for the sourceData property.
     */
    public set sourceData(value: Json | undefined) {
        this._sourceData = value;
    };
}
