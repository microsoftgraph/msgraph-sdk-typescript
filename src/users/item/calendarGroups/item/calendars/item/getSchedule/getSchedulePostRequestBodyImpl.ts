import {DateTimeTimeZoneImpl} from '../../../../../../../models/';
import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../../../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from '../../../../../../../models/dateTimeTimeZone';
import {GetSchedulePostRequestBody} from './getSchedulePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getSchedule method. */
export class GetSchedulePostRequestBodyImpl implements AdditionalDataHolder, GetSchedulePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The AvailabilityViewInterval property */
    public availabilityViewInterval?: number | undefined;
    /** The EndTime property */
    public endTime?: DateTimeTimeZone | undefined;
    /** The Schedules property */
    public schedules?: string[] | undefined;
    /** The StartTime property */
    public startTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new getSchedulePostRequestBody and sets the default values.
     * @param getSchedulePostRequestBodyParameterValue 
     */
    public constructor(getSchedulePostRequestBodyParameterValue?: GetSchedulePostRequestBody | undefined) {
        this.additionalData = getSchedulePostRequestBodyParameterValue?.additionalData ? getSchedulePostRequestBodyParameterValue?.additionalData! : {}
        this.availabilityViewInterval = getSchedulePostRequestBodyParameterValue?.availabilityViewInterval ;
        this.endTime = getSchedulePostRequestBodyParameterValue?.endTime ;
        this.schedules = getSchedulePostRequestBodyParameterValue?.schedules ;
        this.startTime = getSchedulePostRequestBodyParameterValue?.startTime ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.availabilityViewInterval){
        writer.writeNumberValue("availabilityViewInterval", this.availabilityViewInterval);
        }
        if(this.endTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("endTime", new DateTimeTimeZoneImpl(this.endTime));
        }
        if(this.schedules){
        writer.writeCollectionOfPrimitiveValues<string>("schedules", this.schedules);
        }
        if(this.startTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("startTime", new DateTimeTimeZoneImpl(this.startTime));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
