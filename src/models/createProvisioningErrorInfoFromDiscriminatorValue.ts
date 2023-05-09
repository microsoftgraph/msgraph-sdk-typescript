import {deserializeIntoProvisioningErrorInfo} from './deserializeIntoProvisioningErrorInfo';
import {ProvisioningErrorInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningErrorInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningErrorInfo;
}
