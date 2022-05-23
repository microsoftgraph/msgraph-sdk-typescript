import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {DateTimeTimeZoneImpl, LocationImpl} from './index';
import {Location} from './location';
import {Reminder} from './reminder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReminderImpl implements AdditionalDataHolder, Parsable, Reminder {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Identifies the version of the reminder. Every time the reminder is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. */
    public changeKey?: string | undefined;
    /** The date, time and time zone that the event ends. */
    public eventEndTime?: DateTimeTimeZone | undefined;
    /** The unique ID of the event. Read only. */
    public eventId?: string | undefined;
    /** The location of the event. */
    public eventLocation?: Location | undefined;
    /** The date, time, and time zone that the event starts. */
    public eventStartTime?: DateTimeTimeZone | undefined;
    /** The text of the event's subject line. */
    public eventSubject?: string | undefined;
    /** The URL to open the event in Outlook on the web.The event will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL cannot be accessed from within an iFrame. */
    public eventWebLink?: string | undefined;
    /** The date, time, and time zone that the reminder is set to occur. */
    public reminderFireTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new reminder and sets the default values.
     * @param reminderParameterValue 
     */
    public constructor(reminderParameterValue?: Reminder | undefined) {
        this.additionalData = reminderParameterValue?.additionalData ? reminderParameterValue?.additionalData! : {}
        this.changeKey = reminderParameterValue?.changeKey ;
        this.eventEndTime = reminderParameterValue?.eventEndTime ;
        this.eventId = reminderParameterValue?.eventId ;
        this.eventLocation = reminderParameterValue?.eventLocation ;
        this.eventStartTime = reminderParameterValue?.eventStartTime ;
        this.eventSubject = reminderParameterValue?.eventSubject ;
        this.eventWebLink = reminderParameterValue?.eventWebLink ;
        this.reminderFireTime = reminderParameterValue?.reminderFireTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "changeKey": n => { this.changeKey = n.getStringValue(); },
            "eventEndTime": n => { this.eventEndTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "eventId": n => { this.eventId = n.getStringValue(); },
            "eventLocation": n => { this.eventLocation = n.getObjectValue<LocationImpl>(createLocationFromDiscriminatorValue); },
            "eventStartTime": n => { this.eventStartTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "eventSubject": n => { this.eventSubject = n.getStringValue(); },
            "eventWebLink": n => { this.eventWebLink = n.getStringValue(); },
            "reminderFireTime": n => { this.reminderFireTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.changeKey){
        writer.writeStringValue("changeKey", this.changeKey);
        }
        if(this.eventEndTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("eventEndTime", new DateTimeTimeZoneImpl(this.eventEndTime));
        }
        if(this.eventId){
        writer.writeStringValue("eventId", this.eventId);
        }
        if(this.eventLocation){
        writer.writeObjectValue<LocationImpl>("eventLocation", new LocationImpl(this.eventLocation));
        }
        if(this.eventStartTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("eventStartTime", new DateTimeTimeZoneImpl(this.eventStartTime));
        }
        if(this.eventSubject){
        writer.writeStringValue("eventSubject", this.eventSubject);
        }
        if(this.eventWebLink){
        writer.writeStringValue("eventWebLink", this.eventWebLink);
        }
        if(this.reminderFireTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("reminderFireTime", new DateTimeTimeZoneImpl(this.reminderFireTime));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
