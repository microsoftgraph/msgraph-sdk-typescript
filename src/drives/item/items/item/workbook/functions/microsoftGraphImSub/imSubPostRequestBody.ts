import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImSubPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _inumber1?: Json | undefined;
    private _inumber2?: Json | undefined;
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
     * Instantiates a new imSubPostRequestBody and sets the default values.
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
            "inumber1": n => { this.inumber1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "inumber2": n => { this.inumber2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the inumber1 property value. 
     * @returns a Json
     */
    public get inumber1() {
        return this._inumber1;
    };
    /**
     * Sets the inumber1 property value. 
     * @param value Value to set for the inumber1 property.
     */
    public set inumber1(value: Json | undefined) {
        this._inumber1 = value;
    };
    /**
     * Gets the inumber2 property value. 
     * @returns a Json
     */
    public get inumber2() {
        return this._inumber2;
    };
    /**
     * Sets the inumber2 property value. 
     * @param value Value to set for the inumber2 property.
     */
    public set inumber2(value: Json | undefined) {
        this._inumber2 = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("inumber1", this.inumber1);
        writer.writeObjectValue<Json>("inumber2", this.inumber2);
        writer.writeAdditionalData(this.additionalData);
    };
}
