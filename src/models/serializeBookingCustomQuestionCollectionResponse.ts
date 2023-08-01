import type {BookingCustomQuestion} from './bookingCustomQuestion';
import type {BookingCustomQuestionCollectionResponse} from './bookingCustomQuestionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCustomQuestion} from './serializeBookingCustomQuestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomQuestionCollectionResponse(writer: SerializationWriter, bookingCustomQuestionCollectionResponse: BookingCustomQuestionCollectionResponse | undefined = {} as BookingCustomQuestionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCustomQuestionCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingCustomQuestion>("value", bookingCustomQuestionCollectionResponse.value, serializeBookingCustomQuestion);
}
