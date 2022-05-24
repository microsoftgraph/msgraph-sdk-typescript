import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {FreeBusyStatus} from './freeBusyStatus';
import {DateTimeTimeZoneImpl} from './index';
import {ScheduleItem} from './scheduleItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleItemImpl implements AdditionalDataHolder, Parsable, ScheduleItem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The date, time, and time zone that the corresponding event ends. */
    public end?: DateTimeTimeZone | undefined;
    /** The sensitivity of the corresponding event. True if the event is marked private, false otherwise. Optional. */
    public isPrivate?: boolean | undefined;
    /** The location where the corresponding event is held or attended from. Optional. */
    public location?: string | undefined;
    /** The date, time, and time zone that the corresponding event starts. */
    public start?: DateTimeTimeZone | undefined;
    /** The availability status of the user or resource during the corresponding event. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    public status?: FreeBusyStatus | undefined;
    /** The corresponding event's subject line. Optional. */
    public subject?: string | undefined;
    /**
     * Instantiates a new scheduleItem and sets the default values.
     * @param scheduleItemParameterValue 
     */
    public constructor(scheduleItemParameterValue?: ScheduleItem | undefined) {
        this.additionalData = scheduleItemParameterValue?.additionalData ? scheduleItemParameterValue?.additionalData! : {}
        this.end = scheduleItemParameterValue?.end ;
        this.isPrivate = scheduleItemParameterValue?.isPrivate ;
        this.location = scheduleItemParameterValue?.location ;
        this.start = scheduleItemParameterValue?.start ;
        this.status = scheduleItemParameterValue?.status ;
        this.subject = scheduleItemParameterValue?.subject ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "end": n => { this.end = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "isPrivate": n => { this.isPrivate = n.getBooleanValue(); },
            "location": n => { this.location = n.getStringValue(); },
            "start": n => { this.start = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.end){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("end", new DateTimeTimeZoneImpl(this.end));
        }
        if(this.isPrivate){
        writer.writeBooleanValue("isPrivate", this.isPrivate);
        }
        if(this.location){
        writer.writeStringValue("location", this.location);
        }
        if(this.start){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("start", new DateTimeTimeZoneImpl(this.start));
        }
        if(this.status){
        writer.writeEnumValue<FreeBusyStatus>("status", this.status);
        }
        if(this.subject){
        writer.writeStringValue("subject", this.subject);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
