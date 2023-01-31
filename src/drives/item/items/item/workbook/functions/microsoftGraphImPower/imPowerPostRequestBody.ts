import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImPowerPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _inumber?: Json | undefined;
    private _number?: Json | undefined;
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
     * Instantiates a new imPowerPostRequestBody and sets the default values.
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
            "inumber": n => { this.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "number": n => { this.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the inumber property value. 
     * @returns a Json
     */
    public get inumber() {
        return this._inumber;
    };
    /**
     * Sets the inumber property value. 
     * @param value Value to set for the inumber property.
     */
    public set inumber(value: Json | undefined) {
        this._inumber = value;
    };
    /**
     * Gets the number property value. 
     * @returns a Json
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. 
     * @param value Value to set for the number property.
     */
    public set number(value: Json | undefined) {
        this._number = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("inumber", this.inumber);
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeAdditionalData(this.additionalData);
    };
}
