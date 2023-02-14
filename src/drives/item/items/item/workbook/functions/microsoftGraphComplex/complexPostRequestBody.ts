import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ComplexPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The iNum property */
    private _iNum?: Json | undefined;
    /** The realNum property */
    private _realNum?: Json | undefined;
    /** The suffix property */
    private _suffix?: Json | undefined;
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
     * Instantiates a new complexPostRequestBody and sets the default values.
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
            "iNum": n => { this.iNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "realNum": n => { this.realNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "suffix": n => { this.suffix = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the iNum property value. The iNum property
     * @returns a Json
     */
    public get iNum() {
        return this._iNum;
    };
    /**
     * Sets the iNum property value. The iNum property
     * @param value Value to set for the iNum property.
     */
    public set iNum(value: Json | undefined) {
        this._iNum = value;
    };
    /**
     * Gets the realNum property value. The realNum property
     * @returns a Json
     */
    public get realNum() {
        return this._realNum;
    };
    /**
     * Sets the realNum property value. The realNum property
     * @param value Value to set for the realNum property.
     */
    public set realNum(value: Json | undefined) {
        this._realNum = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("iNum", this.iNum);
        writer.writeObjectValue<Json>("realNum", this.realNum);
        writer.writeObjectValue<Json>("suffix", this.suffix);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the suffix property value. The suffix property
     * @returns a Json
     */
    public get suffix() {
        return this._suffix;
    };
    /**
     * Sets the suffix property value. The suffix property
     * @param value Value to set for the suffix property.
     */
    public set suffix(value: Json | undefined) {
        this._suffix = value;
    };
}
