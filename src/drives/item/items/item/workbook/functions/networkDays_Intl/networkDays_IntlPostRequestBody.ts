import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NetworkDays_IntlPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The endDate property */
    private _endDate?: Json | undefined;
    /** The holidays property */
    private _holidays?: Json | undefined;
    /** The startDate property */
    private _startDate?: Json | undefined;
    /** The weekend property */
    private _weekend?: Json | undefined;
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
     * Instantiates a new networkDays_IntlPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endDate property value. The endDate property
     * @returns a Json
     */
    public get endDate() {
        return this._endDate;
    };
    /**
     * Sets the endDate property value. The endDate property
     * @param value Value to set for the endDate property.
     */
    public set endDate(value: Json | undefined) {
        this._endDate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDate": n => { this.endDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "holidays": n => { this.holidays = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "startDate": n => { this.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "weekend": n => { this.weekend = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the holidays property value. The holidays property
     * @returns a Json
     */
    public get holidays() {
        return this._holidays;
    };
    /**
     * Sets the holidays property value. The holidays property
     * @param value Value to set for the holidays property.
     */
    public set holidays(value: Json | undefined) {
        this._holidays = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("endDate", this.endDate);
        writer.writeObjectValue<Json>("holidays", this.holidays);
        writer.writeObjectValue<Json>("startDate", this.startDate);
        writer.writeObjectValue<Json>("weekend", this.weekend);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDate property value. The startDate property
     * @returns a Json
     */
    public get startDate() {
        return this._startDate;
    };
    /**
     * Sets the startDate property value. The startDate property
     * @param value Value to set for the startDate property.
     */
    public set startDate(value: Json | undefined) {
        this._startDate = value;
    };
    /**
     * Gets the weekend property value. The weekend property
     * @returns a Json
     */
    public get weekend() {
        return this._weekend;
    };
    /**
     * Sets the weekend property value. The weekend property
     * @param value Value to set for the weekend property.
     */
    public set weekend(value: Json | undefined) {
        this._weekend = value;
    };
}
