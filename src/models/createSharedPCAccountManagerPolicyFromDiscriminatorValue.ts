import {SharedPCAccountManagerPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedPCAccountManagerPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedPCAccountManagerPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedPCAccountManagerPolicyImpl();
}
