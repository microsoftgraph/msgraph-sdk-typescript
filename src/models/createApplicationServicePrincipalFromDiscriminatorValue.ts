import { deserializeIntoApplicationServicePrincipal } from './deserializeIntoApplicationServicePrincipal';
import { type ApplicationServicePrincipal } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplicationServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplicationServicePrincipal;
}
