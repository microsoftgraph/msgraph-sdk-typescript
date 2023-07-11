import {BookingCustomerInformationBase} from './bookingCustomerInformationBase';
import {BookingQuestionAnswer} from './bookingQuestionAnswer';
import {Location} from './location';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomerInformation extends BookingCustomerInformationBase, Parsable {
    /**
     * The ID of the bookingCustomer for this appointment. If no ID is specified when an appointment is created, then a new bookingCustomer object is created. Once set, you should consider the customerId immutable.
     */
    customerId?: string | undefined;
    /**
     * It consists of the list of custom questions and answers given by the customer as part of the appointment
     */
    customQuestionAnswers?: BookingQuestionAnswer[] | undefined;
    /**
     * The SMTP address of the bookingCustomer who is booking the appointment
     */
    emailAddress?: string | undefined;
    /**
     * Represents location information for the bookingCustomer who is booking the appointment.
     */
    location?: Location | undefined;
    /**
     * The customer's name.
     */
    name?: string | undefined;
    /**
     * Notes from the customer associated with this appointment. You can get the value only when reading this bookingAppointment by its ID. You can set this property only when initially creating an appointment with a new customer. After that point, the value is computed from the customer represented by the customerId.
     */
    notes?: string | undefined;
    /**
     * The customer's phone number.
     */
    phone?: string | undefined;
    /**
     * The time zone of the customer. For a list of possible values, see dateTimeTimeZone.
     */
    timeZone?: string | undefined;
}
