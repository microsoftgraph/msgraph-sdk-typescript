import { deserializeIntoOnPremisesProvisioningError } from './deserializeIntoOnPremisesProvisioningError';
import { type OnPremisesProvisioningError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnPremisesProvisioningErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesProvisioningError;
}
