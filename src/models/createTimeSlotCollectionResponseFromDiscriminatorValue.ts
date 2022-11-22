import {TimeSlotCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeSlotCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeSlotCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeSlotCollectionResponse();
}
