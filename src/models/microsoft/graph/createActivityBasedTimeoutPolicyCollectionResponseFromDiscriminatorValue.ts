import {ActivityBasedTimeoutPolicyCollectionResponse} from './activityBasedTimeoutPolicyCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityBasedTimeoutPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivityBasedTimeoutPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivityBasedTimeoutPolicyCollectionResponse();
}
