import {BookingAppointment} from './bookingAppointment';
import {BookingCustomerInformationBase} from './bookingCustomerInformationBase';
import {BookingPriceType} from './bookingPriceType';
import {BookingReminder} from './bookingReminder';
import {createBookingCustomerInformationBaseFromDiscriminatorValue} from './createBookingCustomerInformationBaseFromDiscriminatorValue';
import {createBookingReminderFromDiscriminatorValue} from './createBookingReminderFromDiscriminatorValue';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {BookingCustomerInformationBaseImpl, BookingReminderImpl, DateTimeTimeZoneImpl, EntityImpl, LocationImpl} from './index';
import {Location} from './location';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents a booked appointment of a service by a customer in a business. */
export class BookingAppointmentImpl extends EntityImpl implements BookingAppointment, Parsable {
    /** Additional information that is sent to the customer when an appointment is confirmed. */
    public additionalInformation?: string | undefined;
    /** It lists down the customer properties for an appointment. An appointment will contain a list of customer information and each unit will indicate the properties of a customer who is part of that appointment. Optional. */
    public customers?: BookingCustomerInformationBase[] | undefined;
    /** The time zone of the customer. For a list of possible values, see dateTimeTimeZone. */
    public customerTimeZone?: string | undefined;
    /** The length of the appointment, denoted in ISO8601 format. */
    public duration?: Duration | undefined;
    /** The endDateTime property */
    public endDateTime?: DateTimeTimeZone | undefined;
    /** The current number of customers in the appointment. */
    public filledAttendeesCount?: number | undefined;
    /** True indicates that the appointment will be held online. Default value is false. */
    public isLocationOnline?: boolean | undefined;
    /** The URL of the online meeting for the appointment. */
    public joinWebUrl?: string | undefined;
    /** The maximum number of customers allowed in an appointment. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment. To create a customer, use the Create bookingCustomer operation. */
    public maximumAttendeesCount?: number | undefined;
    /** True indicates that the bookingCustomer for this appointment does not wish to receive a confirmation for this appointment. */
    public optOutOfCustomerEmail?: boolean | undefined;
    /** The amount of time to reserve after the appointment ends, for cleaning up, as an example. The value is expressed in ISO8601 format. */
    public postBuffer?: Duration | undefined;
    /** The amount of time to reserve before the appointment begins, for preparation, as an example. The value is expressed in ISO8601 format. */
    public preBuffer?: Duration | undefined;
    /** The regular price for an appointment for the specified bookingService. */
    public price?: number | undefined;
    /** A setting to provide flexibility for the pricing structure of services. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue. */
    public priceType?: BookingPriceType | undefined;
    /** The collection of customer reminders sent for this appointment. The value of this property is available only when reading this bookingAppointment by its ID. */
    public reminders?: BookingReminder[] | undefined;
    /** An additional tracking ID for the appointment, if the appointment has been created directly by the customer on the scheduling page, as opposed to by a staff member on the behalf of the customer. */
    public selfServiceAppointmentId?: string | undefined;
    /** The ID of the bookingService associated with this appointment. */
    public serviceId?: string | undefined;
    /** The location where the service is delivered. */
    public serviceLocation?: Location | undefined;
    /** The name of the bookingService associated with this appointment.This property is optional when creating a new appointment. If not specified, it is computed from the service associated with the appointment by the serviceId property. */
    public serviceName?: string | undefined;
    /** Notes from a bookingStaffMember. The value of this property is available only when reading this bookingAppointment by its ID. */
    public serviceNotes?: string | undefined;
    /** True indicates SMS notifications will be sent to the customers for the appointment. Default value is false. */
    public smsNotificationsEnabled?: boolean | undefined;
    /** The ID of each bookingStaffMember who is scheduled in this appointment. */
    public staffMemberIds?: string[] | undefined;
    /** The startDateTime property */
    public startDateTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new bookingAppointment and sets the default values.
     * @param bookingAppointmentParameterValue 
     */
    public constructor(bookingAppointmentParameterValue?: BookingAppointment | undefined) {
        super();
        this.additionalInformation = bookingAppointmentParameterValue?.additionalInformation ;
        this.customers = bookingAppointmentParameterValue?.customers ;
        this.customerTimeZone = bookingAppointmentParameterValue?.customerTimeZone ;
        this.duration = bookingAppointmentParameterValue?.duration ;
        this.endDateTime = bookingAppointmentParameterValue?.endDateTime ;
        this.filledAttendeesCount = bookingAppointmentParameterValue?.filledAttendeesCount ;
        this.isLocationOnline = bookingAppointmentParameterValue?.isLocationOnline ;
        this.joinWebUrl = bookingAppointmentParameterValue?.joinWebUrl ;
        this.maximumAttendeesCount = bookingAppointmentParameterValue?.maximumAttendeesCount ;
        this.optOutOfCustomerEmail = bookingAppointmentParameterValue?.optOutOfCustomerEmail ;
        this.postBuffer = bookingAppointmentParameterValue?.postBuffer ;
        this.preBuffer = bookingAppointmentParameterValue?.preBuffer ;
        this.price = bookingAppointmentParameterValue?.price ;
        this.priceType = bookingAppointmentParameterValue?.priceType ;
        this.reminders = bookingAppointmentParameterValue?.reminders ;
        this.selfServiceAppointmentId = bookingAppointmentParameterValue?.selfServiceAppointmentId ;
        this.serviceId = bookingAppointmentParameterValue?.serviceId ;
        this.serviceLocation = bookingAppointmentParameterValue?.serviceLocation ;
        this.serviceName = bookingAppointmentParameterValue?.serviceName ;
        this.serviceNotes = bookingAppointmentParameterValue?.serviceNotes ;
        this.smsNotificationsEnabled = bookingAppointmentParameterValue?.smsNotificationsEnabled ;
        this.staffMemberIds = bookingAppointmentParameterValue?.staffMemberIds ;
        this.startDateTime = bookingAppointmentParameterValue?.startDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalInformation": n => { this.additionalInformation = n.getStringValue(); },
            "customers": n => { this.customers = n.getCollectionOfObjectValues<BookingCustomerInformationBaseImpl>(createBookingCustomerInformationBaseFromDiscriminatorValue); },
            "customerTimeZone": n => { this.customerTimeZone = n.getStringValue(); },
            "duration": n => { this.duration = n.getDurationValue(); },
            "endDateTime": n => { this.endDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "filledAttendeesCount": n => { this.filledAttendeesCount = n.getNumberValue(); },
            "isLocationOnline": n => { this.isLocationOnline = n.getBooleanValue(); },
            "joinWebUrl": n => { this.joinWebUrl = n.getStringValue(); },
            "maximumAttendeesCount": n => { this.maximumAttendeesCount = n.getNumberValue(); },
            "optOutOfCustomerEmail": n => { this.optOutOfCustomerEmail = n.getBooleanValue(); },
            "postBuffer": n => { this.postBuffer = n.getDurationValue(); },
            "preBuffer": n => { this.preBuffer = n.getDurationValue(); },
            "price": n => { this.price = n.getNumberValue(); },
            "priceType": n => { this.priceType = n.getEnumValue<BookingPriceType>(BookingPriceType); },
            "reminders": n => { this.reminders = n.getCollectionOfObjectValues<BookingReminderImpl>(createBookingReminderFromDiscriminatorValue); },
            "selfServiceAppointmentId": n => { this.selfServiceAppointmentId = n.getStringValue(); },
            "serviceId": n => { this.serviceId = n.getStringValue(); },
            "serviceLocation": n => { this.serviceLocation = n.getObjectValue<LocationImpl>(createLocationFromDiscriminatorValue); },
            "serviceName": n => { this.serviceName = n.getStringValue(); },
            "serviceNotes": n => { this.serviceNotes = n.getStringValue(); },
            "smsNotificationsEnabled": n => { this.smsNotificationsEnabled = n.getBooleanValue(); },
            "staffMemberIds": n => { this.staffMemberIds = n.getCollectionOfPrimitiveValues<string>(); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
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
        if(this.customers && this.customers.length != 0){        const customersArrValue: BookingCustomerInformationBaseImpl[] = []; this.customers?.forEach(element => {customersArrValue.push(new BookingCustomerInformationBaseImpl(element));});
        writer.writeCollectionOfObjectValues<BookingCustomerInformationBaseImpl>("customers", customersArrValue);
        }
        if(this.customerTimeZone){
        writer.writeStringValue("customerTimeZone", this.customerTimeZone);
        }
        if(this.duration){
        writer.writeDurationValue("duration", this.duration);
        }
        if(this.endDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("endDateTime", new DateTimeTimeZoneImpl(this.endDateTime));
        }
        if(this.filledAttendeesCount){
        writer.writeNumberValue("filledAttendeesCount", this.filledAttendeesCount);
        }
        if(this.isLocationOnline){
        writer.writeBooleanValue("isLocationOnline", this.isLocationOnline);
        }
        if(this.joinWebUrl){
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        }
        if(this.maximumAttendeesCount){
        writer.writeNumberValue("maximumAttendeesCount", this.maximumAttendeesCount);
        }
        if(this.optOutOfCustomerEmail){
        writer.writeBooleanValue("optOutOfCustomerEmail", this.optOutOfCustomerEmail);
        }
        if(this.postBuffer){
        writer.writeDurationValue("postBuffer", this.postBuffer);
        }
        if(this.preBuffer){
        writer.writeDurationValue("preBuffer", this.preBuffer);
        }
        if(this.price){
        writer.writeNumberValue("price", this.price);
        }
        if(this.priceType){
        writer.writeEnumValue<BookingPriceType>("priceType", this.priceType);
        }
        if(this.reminders && this.reminders.length != 0){        const remindersArrValue: BookingReminderImpl[] = []; this.reminders?.forEach(element => {remindersArrValue.push(new BookingReminderImpl(element));});
        writer.writeCollectionOfObjectValues<BookingReminderImpl>("reminders", remindersArrValue);
        }
        if(this.selfServiceAppointmentId){
        writer.writeStringValue("selfServiceAppointmentId", this.selfServiceAppointmentId);
        }
        if(this.serviceId){
        writer.writeStringValue("serviceId", this.serviceId);
        }
        if(this.serviceLocation){
        writer.writeObjectValue<LocationImpl>("serviceLocation", new LocationImpl(this.serviceLocation));
        }
        if(this.serviceName){
        writer.writeStringValue("serviceName", this.serviceName);
        }
        if(this.serviceNotes){
        writer.writeStringValue("serviceNotes", this.serviceNotes);
        }
        if(this.smsNotificationsEnabled){
        writer.writeBooleanValue("smsNotificationsEnabled", this.smsNotificationsEnabled);
        }
        if(this.staffMemberIds){
        writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", this.staffMemberIds);
        }
        if(this.startDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("startDateTime", new DateTimeTimeZoneImpl(this.startDateTime));
        }
    };
}
