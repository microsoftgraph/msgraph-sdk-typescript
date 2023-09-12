import { deserializeIntoHostTrackerCollectionResponse } from './deserializeIntoHostTrackerCollectionResponse';
import { type HostTrackerCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostTrackerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostTrackerCollectionResponse;
}
