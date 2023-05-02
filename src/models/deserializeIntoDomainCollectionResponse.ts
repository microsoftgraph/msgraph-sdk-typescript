import {createDomainFromDiscriminatorValue} from './createDomainFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {Domain} from './domain';
import {DomainCollectionResponse} from './domainCollectionResponse';
import {serializeDomain} from './serializeDomain';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainCollectionResponse(domainCollectionResponse: DomainCollectionResponse | undefined = {} as DomainCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainCollectionResponse),
        "value": n => { domainCollectionResponse.value = n.getCollectionOfObjectValues<Domain>(createDomainFromDiscriminatorValue); },
    }
}
