import {DateTimeTimeZoneImpl} from '../../../models/';
import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from '../../../models/dateTimeTimeZone';
import {GetSchedulePostRequestBody} from './getSchedulePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getSchedule method. */
export class GetSchedulePostRequestBodyImpl implements GetSchedulePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
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
        if(value) {
            this._availabilityViewInterval = value;
        }
    };
    /**
     * Instantiates a new getSchedulePostRequestBody and sets the default values.
     * @param getSchedulePostRequestBodyParameterValue 
     */
    public constructor(getSchedulePostRequestBodyParameterValue?: GetSchedulePostRequestBody | undefined) {
        this._additionalData = getSchedulePostRequestBodyParameterValue?.additionalData ? getSchedulePostRequestBodyParameterValue?.additionalData! : {};
        this._availabilityViewInterval = getSchedulePostRequestBodyParameterValue?.availabilityViewInterval;
        this._endTime = getSchedulePostRequestBodyParameterValue?.endTime;
        this._schedules = getSchedulePostRequestBodyParameterValue?.schedules;
        this._startTime = getSchedulePostRequestBodyParameterValue?.startTime;
    };
    /**
     * Gets the endTime property value. The EndTime property
     * @returns a DateTimeTimeZoneInterface
     */
    public get endTime() {
        return this._endTime;
    };
    /**
     * Sets the endTime property value. The EndTime property
     * @param value Value to set for the EndTime property.
     */
    public set endTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._endTime = value instanceof DateTimeTimeZoneImpl? value : new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "availabilityViewInterval": n => { this.availabilityViewInterval = n.getNumberValue(); },
            "endTime": n => { this.endTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "schedules": n => { this.schedules = n.getCollectionOfPrimitiveValues<string>(); },
            "startTime": n => { this.startTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
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
        if(value) {
            this._schedules = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.availabilityViewInterval){
            writer.writeNumberValue("availabilityViewInterval", this.availabilityViewInterval);
        }
        if(this.endTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("endTime", (!this.endTime || this.endTime instanceof DateTimeTimeZoneImpl? this.endTime : new DateTimeTimeZoneImpl(this.endTime)));
        }
        if(this.schedules){
            writer.writeCollectionOfPrimitiveValues<string>("schedules", this.schedules);
        }
        if(this.startTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("startTime", (!this.startTime || this.startTime instanceof DateTimeTimeZoneImpl? this.startTime : new DateTimeTimeZoneImpl(this.startTime)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startTime property value. The StartTime property
     * @returns a DateTimeTimeZoneInterface
     */
    public get startTime() {
        return this._startTime;
    };
    /**
     * Sets the startTime property value. The StartTime property
     * @param value Value to set for the StartTime property.
     */
    public set startTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._startTime = value instanceof DateTimeTimeZoneImpl? value : new DateTimeTimeZoneImpl(value);
        }
    };
}
