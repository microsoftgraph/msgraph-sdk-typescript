import {GetManagedAppPoliciesResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetManagedAppPoliciesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetManagedAppPoliciesResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetManagedAppPoliciesResponseImpl();
}
