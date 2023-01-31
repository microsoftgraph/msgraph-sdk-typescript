import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _hour?: Json | undefined;
    private _minute?: Json | undefined;
    private _second?: Json | undefined;
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
     * Instantiates a new timePostRequestBody and sets the default values.
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
            "hour": n => { this.hour = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "minute": n => { this.minute = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "second": n => { this.second = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hour property value. 
     * @returns a Json
     */
    public get hour() {
        return this._hour;
    };
    /**
     * Sets the hour property value. 
     * @param value Value to set for the hour property.
     */
    public set hour(value: Json | undefined) {
        this._hour = value;
    };
    /**
     * Gets the minute property value. 
     * @returns a Json
     */
    public get minute() {
        return this._minute;
    };
    /**
     * Sets the minute property value. 
     * @param value Value to set for the minute property.
     */
    public set minute(value: Json | undefined) {
        this._minute = value;
    };
    /**
     * Gets the second property value. 
     * @returns a Json
     */
    public get second() {
        return this._second;
    };
    /**
     * Sets the second property value. 
     * @param value Value to set for the second property.
     */
    public set second(value: Json | undefined) {
        this._second = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("hour", this.hour);
        writer.writeObjectValue<Json>("minute", this.minute);
        writer.writeObjectValue<Json>("second", this.second);
        writer.writeAdditionalData(this.additionalData);
    };
}
