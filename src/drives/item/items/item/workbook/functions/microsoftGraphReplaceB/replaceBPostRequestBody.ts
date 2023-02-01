import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReplaceBPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The newText property */
    private _newText?: Json | undefined;
    /** The numBytes property */
    private _numBytes?: Json | undefined;
    /** The oldText property */
    private _oldText?: Json | undefined;
    /** The startNum property */
    private _startNum?: Json | undefined;
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
     * Instantiates a new replaceBPostRequestBody and sets the default values.
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
            "newText": n => { this.newText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "numBytes": n => { this.numBytes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "oldText": n => { this.oldText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "startNum": n => { this.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the newText property value. The newText property
     * @returns a Json
     */
    public get newText() {
        return this._newText;
    };
    /**
     * Sets the newText property value. The newText property
     * @param value Value to set for the newText property.
     */
    public set newText(value: Json | undefined) {
        this._newText = value;
    };
    /**
     * Gets the numBytes property value. The numBytes property
     * @returns a Json
     */
    public get numBytes() {
        return this._numBytes;
    };
    /**
     * Sets the numBytes property value. The numBytes property
     * @param value Value to set for the numBytes property.
     */
    public set numBytes(value: Json | undefined) {
        this._numBytes = value;
    };
    /**
     * Gets the oldText property value. The oldText property
     * @returns a Json
     */
    public get oldText() {
        return this._oldText;
    };
    /**
     * Sets the oldText property value. The oldText property
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
        writer.writeObjectValue<Json>("newText", this.newText);
        writer.writeObjectValue<Json>("numBytes", this.numBytes);
        writer.writeObjectValue<Json>("oldText", this.oldText);
        writer.writeObjectValue<Json>("startNum", this.startNum);
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
}
