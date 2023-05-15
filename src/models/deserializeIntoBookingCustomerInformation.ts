import {BookingCustomerInformation} from './bookingCustomerInformation';
import {BookingQuestionAnswer} from './bookingQuestionAnswer';
import {createBookingQuestionAnswerFromDiscriminatorValue} from './createBookingQuestionAnswerFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {deserializeIntoBookingCustomerInformationBase} from './deserializeIntoBookingCustomerInformationBase';
import {Location} from './location';
import {serializeBookingQuestionAnswer} from './serializeBookingQuestionAnswer';
import {serializeLocation} from './serializeLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerInformation(bookingCustomerInformation: BookingCustomerInformation | undefined = {} as BookingCustomerInformation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBookingCustomerInformationBase(bookingCustomerInformation),
        "customerId": n => { bookingCustomerInformation.customerId = n.getStringValue(); },
        "customQuestionAnswers": n => { bookingCustomerInformation.customQuestionAnswers = n.getCollectionOfObjectValues<BookingQuestionAnswer>(createBookingQuestionAnswerFromDiscriminatorValue); },
        "emailAddress": n => { bookingCustomerInformation.emailAddress = n.getStringValue(); },
        "location": n => { bookingCustomerInformation.location = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
        "name": n => { bookingCustomerInformation.name = n.getStringValue(); },
        "notes": n => { bookingCustomerInformation.notes = n.getStringValue(); },
        "phone": n => { bookingCustomerInformation.phone = n.getStringValue(); },
        "timeZone": n => { bookingCustomerInformation.timeZone = n.getStringValue(); },
    }
}
