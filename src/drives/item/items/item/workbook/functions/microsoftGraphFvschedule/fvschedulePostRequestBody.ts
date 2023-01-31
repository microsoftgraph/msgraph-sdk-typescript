import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FvschedulePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _principal?: Json | undefined;
    private _schedule?: Json | undefined;
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
     * Instantiates a new fvschedulePostRequestBody and sets the default values.
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
            "principal": n => { this.principal = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "schedule": n => { this.schedule = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the principal property value. 
     * @returns a Json
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Sets the principal property value. 
     * @param value Value to set for the principal property.
     */
    public set principal(value: Json | undefined) {
        this._principal = value;
    };
    /**
     * Gets the schedule property value. 
     * @returns a Json
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. 
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: Json | undefined) {
        this._schedule = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("principal", this.principal);
        writer.writeObjectValue<Json>("schedule", this.schedule);
        writer.writeAdditionalData(this.additionalData);
    };
}
