import {BookingCustomQuestion} from './bookingCustomQuestion';
import {BookingCustomQuestionCollectionResponse} from './bookingCustomQuestionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCustomQuestion} from './serializeBookingCustomQuestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomQuestionCollectionResponse(bookingCustomQuestionCollectionResponse: BookingCustomQuestionCollectionResponse | undefined = {} as BookingCustomQuestionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCustomQuestionCollectionResponse)
        writer.writeCollectionOfObjectValues<BookingCustomQuestion>("value", bookingCustomQuestionCollectionResponse.value, serializeBookingCustomQuestion);
}
