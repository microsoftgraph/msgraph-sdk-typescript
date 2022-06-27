import {ExternalDomainFederationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalDomainFederationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalDomainFederationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalDomainFederationImpl();
}
