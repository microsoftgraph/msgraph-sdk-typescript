import { deserializeIntoServicePrincipalIdentity } from './deserializeIntoServicePrincipalIdentity';
import { type ServicePrincipalIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServicePrincipalIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipalIdentity;
}
