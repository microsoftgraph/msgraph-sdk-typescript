import { deserializeIntoProvisionedIdentity } from './deserializeIntoProvisionedIdentity';
import { type ProvisionedIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisionedIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisionedIdentity;
}
