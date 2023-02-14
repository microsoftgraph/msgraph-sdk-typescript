import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DatePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The day property */
    private _day?: Json | undefined;
    /** The month property */
    private _month?: Json | undefined;
    /** The year property */
    private _year?: Json | undefined;
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
     * Instantiates a new datePostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the day property value. The day property
     * @returns a Json
     */
    public get day() {
        return this._day;
    };
    /**
     * Sets the day property value. The day property
     * @param value Value to set for the day property.
     */
    public set day(value: Json | undefined) {
        this._day = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "day": n => { this.day = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "month": n => { this.month = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "year": n => { this.year = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the month property value. The month property
     * @returns a Json
     */
    public get month() {
        return this._month;
    };
    /**
     * Sets the month property value. The month property
     * @param value Value to set for the month property.
     */
    public set month(value: Json | undefined) {
        this._month = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("day", this.day);
        writer.writeObjectValue<Json>("month", this.month);
        writer.writeObjectValue<Json>("year", this.year);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the year property value. The year property
     * @returns a Json
     */
    public get year() {
        return this._year;
    };
    /**
     * Sets the year property value. The year property
     * @param value Value to set for the year property.
     */
    public set year(value: Json | undefined) {
        this._year = value;
    };
}
