import {deserializeIntoProvisionedIdentity} from './deserializeIntoProvisionedIdentity';
import {ProvisionedIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionedIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisionedIdentity;
}
