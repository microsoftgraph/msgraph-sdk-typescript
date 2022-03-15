import {TimeOffReasonCollectionResponse} from './timeOffReasonCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffReasonCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffReasonCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffReasonCollectionResponse();
}
