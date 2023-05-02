import {deserializeIntoExternalDomainFederation} from './deserializeIntoExternalDomainFederation';
import {ExternalDomainFederation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalDomainFederationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalDomainFederation;
}
