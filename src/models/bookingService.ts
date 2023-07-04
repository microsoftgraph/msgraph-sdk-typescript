import {BookingPriceType} from './bookingPriceType';
import {BookingQuestionAssignment} from './bookingQuestionAssignment';
import {BookingReminder} from './bookingReminder';
import {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {Entity} from './entity';
import {Location} from './location';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingService extends Entity, Parsable {
    /**
     * Additional information that is sent to the customer when an appointment is confirmed.
     */
    additionalInformation?: string | undefined;
    /**
     * Contains the set of custom questions associated with a particular service.
     */
    customQuestions?: BookingQuestionAssignment[] | undefined;
    /**
     * The default length of the service, represented in numbers of days, hours, minutes, and seconds. For example, P11D23H59M59.999999999999S.
     */
    defaultDuration?: Duration | undefined;
    /**
     * The default physical location for the service.
     */
    defaultLocation?: Location | undefined;
    /**
     * The default monetary price for the service.
     */
    defaultPrice?: number | undefined;
    /**
     * Represents the type of pricing of a booking service.
     */
    defaultPriceType?: BookingPriceType | undefined;
    /**
     * The default set of reminders for an appointment of this service. The value of this property is available only when reading this bookingService by its ID.
     */
    defaultReminders?: BookingReminder[] | undefined;
    /**
     * A text description for the service.
     */
    description?: string | undefined;
    /**
     * A service name.
     */
    displayName?: string | undefined;
    /**
     * True if the URL to join the appointment anonymously (anonymousJoinWebUrl) will be generated for the appointment booked for this service.
     */
    isAnonymousJoinEnabled?: boolean | undefined;
    /**
     * True means this service is not available to customers for booking.
     */
    isHiddenFromCustomers?: boolean | undefined;
    /**
     * True indicates that the appointments for the service will be held online. Default value is false.
     */
    isLocationOnline?: boolean | undefined;
    /**
     * The language of the self-service booking page.
     */
    languageTag?: string | undefined;
    /**
     * The maximum number of customers allowed in a service. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment. To create a customer, use the Create bookingCustomer operation.
     */
    maximumAttendeesCount?: number | undefined;
    /**
     * Additional information about this service.
     */
    notes?: string | undefined;
    /**
     * The time to buffer after an appointment for this service ends, and before the next customer appointment can be booked.
     */
    postBuffer?: Duration | undefined;
    /**
     * The time to buffer before an appointment for this service can start.
     */
    preBuffer?: Duration | undefined;
    /**
     * The set of policies that determine how appointments for this type of service should be created and managed.
     */
    schedulingPolicy?: BookingSchedulingPolicy | undefined;
    /**
     * True indicates SMS notifications can be sent to the customers for the appointment of the service. Default value is false.
     */
    smsNotificationsEnabled?: boolean | undefined;
    /**
     * Represents those staff members who provide this service.
     */
    staffMemberIds?: string[] | undefined;
    /**
     * The URL a customer uses to access the service.
     */
    webUrl?: string | undefined;
}
