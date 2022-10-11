import {BookingQuestionAnswerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingQuestionAnswerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingQuestionAnswerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingQuestionAnswerCollectionResponse();
}
