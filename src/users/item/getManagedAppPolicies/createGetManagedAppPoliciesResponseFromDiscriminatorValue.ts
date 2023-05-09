import {deserializeIntoGetManagedAppPoliciesResponse} from './deserializeIntoGetManagedAppPoliciesResponse';
import {GetManagedAppPoliciesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetManagedAppPoliciesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetManagedAppPoliciesResponse;
}
