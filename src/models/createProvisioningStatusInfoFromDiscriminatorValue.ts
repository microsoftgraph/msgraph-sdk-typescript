import {ProvisioningStatusInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningStatusInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningStatusInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningStatusInfoImpl();
}
