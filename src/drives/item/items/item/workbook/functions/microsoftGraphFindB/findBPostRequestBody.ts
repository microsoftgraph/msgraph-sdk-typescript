import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FindBPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The findText property */
    private _findText?: Json | undefined;
    /** The startNum property */
    private _startNum?: Json | undefined;
    /** The withinText property */
    private _withinText?: Json | undefined;
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
     * Instantiates a new findBPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the findText property value. The findText property
     * @returns a Json
     */
    public get findText() {
        return this._findText;
    };
    /**
     * Sets the findText property value. The findText property
     * @param value Value to set for the findText property.
     */
    public set findText(value: Json | undefined) {
        this._findText = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "findText": n => { this.findText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "startNum": n => { this.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "withinText": n => { this.withinText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("findText", this.findText);
        writer.writeObjectValue<Json>("startNum", this.startNum);
        writer.writeObjectValue<Json>("withinText", this.withinText);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startNum property value. The startNum property
     * @returns a Json
     */
    public get startNum() {
        return this._startNum;
    };
    /**
     * Sets the startNum property value. The startNum property
     * @param value Value to set for the startNum property.
     */
    public set startNum(value: Json | undefined) {
        this._startNum = value;
    };
    /**
     * Gets the withinText property value. The withinText property
     * @returns a Json
     */
    public get withinText() {
        return this._withinText;
    };
    /**
     * Sets the withinText property value. The withinText property
     * @param value Value to set for the withinText property.
     */
    public set withinText(value: Json | undefined) {
        this._withinText = value;
    };
}
