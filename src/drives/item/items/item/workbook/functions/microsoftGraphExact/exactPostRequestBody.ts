import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExactPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _text1?: Json | undefined;
    private _text2?: Json | undefined;
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
     * Instantiates a new exactPostRequestBody and sets the default values.
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
            "text1": n => { this.text1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "text2": n => { this.text2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("text1", this.text1);
        writer.writeObjectValue<Json>("text2", this.text2);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the text1 property value. 
     * @returns a Json
     */
    public get text1() {
        return this._text1;
    };
    /**
     * Sets the text1 property value. 
     * @param value Value to set for the text1 property.
     */
    public set text1(value: Json | undefined) {
        this._text1 = value;
    };
    /**
     * Gets the text2 property value. 
     * @returns a Json
     */
    public get text2() {
        return this._text2;
    };
    /**
     * Sets the text2 property value. 
     * @param value Value to set for the text2 property.
     */
    public set text2(value: Json | undefined) {
        this._text2 = value;
    };
}
