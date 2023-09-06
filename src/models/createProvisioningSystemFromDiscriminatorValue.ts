import { deserializeIntoProvisioningSystem } from './deserializeIntoProvisioningSystem';
import { type ProvisioningSystem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisioningSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningSystem;
}
