import {deserializeIntoTimeOffReasonCollectionResponse} from './deserializeIntoTimeOffReasonCollectionResponse';
import {TimeOffReasonCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffReasonCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOffReasonCollectionResponse;
}
