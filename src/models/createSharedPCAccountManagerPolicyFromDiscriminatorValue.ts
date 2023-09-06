import { deserializeIntoSharedPCAccountManagerPolicy } from './deserializeIntoSharedPCAccountManagerPolicy';
import { type SharedPCAccountManagerPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharedPCAccountManagerPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedPCAccountManagerPolicy;
}
