import {SharedPCAccountManagerPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedPCAccountManagerPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedPCAccountManagerPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedPCAccountManagerPolicy();
}
