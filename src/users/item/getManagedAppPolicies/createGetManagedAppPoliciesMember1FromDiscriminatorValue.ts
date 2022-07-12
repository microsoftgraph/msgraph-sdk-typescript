import {GetManagedAppPoliciesMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetManagedAppPoliciesMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetManagedAppPoliciesMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetManagedAppPoliciesMember1();
}
