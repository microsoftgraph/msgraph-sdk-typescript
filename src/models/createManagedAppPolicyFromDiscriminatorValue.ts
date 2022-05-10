import {ManagedAppPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppPolicyImpl();
}
