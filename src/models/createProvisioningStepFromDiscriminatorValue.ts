import {ProvisioningStepImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningStepFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningStepImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningStepImpl();
}
