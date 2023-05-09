import {createDomainDnsRecordFromDiscriminatorValue} from './createDomainDnsRecordFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DomainDnsRecord} from './domainDnsRecord';
import {DomainDnsRecordCollectionResponse} from './domainDnsRecordCollectionResponse';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsRecordCollectionResponse(domainDnsRecordCollectionResponse: DomainDnsRecordCollectionResponse | undefined = {} as DomainDnsRecordCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(domainDnsRecordCollectionResponse),
        "value": n => { domainDnsRecordCollectionResponse.value = n.getCollectionOfObjectValues<DomainDnsRecord>(createDomainDnsRecordFromDiscriminatorValue); },
    }
}
