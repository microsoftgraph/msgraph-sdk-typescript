import {BookingCustomerInformationBase} from './bookingCustomerInformationBase';
import {BookingPriceType} from './bookingPriceType';
import {BookingReminder} from './bookingReminder';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Entity} from './entity';
import {Location} from './location';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingAppointment extends Entity, Parsable {
    /**
     * Additional information that is sent to the customer when an appointment is confirmed.
     */
    additionalInformation?: string | undefined;
    /**
     * The URL of the meeting to join anonymously.
     */
    anonymousJoinWebUrl?: string | undefined;
    /**
     * A collection of customer properties for an appointment. An appointment will contain a list of customer information and each unit will indicate the properties of a customer who is part of that appointment. Optional.
     */
    customers?: BookingCustomerInformationBase[] | undefined;
    /**
     * The time zone of the customer. For a list of possible values, see dateTimeTimeZone.
     */
    customerTimeZone?: string | undefined;
    /**
     * The length of the appointment, denoted in ISO8601 format.
     */
    duration?: Duration | undefined;
    /**
     * The endDateTime property
     */
    endDateTime?: DateTimeTimeZone | undefined;
    /**
     * The current number of customers in the appointment
     */
    filledAttendeesCount?: number | undefined;
    /**
     * If true, indicates that the appointment will be held online. Default value is false.
     */
    isLocationOnline?: boolean | undefined;
    /**
     * The URL of the online meeting for the appointment.
     */
    joinWebUrl?: string | undefined;
    /**
     * The maximum number of customers allowed in an appointment. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment. To create a customer, use the Create bookingCustomer operation.
     */
    maximumAttendeesCount?: number | undefined;
    /**
     * If true indicates that the bookingCustomer for this appointment does not wish to receive a confirmation for this appointment.
     */
    optOutOfCustomerEmail?: boolean | undefined;
    /**
     * The amount of time to reserve after the appointment ends, for cleaning up, as an example. The value is expressed in ISO8601 format.
     */
    postBuffer?: Duration | undefined;
    /**
     * The amount of time to reserve before the appointment begins, for preparation, as an example. The value is expressed in ISO8601 format.
     */
    preBuffer?: Duration | undefined;
    /**
     * The regular price for an appointment for the specified bookingService.
     */
    price?: number | undefined;
    /**
     * Represents the type of pricing of a booking service.
     */
    priceType?: BookingPriceType | undefined;
    /**
     * The collection of customer reminders sent for this appointment. The value of this property is available only when reading this bookingAppointment by its ID.
     */
    reminders?: BookingReminder[] | undefined;
    /**
     * An additional tracking ID for the appointment, if the appointment has been created directly by the customer on the scheduling page, as opposed to by a staff member on the behalf of the customer. Only supported for appointment if maxAttendeeCount is 1.
     */
    selfServiceAppointmentId?: string | undefined;
    /**
     * The ID of the bookingService associated with this appointment.
     */
    serviceId?: string | undefined;
    /**
     * The location where the service is delivered.
     */
    serviceLocation?: Location | undefined;
    /**
     * The name of the bookingService associated with this appointment.This property is optional when creating a new appointment. If not specified, it is computed from the service associated with the appointment by the serviceId property.
     */
    serviceName?: string | undefined;
    /**
     * Notes from a bookingStaffMember. The value of this property is available only when reading this bookingAppointment by its ID.
     */
    serviceNotes?: string | undefined;
    /**
     * If true, indicates SMS notifications will be sent to the customers for the appointment. Default value is false.
     */
    smsNotificationsEnabled?: boolean | undefined;
    /**
     * The ID of each bookingStaffMember who is scheduled in this appointment.
     */
    staffMemberIds?: string[] | undefined;
    /**
     * The startDateTime property
     */
    startDateTime?: DateTimeTimeZone | undefined;
}
