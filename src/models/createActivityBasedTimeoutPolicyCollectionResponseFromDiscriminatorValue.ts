import { deserializeIntoActivityBasedTimeoutPolicyCollectionResponse } from './deserializeIntoActivityBasedTimeoutPolicyCollectionResponse';
import { type ActivityBasedTimeoutPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivityBasedTimeoutPolicyCollectionResponse;
}
