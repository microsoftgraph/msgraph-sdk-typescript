import { createDomainFromDiscriminatorValue } from './createDomainFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type Domain } from './domain';
import { type DomainCollectionResponse } from './domainCollectionResponse';
import { serializeDomain } from './serializeDomain';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainCollectionResponse(domainCollectionResponse: DomainCollectionResponse | undefined = {} as DomainCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainCollectionResponse),
        "value": n => { domainCollectionResponse.value = n.getCollectionOfObjectValues<Domain>(createDomainFromDiscriminatorValue); },
    }
}
