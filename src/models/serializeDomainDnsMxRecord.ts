import {DomainDnsMxRecord} from './domainDnsMxRecord';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsMxRecord(domainDnsMxRecord: DomainDnsMxRecord | undefined = {} as DomainDnsMxRecord, writer: SerializationWriter) : void {
        serializeDomainDnsRecord(writer, domainDnsMxRecord)
        writer.writeStringValue("mailExchange", domainDnsMxRecord.mailExchange);
        writer.writeNumberValue("preference", domainDnsMxRecord.preference);
}
