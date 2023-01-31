import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MidPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _numChars?: Json | undefined;
    private _startNum?: Json | undefined;
    private _text?: Json | undefined;
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
     * Instantiates a new midPostRequestBody and sets the default values.
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
            "numChars": n => { this.numChars = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "startNum": n => { this.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "text": n => { this.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the numChars property value. 
     * @returns a Json
     */
    public get numChars() {
        return this._numChars;
    };
    /**
     * Sets the numChars property value. 
     * @param value Value to set for the numChars property.
     */
    public set numChars(value: Json | undefined) {
        this._numChars = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("numChars", this.numChars);
        writer.writeObjectValue<Json>("startNum", this.startNum);
        writer.writeObjectValue<Json>("text", this.text);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startNum property value. 
     * @returns a Json
     */
    public get startNum() {
        return this._startNum;
    };
    /**
     * Sets the startNum property value. 
     * @param value Value to set for the startNum property.
     */
    public set startNum(value: Json | undefined) {
        this._startNum = value;
    };
    /**
     * Gets the text property value. 
     * @returns a Json
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. 
     * @param value Value to set for the text property.
     */
    public set text(value: Json | undefined) {
        this._text = value;
    };
}
