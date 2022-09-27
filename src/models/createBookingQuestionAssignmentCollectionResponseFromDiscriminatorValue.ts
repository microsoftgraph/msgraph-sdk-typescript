import {BookingQuestionAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingQuestionAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingQuestionAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingQuestionAssignmentCollectionResponse();
}
