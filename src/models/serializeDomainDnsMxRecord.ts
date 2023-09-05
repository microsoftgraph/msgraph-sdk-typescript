import { type DomainDnsMxRecord } from './domainDnsMxRecord';
import { serializeDomainDnsRecord } from './serializeDomainDnsRecord';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDomainDnsMxRecord(writer: SerializationWriter, domainDnsMxRecord: DomainDnsMxRecord | undefined = {} as DomainDnsMxRecord) : void {
        serializeDomainDnsRecord(writer, domainDnsMxRecord)
        writer.writeStringValue("mailExchange", domainDnsMxRecord.mailExchange);
        writer.writeNumberValue("preference", domainDnsMxRecord.preference);
}
