import {createDomainDnsRecordFromDiscriminatorValue} from './createDomainDnsRecordFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {DomainDnsRecord} from './domainDnsRecord';
import type {DomainDnsRecordCollectionResponse} from './domainDnsRecordCollectionResponse';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsRecordCollectionResponse(domainDnsRecordCollectionResponse: DomainDnsRecordCollectionResponse | undefined = {} as DomainDnsRecordCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainDnsRecordCollectionResponse),
        "value": n => { domainDnsRecordCollectionResponse.value = n.getCollectionOfObjectValues<DomainDnsRecord>(createDomainDnsRecordFromDiscriminatorValue); },
    }
}
