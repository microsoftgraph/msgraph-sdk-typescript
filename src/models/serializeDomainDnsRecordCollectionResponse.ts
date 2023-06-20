import {DomainDnsRecord} from './domainDnsRecord';
import {DomainDnsRecordCollectionResponse} from './domainDnsRecordCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsRecordCollectionResponse(domainDnsRecordCollectionResponse: DomainDnsRecordCollectionResponse | undefined = {} as DomainDnsRecordCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainDnsRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<DomainDnsRecord>("value", domainDnsRecordCollectionResponse.value, serializeDomainDnsRecord);
}
