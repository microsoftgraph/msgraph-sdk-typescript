import {deserializeIntoSharedPCAccountManagerPolicy} from './deserializeIntoSharedPCAccountManagerPolicy';
import {SharedPCAccountManagerPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedPCAccountManagerPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedPCAccountManagerPolicy;
}
