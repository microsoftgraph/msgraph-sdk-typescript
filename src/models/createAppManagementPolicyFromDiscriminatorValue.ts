import { deserializeIntoAppManagementPolicy } from './deserializeIntoAppManagementPolicy';
import { type AppManagementPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppManagementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppManagementPolicy;
}
