import type {DomainDnsRecord} from './domainDnsRecord';
import type {DomainDnsRecordCollectionResponse} from './domainDnsRecordCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsRecordCollectionResponse(writer: SerializationWriter, domainDnsRecordCollectionResponse: DomainDnsRecordCollectionResponse | undefined = {} as DomainDnsRecordCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainDnsRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<DomainDnsRecord>("value", domainDnsRecordCollectionResponse.value, serializeDomainDnsRecord);
}
