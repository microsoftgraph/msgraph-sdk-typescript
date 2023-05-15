import {BookingCustomQuestion} from './bookingCustomQuestion';
import {BookingCustomQuestionCollectionResponse} from './bookingCustomQuestionCollectionResponse';
import {createBookingCustomQuestionFromDiscriminatorValue} from './createBookingCustomQuestionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBookingCustomQuestion} from './serializeBookingCustomQuestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomQuestionCollectionResponse(bookingCustomQuestionCollectionResponse: BookingCustomQuestionCollectionResponse | undefined = {} as BookingCustomQuestionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingCustomQuestionCollectionResponse),
        "value": n => { bookingCustomQuestionCollectionResponse.value = n.getCollectionOfObjectValues<BookingCustomQuestion>(createBookingCustomQuestionFromDiscriminatorValue); },
    }
}
