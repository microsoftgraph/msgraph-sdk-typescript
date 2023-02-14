import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WeekNumPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The returnType property */
    private _returnType?: Json | undefined;
    /** The serialNumber property */
    private _serialNumber?: Json | undefined;
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
     * Instantiates a new weekNumPostRequestBody and sets the default values.
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
            "returnType": n => { this.returnType = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "serialNumber": n => { this.serialNumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the returnType property value. The returnType property
     * @returns a Json
     */
    public get returnType() {
        return this._returnType;
    };
    /**
     * Sets the returnType property value. The returnType property
     * @param value Value to set for the returnType property.
     */
    public set returnType(value: Json | undefined) {
        this._returnType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("returnType", this.returnType);
        writer.writeObjectValue<Json>("serialNumber", this.serialNumber);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serialNumber property value. The serialNumber property
     * @returns a Json
     */
    public get serialNumber() {
        return this._serialNumber;
    };
    /**
     * Sets the serialNumber property value. The serialNumber property
     * @param value Value to set for the serialNumber property.
     */
    public set serialNumber(value: Json | undefined) {
        this._serialNumber = value;
    };
}
