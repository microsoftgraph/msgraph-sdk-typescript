import { deserializeIntoInternalDomainFederationCollectionResponse } from './deserializeIntoInternalDomainFederationCollectionResponse';
import { type InternalDomainFederationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInternalDomainFederationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInternalDomainFederationCollectionResponse;
}
