import {DomainDnsTxtRecord} from './domainDnsTxtRecord';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsTxtRecord(domainDnsTxtRecord: DomainDnsTxtRecord | undefined = {} as DomainDnsTxtRecord, writer: SerializationWriter) : void {
        serializeDomainDnsRecord(writer, domainDnsTxtRecord)
        writer.writeStringValue("text", domainDnsTxtRecord.text);
}
