import {ExternalDomainFederation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalDomainFederationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalDomainFederation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalDomainFederation();
}
