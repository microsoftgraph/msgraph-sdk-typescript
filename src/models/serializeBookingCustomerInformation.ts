import {BookingCustomerInformation} from './bookingCustomerInformation';
import {BookingQuestionAnswer} from './bookingQuestionAnswer';
import {Location} from './location';
import {serializeBookingCustomerInformationBase} from './serializeBookingCustomerInformationBase';
import {serializeBookingQuestionAnswer} from './serializeBookingQuestionAnswer';
import {serializeLocation} from './serializeLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerInformation(writer: SerializationWriter, bookingCustomerInformation: BookingCustomerInformation | undefined = {} as BookingCustomerInformation) : void {
        serializeBookingCustomerInformationBase(writer, bookingCustomerInformation)
        writer.writeStringValue("customerId", bookingCustomerInformation.customerId);
        writer.writeCollectionOfObjectValues<BookingQuestionAnswer>("customQuestionAnswers", bookingCustomerInformation.customQuestionAnswers, serializeBookingQuestionAnswer);
        writer.writeStringValue("emailAddress", bookingCustomerInformation.emailAddress);
        writer.writeObjectValue<Location>("location", bookingCustomerInformation.location, serializeLocation);
        writer.writeStringValue("name", bookingCustomerInformation.name);
        writer.writeStringValue("notes", bookingCustomerInformation.notes);
        writer.writeStringValue("phone", bookingCustomerInformation.phone);
        writer.writeStringValue("timeZone", bookingCustomerInformation.timeZone);
}
