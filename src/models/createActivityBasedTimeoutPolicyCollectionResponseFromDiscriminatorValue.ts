import {ActivityBasedTimeoutPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivityBasedTimeoutPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivityBasedTimeoutPolicyCollectionResponseImpl();
}
