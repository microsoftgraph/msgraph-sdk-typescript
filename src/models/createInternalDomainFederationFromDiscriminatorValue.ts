import {InternalDomainFederationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInternalDomainFederationFromDiscriminatorValue(parseNode: ParseNode | undefined) : InternalDomainFederationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InternalDomainFederationImpl();
}
