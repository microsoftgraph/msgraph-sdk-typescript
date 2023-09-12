import { deserializeIntoExternalDomainFederation } from './deserializeIntoExternalDomainFederation';
import { type ExternalDomainFederation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalDomainFederationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalDomainFederation;
}
