import {DomainDnsCnameRecord} from './domainDnsCnameRecord';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsCnameRecord(domainDnsCnameRecord: DomainDnsCnameRecord | undefined = {} as DomainDnsCnameRecord, writer: SerializationWriter) : void {
        serializeDomainDnsRecord(writer, domainDnsCnameRecord)
        writer.writeStringValue("canonicalName", domainDnsCnameRecord.canonicalName);
}
