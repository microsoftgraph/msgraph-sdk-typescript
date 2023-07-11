import {deserializeIntoHostTrackerCollectionResponse} from './deserializeIntoHostTrackerCollectionResponse';
import {HostTrackerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostTrackerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostTrackerCollectionResponse;
}
