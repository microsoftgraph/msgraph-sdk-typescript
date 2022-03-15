import {GetManagedAppPoliciesResponse} from './getManagedAppPoliciesResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetManagedAppPoliciesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetManagedAppPoliciesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetManagedAppPoliciesResponse();
}
