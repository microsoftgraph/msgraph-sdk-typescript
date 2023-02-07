import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NumberValuePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The decimalSeparator property */
    private _decimalSeparator?: Json | undefined;
    /** The groupSeparator property */
    private _groupSeparator?: Json | undefined;
    /** The text property */
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
     * Instantiates a new numberValuePostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the decimalSeparator property value. The decimalSeparator property
     * @returns a Json
     */
    public get decimalSeparator() {
        return this._decimalSeparator;
    };
    /**
     * Sets the decimalSeparator property value. The decimalSeparator property
     * @param value Value to set for the decimalSeparator property.
     */
    public set decimalSeparator(value: Json | undefined) {
        this._decimalSeparator = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "decimalSeparator": n => { this.decimalSeparator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "groupSeparator": n => { this.groupSeparator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "text": n => { this.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the groupSeparator property value. The groupSeparator property
     * @returns a Json
     */
    public get groupSeparator() {
        return this._groupSeparator;
    };
    /**
     * Sets the groupSeparator property value. The groupSeparator property
     * @param value Value to set for the groupSeparator property.
     */
    public set groupSeparator(value: Json | undefined) {
        this._groupSeparator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("decimalSeparator", this.decimalSeparator);
        writer.writeObjectValue<Json>("groupSeparator", this.groupSeparator);
        writer.writeObjectValue<Json>("text", this.text);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the text property value. The text property
     * @returns a Json
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. The text property
     * @param value Value to set for the text property.
     */
    public set text(value: Json | undefined) {
        this._text = value;
    };
}
