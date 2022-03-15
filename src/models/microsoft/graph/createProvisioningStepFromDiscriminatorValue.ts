import {ProvisioningStep} from './provisioningStep';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningStepFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningStep {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningStep();
}
