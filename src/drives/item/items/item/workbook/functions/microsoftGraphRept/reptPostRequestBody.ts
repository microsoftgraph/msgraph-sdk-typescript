import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReptPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _numberTimes?: Json | undefined;
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
     * Instantiates a new reptPostRequestBody and sets the default values.
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
            "numberTimes": n => { this.numberTimes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "text": n => { this.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the numberTimes property value. 
     * @returns a Json
     */
    public get numberTimes() {
        return this._numberTimes;
    };
    /**
     * Sets the numberTimes property value. 
     * @param value Value to set for the numberTimes property.
     */
    public set numberTimes(value: Json | undefined) {
        this._numberTimes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("numberTimes", this.numberTimes);
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
