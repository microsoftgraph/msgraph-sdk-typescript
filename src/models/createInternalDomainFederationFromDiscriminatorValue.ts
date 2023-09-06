import { deserializeIntoInternalDomainFederation } from './deserializeIntoInternalDomainFederation';
import { type InternalDomainFederation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInternalDomainFederationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInternalDomainFederation;
}
