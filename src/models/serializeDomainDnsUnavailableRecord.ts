import { type DomainDnsUnavailableRecord } from './domainDnsUnavailableRecord';
import { serializeDomainDnsRecord } from './serializeDomainDnsRecord';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDomainDnsUnavailableRecord(writer: SerializationWriter, domainDnsUnavailableRecord: DomainDnsUnavailableRecord | undefined = {} as DomainDnsUnavailableRecord) : void {
        serializeDomainDnsRecord(writer, domainDnsUnavailableRecord)
        writer.writeStringValue("description", domainDnsUnavailableRecord.description);
}
