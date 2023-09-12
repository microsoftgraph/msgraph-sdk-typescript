import { deserializeIntoProvisioningStep } from './deserializeIntoProvisioningStep';
import { type ProvisioningStep } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisioningStepFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningStep;
}
