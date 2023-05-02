import {createInternalDomainFederationFromDiscriminatorValue} from './createInternalDomainFederationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {InternalDomainFederation} from './internalDomainFederation';
import {InternalDomainFederationCollectionResponse} from './internalDomainFederationCollectionResponse';
import {serializeInternalDomainFederation} from './serializeInternalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInternalDomainFederationCollectionResponse(internalDomainFederationCollectionResponse: InternalDomainFederationCollectionResponse | undefined = {} as InternalDomainFederationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(internalDomainFederationCollectionResponse),
        "value": n => { internalDomainFederationCollectionResponse.value = n.getCollectionOfObjectValues<InternalDomainFederation>(createInternalDomainFederationFromDiscriminatorValue); },
    }
}
