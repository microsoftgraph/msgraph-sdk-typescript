import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BasePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The minLength property */
    private _minLength?: Json | undefined;
    /** The number property */
    private _number?: Json | undefined;
    /** The radix property */
    private _radix?: Json | undefined;
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
     * Instantiates a new basePostRequestBody and sets the default values.
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
            "minLength": n => { this.minLength = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "number": n => { this.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "radix": n => { this.radix = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the minLength property value. The minLength property
     * @returns a Json
     */
    public get minLength() {
        return this._minLength;
    };
    /**
     * Sets the minLength property value. The minLength property
     * @param value Value to set for the minLength property.
     */
    public set minLength(value: Json | undefined) {
        this._minLength = value;
    };
    /**
     * Gets the number property value. The number property
     * @returns a Json
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. The number property
     * @param value Value to set for the number property.
     */
    public set number(value: Json | undefined) {
        this._number = value;
    };
    /**
     * Gets the radix property value. The radix property
     * @returns a Json
     */
    public get radix() {
        return this._radix;
    };
    /**
     * Sets the radix property value. The radix property
     * @param value Value to set for the radix property.
     */
    public set radix(value: Json | undefined) {
        this._radix = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("minLength", this.minLength);
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeObjectValue<Json>("radix", this.radix);
        writer.writeAdditionalData(this.additionalData);
    };
}
