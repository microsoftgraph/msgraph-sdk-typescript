import {deserializeIntoProvisioningStatusInfo} from './deserializeIntoProvisioningStatusInfo';
import {ProvisioningStatusInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningStatusInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningStatusInfo;
}
