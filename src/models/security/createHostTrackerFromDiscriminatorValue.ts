import { deserializeIntoHostTracker } from './deserializeIntoHostTracker';
import { type HostTracker } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostTrackerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostTracker;
}
