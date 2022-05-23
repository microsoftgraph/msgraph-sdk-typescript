import {BookingPriceType} from './bookingPriceType';
import {BookingQuestionAssignment} from './bookingQuestionAssignment';
import {BookingReminder} from './bookingReminder';
import {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {BookingService} from './bookingService';
import {createBookingQuestionAssignmentFromDiscriminatorValue} from './createBookingQuestionAssignmentFromDiscriminatorValue';
import {createBookingReminderFromDiscriminatorValue} from './createBookingReminderFromDiscriminatorValue';
import {createBookingSchedulingPolicyFromDiscriminatorValue} from './createBookingSchedulingPolicyFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {BookingQuestionAssignmentImpl, BookingReminderImpl, BookingSchedulingPolicyImpl, EntityImpl, LocationImpl} from './index';
import {Location} from './location';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents a particular service offered by a booking business. */
export class BookingServiceImpl extends EntityImpl implements BookingService, Parsable {
    /** Additional information that is sent to the customer when an appointment is confirmed. */
    public additionalInformation?: string | undefined;
    /** Contains the set of custom questions associated with a particular service. */
    public customQuestions?: BookingQuestionAssignment[] | undefined;
    /** The default length of the service, represented in numbers of days, hours, minutes, and seconds. For example, P11D23H59M59.999999999999S. */
    public defaultDuration?: Duration | undefined;
    /** The default physical location for the service. */
    public defaultLocation?: Location | undefined;
    /** The default monetary price for the service. */
    public defaultPrice?: number | undefined;
    /** The default way the service is charged. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue. */
    public defaultPriceType?: BookingPriceType | undefined;
    /** The default set of reminders for an appointment of this service. The value of this property is available only when reading this bookingService by its ID. */
    public defaultReminders?: BookingReminder[] | undefined;
    /** A text description for the service. */
    public description?: string | undefined;
    /** A service name. */
    public displayName?: string | undefined;
    /** True means this service is not available to customers for booking. */
    public isHiddenFromCustomers?: boolean | undefined;
    /** True indicates that the appointments for the service will be held online. Default value is false. */
    public isLocationOnline?: boolean | undefined;
    /** The maximum number of customers allowed in a service. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment.  To create a customer, use the Create bookingCustomer operation. */
    public maximumAttendeesCount?: number | undefined;
    /** Additional information about this service. */
    public notes?: string | undefined;
    /** The time to buffer after an appointment for this service ends, and before the next customer appointment can be booked. */
    public postBuffer?: Duration | undefined;
    /** The time to buffer before an appointment for this service can start. */
    public preBuffer?: Duration | undefined;
    /** The set of policies that determine how appointments for this type of service should be created and managed. */
    public schedulingPolicy?: BookingSchedulingPolicy | undefined;
    /** True indicates SMS notifications can be sent to the customers for the appointment of the service. Default value is false. */
    public smsNotificationsEnabled?: boolean | undefined;
    /** Represents those staff members who provide this service. */
    public staffMemberIds?: string[] | undefined;
    /** The URL a customer uses to access the service. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new bookingService and sets the default values.
     * @param bookingServiceParameterValue 
     */
    public constructor(bookingServiceParameterValue?: BookingService | undefined) {
        super();
        this.additionalInformation = bookingServiceParameterValue?.additionalInformation ;
        this.customQuestions = bookingServiceParameterValue?.customQuestions ;
        this.defaultDuration = bookingServiceParameterValue?.defaultDuration ;
        this.defaultLocation = bookingServiceParameterValue?.defaultLocation ;
        this.defaultPrice = bookingServiceParameterValue?.defaultPrice ;
        this.defaultPriceType = bookingServiceParameterValue?.defaultPriceType ;
        this.defaultReminders = bookingServiceParameterValue?.defaultReminders ;
        this.description = bookingServiceParameterValue?.description ;
        this.displayName = bookingServiceParameterValue?.displayName ;
        this.isHiddenFromCustomers = bookingServiceParameterValue?.isHiddenFromCustomers ;
        this.isLocationOnline = bookingServiceParameterValue?.isLocationOnline ;
        this.maximumAttendeesCount = bookingServiceParameterValue?.maximumAttendeesCount ;
        this.notes = bookingServiceParameterValue?.notes ;
        this.postBuffer = bookingServiceParameterValue?.postBuffer ;
        this.preBuffer = bookingServiceParameterValue?.preBuffer ;
        this.schedulingPolicy = bookingServiceParameterValue?.schedulingPolicy ;
        this.smsNotificationsEnabled = bookingServiceParameterValue?.smsNotificationsEnabled ;
        this.staffMemberIds = bookingServiceParameterValue?.staffMemberIds ;
        this.webUrl = bookingServiceParameterValue?.webUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalInformation": n => { this.additionalInformation = n.getStringValue(); },
            "customQuestions": n => { this.customQuestions = n.getCollectionOfObjectValues<BookingQuestionAssignmentImpl>(createBookingQuestionAssignmentFromDiscriminatorValue); },
            "defaultDuration": n => { this.defaultDuration = n.getDurationValue(); },
            "defaultLocation": n => { this.defaultLocation = n.getObjectValue<LocationImpl>(createLocationFromDiscriminatorValue); },
            "defaultPrice": n => { this.defaultPrice = n.getNumberValue(); },
            "defaultPriceType": n => { this.defaultPriceType = n.getEnumValue<BookingPriceType>(BookingPriceType); },
            "defaultReminders": n => { this.defaultReminders = n.getCollectionOfObjectValues<BookingReminderImpl>(createBookingReminderFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isHiddenFromCustomers": n => { this.isHiddenFromCustomers = n.getBooleanValue(); },
            "isLocationOnline": n => { this.isLocationOnline = n.getBooleanValue(); },
            "maximumAttendeesCount": n => { this.maximumAttendeesCount = n.getNumberValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "postBuffer": n => { this.postBuffer = n.getDurationValue(); },
            "preBuffer": n => { this.preBuffer = n.getDurationValue(); },
            "schedulingPolicy": n => { this.schedulingPolicy = n.getObjectValue<BookingSchedulingPolicyImpl>(createBookingSchedulingPolicyFromDiscriminatorValue); },
            "smsNotificationsEnabled": n => { this.smsNotificationsEnabled = n.getBooleanValue(); },
            "staffMemberIds": n => { this.staffMemberIds = n.getCollectionOfPrimitiveValues<string>(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.additionalInformation){
        writer.writeStringValue("additionalInformation", this.additionalInformation);
        }
        if(this.customQuestions && this.customQuestions.length != 0){        const customQuestionsArrValue: BookingQuestionAssignmentImpl[] = []; this.customQuestions?.forEach(element => {customQuestionsArrValue.push(new BookingQuestionAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<BookingQuestionAssignmentImpl>("customQuestions", customQuestionsArrValue);
        }
        if(this.defaultDuration){
        writer.writeDurationValue("defaultDuration", this.defaultDuration);
        }
        if(this.defaultLocation){
        writer.writeObjectValue<LocationImpl>("defaultLocation", new LocationImpl(this.defaultLocation));
        }
        if(this.defaultPrice){
        writer.writeNumberValue("defaultPrice", this.defaultPrice);
        }
        if(this.defaultPriceType){
        writer.writeEnumValue<BookingPriceType>("defaultPriceType", this.defaultPriceType);
        }
        if(this.defaultReminders && this.defaultReminders.length != 0){        const defaultRemindersArrValue: BookingReminderImpl[] = []; this.defaultReminders?.forEach(element => {defaultRemindersArrValue.push(new BookingReminderImpl(element));});
        writer.writeCollectionOfObjectValues<BookingReminderImpl>("defaultReminders", defaultRemindersArrValue);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isHiddenFromCustomers){
        writer.writeBooleanValue("isHiddenFromCustomers", this.isHiddenFromCustomers);
        }
        if(this.isLocationOnline){
        writer.writeBooleanValue("isLocationOnline", this.isLocationOnline);
        }
        if(this.maximumAttendeesCount){
        writer.writeNumberValue("maximumAttendeesCount", this.maximumAttendeesCount);
        }
        if(this.notes){
        writer.writeStringValue("notes", this.notes);
        }
        if(this.postBuffer){
        writer.writeDurationValue("postBuffer", this.postBuffer);
        }
        if(this.preBuffer){
        writer.writeDurationValue("preBuffer", this.preBuffer);
        }
        if(this.schedulingPolicy){
        writer.writeObjectValue<BookingSchedulingPolicyImpl>("schedulingPolicy", new BookingSchedulingPolicyImpl(this.schedulingPolicy));
        }
        if(this.smsNotificationsEnabled){
        writer.writeBooleanValue("smsNotificationsEnabled", this.smsNotificationsEnabled);
        }
        if(this.staffMemberIds){
        writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", this.staffMemberIds);
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
    };
}
