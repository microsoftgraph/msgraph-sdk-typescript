import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubstitutePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _instanceNum?: Json | undefined;
    private _newText?: Json | undefined;
    private _oldText?: Json | undefined;
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
     * Instantiates a new substitutePostRequestBody and sets the default values.
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
            "instanceNum": n => { this.instanceNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "newText": n => { this.newText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "oldText": n => { this.oldText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "text": n => { this.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the instanceNum property value. 
     * @returns a Json
     */
    public get instanceNum() {
        return this._instanceNum;
    };
    /**
     * Sets the instanceNum property value. 
     * @param value Value to set for the instanceNum property.
     */
    public set instanceNum(value: Json | undefined) {
        this._instanceNum = value;
    };
    /**
     * Gets the newText property value. 
     * @returns a Json
     */
    public get newText() {
        return this._newText;
    };
    /**
     * Sets the newText property value. 
     * @param value Value to set for the newText property.
     */
    public set newText(value: Json | undefined) {
        this._newText = value;
    };
    /**
     * Gets the oldText property value. 
     * @returns a Json
     */
    public get oldText() {
        return this._oldText;
    };
    /**
     * Sets the oldText property value. 
     * @param value Value to set for the oldText property.
     */
    public set oldText(value: Json | undefined) {
        this._oldText = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("instanceNum", this.instanceNum);
        writer.writeObjectValue<Json>("newText", this.newText);
        writer.writeObjectValue<Json>("oldText", this.oldText);
        writer.writeObjectValue<Json>("text", this.text);
        writer.writeAdditionalData(this.additionalData);
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
