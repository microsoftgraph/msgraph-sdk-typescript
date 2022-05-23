import {ProvisioningSystemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningSystemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningSystemImpl();
}
