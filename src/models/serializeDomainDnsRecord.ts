import {DomainDnsRecord} from './domainDnsRecord';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsRecord(domainDnsRecord: DomainDnsRecord | undefined = {} as DomainDnsRecord, writer: SerializationWriter) : void {
        serializeEntity(writer, domainDnsRecord)
        writer.writeBooleanValue("isOptional", domainDnsRecord.isOptional);
        writer.writeStringValue("label", domainDnsRecord.label);
        writer.writeStringValue("recordType", domainDnsRecord.recordType);
        writer.writeStringValue("supportedService", domainDnsRecord.supportedService);
        writer.writeNumberValue("ttl", domainDnsRecord.ttl);
}
