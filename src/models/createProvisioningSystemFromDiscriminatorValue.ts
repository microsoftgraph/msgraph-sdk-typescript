import {deserializeIntoProvisioningSystem} from './deserializeIntoProvisioningSystem';
import {ProvisioningSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningSystem;
}
