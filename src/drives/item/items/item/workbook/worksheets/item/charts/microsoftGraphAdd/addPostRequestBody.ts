import {Json} from '../../../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The seriesBy property */
    private _seriesBy?: string | undefined;
    /** The sourceData property */
    private _sourceData?: Json | undefined;
    /** The type property */
    private _type?: string | undefined;
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
     * Instantiates a new addPostRequestBody and sets the default values.
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
            "type": n => { this.type = n.getStringValue(); },
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
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the seriesBy property value. The seriesBy property
     * @returns a string
     */
    public get seriesBy() {
        return this._seriesBy;
    };
    /**
     * Sets the seriesBy property value. The seriesBy property
     * @param value Value to set for the seriesBy property.
     */
    public set seriesBy(value: string | undefined) {
        this._seriesBy = value;
    };
    /**
     * Gets the sourceData property value. The sourceData property
     * @returns a Json
     */
    public get sourceData() {
        return this._sourceData;
    };
    /**
     * Sets the sourceData property value. The sourceData property
     * @param value Value to set for the sourceData property.
     */
    public set sourceData(value: Json | undefined) {
        this._sourceData = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
