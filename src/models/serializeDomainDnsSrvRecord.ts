import {DomainDnsSrvRecord} from './domainDnsSrvRecord';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsSrvRecord(domainDnsSrvRecord: DomainDnsSrvRecord | undefined = {} as DomainDnsSrvRecord, writer: SerializationWriter) : void {
        serializeDomainDnsRecord(writer, domainDnsSrvRecord)
        writer.writeStringValue("nameTarget", domainDnsSrvRecord.nameTarget);
        writer.writeNumberValue("port", domainDnsSrvRecord.port);
        writer.writeNumberValue("priority", domainDnsSrvRecord.priority);
        writer.writeStringValue("protocol", domainDnsSrvRecord.protocol);
        writer.writeStringValue("service", domainDnsSrvRecord.service);
        writer.writeNumberValue("weight", domainDnsSrvRecord.weight);
}
