import {ActivityBasedTimeoutPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityBasedTimeoutPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivityBasedTimeoutPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivityBasedTimeoutPolicyImpl();
}
