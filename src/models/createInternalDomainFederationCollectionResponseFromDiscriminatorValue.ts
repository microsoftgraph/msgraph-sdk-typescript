import {InternalDomainFederationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInternalDomainFederationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : InternalDomainFederationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InternalDomainFederationCollectionResponseImpl();
}
