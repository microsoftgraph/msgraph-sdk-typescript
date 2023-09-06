import { type DomainDnsRecord } from './domainDnsRecord';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDomainDnsRecord(writer: SerializationWriter, domainDnsRecord: DomainDnsRecord | undefined = {} as DomainDnsRecord) : void {
        serializeEntity(writer, domainDnsRecord)
        writer.writeBooleanValue("isOptional", domainDnsRecord.isOptional);
        writer.writeStringValue("label", domainDnsRecord.label);
        writer.writeStringValue("recordType", domainDnsRecord.recordType);
        writer.writeStringValue("supportedService", domainDnsRecord.supportedService);
        writer.writeNumberValue("ttl", domainDnsRecord.ttl);
}
