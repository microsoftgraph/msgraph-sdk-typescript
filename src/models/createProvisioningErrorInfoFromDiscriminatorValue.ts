import { deserializeIntoProvisioningErrorInfo } from './deserializeIntoProvisioningErrorInfo';
import { type ProvisioningErrorInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisioningErrorInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningErrorInfo;
}
