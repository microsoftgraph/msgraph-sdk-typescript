import {deserializeIntoInternalDomainFederationCollectionResponse} from './deserializeIntoInternalDomainFederationCollectionResponse';
import {InternalDomainFederationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInternalDomainFederationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInternalDomainFederationCollectionResponse;
}
