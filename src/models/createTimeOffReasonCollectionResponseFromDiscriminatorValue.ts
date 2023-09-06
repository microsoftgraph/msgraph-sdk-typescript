import { deserializeIntoTimeOffReasonCollectionResponse } from './deserializeIntoTimeOffReasonCollectionResponse';
import { type TimeOffReasonCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeOffReasonCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOffReasonCollectionResponse;
}
