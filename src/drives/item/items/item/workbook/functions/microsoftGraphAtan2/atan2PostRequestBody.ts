import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Atan2PostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _xNum?: Json | undefined;
    private _yNum?: Json | undefined;
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
     * Instantiates a new atan2PostRequestBody and sets the default values.
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
            "xNum": n => { this.xNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "yNum": n => { this.yNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("xNum", this.xNum);
        writer.writeObjectValue<Json>("yNum", this.yNum);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the xNum property value. 
     * @returns a Json
     */
    public get xNum() {
        return this._xNum;
    };
    /**
     * Sets the xNum property value. 
     * @param value Value to set for the xNum property.
     */
    public set xNum(value: Json | undefined) {
        this._xNum = value;
    };
    /**
     * Gets the yNum property value. 
     * @returns a Json
     */
    public get yNum() {
        return this._yNum;
    };
    /**
     * Sets the yNum property value. 
     * @param value Value to set for the yNum property.
     */
    public set yNum(value: Json | undefined) {
        this._yNum = value;
    };
}
