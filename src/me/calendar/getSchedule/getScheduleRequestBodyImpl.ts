import {DateTimeTimeZoneImpl} from '../../../models/';
import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../models/createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from '../../../models/dateTimeTimeZone';
import {GetScheduleRequestBody} from './getScheduleRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getSchedule method.  */
export class GetScheduleRequestBodyImpl implements AdditionalDataHolder, GetScheduleRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The AvailabilityViewInterval property  */
    availabilityViewInterval?: number | undefined;
    /** The EndTime property  */
    endTime?: DateTimeTimeZone | undefined;
    /** The Schedules property  */
    schedules?: string[] | undefined;
    /** The StartTime property  */
    startTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new getScheduleRequestBody and sets the default values.
     * @param getScheduleRequestBodyParameterValue 
     */
    public constructor(getScheduleRequestBodyParameterValue?: GetScheduleRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = getScheduleRequestBodyParameterValue?.additionalData ? {} : getScheduleRequestBodyParameterValue?.additionalData!
        this.availabilityViewInterval = getScheduleRequestBodyParameterValue?.availabilityViewInterval ;
        this.endTime = getScheduleRequestBodyParameterValue?.endTime ;
        this.schedules = getScheduleRequestBodyParameterValue?.schedules ;
        this.startTime = getScheduleRequestBodyParameterValue?.startTime ;
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
        if(this.availabilityViewInterval)
        writer.writeNumberValue("availabilityViewInterval", this.availabilityViewInterval);
        }
        if(this.endTime){
        if(this.endTime)
        writer.writeObjectValue<DateTimeTimeZoneImpl>("endTime", new DateTimeTimeZoneImpl(this.endTime));
        }
        if(this.schedules){
        if(this.schedules)
        writer.writeCollectionOfPrimitiveValues<string>("schedules", this.schedules);
        }
        if(this.startTime){
        if(this.startTime)
        writer.writeObjectValue<DateTimeTimeZoneImpl>("startTime", new DateTimeTimeZoneImpl(this.startTime));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
