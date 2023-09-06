import { deserializeIntoServicePrincipal } from './deserializeIntoServicePrincipal';
import { type ServicePrincipal } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipal;
}
