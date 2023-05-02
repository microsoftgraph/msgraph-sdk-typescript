import {deserializeIntoActivityBasedTimeoutPolicyCollectionResponse} from './deserializeIntoActivityBasedTimeoutPolicyCollectionResponse';
import {ActivityBasedTimeoutPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivityBasedTimeoutPolicyCollectionResponse;
}
