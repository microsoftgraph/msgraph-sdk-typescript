import {DateTimeTimeZone} from '../../../../../../models/';
import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GetSchedulePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The AvailabilityViewInterval property */
    private _availabilityViewInterval?: number | undefined;
    /** The EndTime property */
    private _endTime?: DateTimeTimeZone | undefined;
    /** The Schedules property */
    private _schedules?: string[] | undefined;
    /** The StartTime property */
    private _startTime?: DateTimeTimeZone | undefined;
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
     * Gets the availabilityViewInterval property value. The AvailabilityViewInterval property
     * @returns a integer
     */
    public get availabilityViewInterval() {
        return this._availabilityViewInterval;
    };
    /**
     * Sets the availabilityViewInterval property value. The AvailabilityViewInterval property
     * @param value Value to set for the AvailabilityViewInterval property.
     */
    public set availabilityViewInterval(value: number | undefined) {
        this._availabilityViewInterval = value;
    };
    /**
     * Instantiates a new getSchedulePostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endTime property value. The EndTime property
     * @returns a dateTimeTimeZone
     */
    public get endTime() {
        return this._endTime;
    };
    /**
     * Sets the endTime property value. The EndTime property
     * @param value Value to set for the EndTime property.
     */
    public set endTime(value: DateTimeTimeZone | undefined) {
        this._endTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "availabilityViewInterval": n => { this.availabilityViewInterval = n.getNumberValue(); },
            "endTime": n => { this.endTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "schedules": n => { this.schedules = n.getCollectionOfPrimitiveValues<string>(); },
            "startTime": n => { this.startTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the schedules property value. The Schedules property
     * @returns a string
     */
    public get schedules() {
        return this._schedules;
    };
    /**
     * Sets the schedules property value. The Schedules property
     * @param value Value to set for the Schedules property.
     */
    public set schedules(value: string[] | undefined) {
        this._schedules = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("availabilityViewInterval", this.availabilityViewInterval);
        writer.writeObjectValue<DateTimeTimeZone>("endTime", this.endTime);
        writer.writeCollectionOfPrimitiveValues<string>("schedules", this.schedules);
        writer.writeObjectValue<DateTimeTimeZone>("startTime", this.startTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startTime property value. The StartTime property
     * @returns a dateTimeTimeZone
     */
    public get startTime() {
        return this._startTime;
    };
    /**
     * Sets the startTime property value. The StartTime property
     * @param value Value to set for the StartTime property.
     */
    public set startTime(value: DateTimeTimeZone | undefined) {
        this._startTime = value;
    };
}
