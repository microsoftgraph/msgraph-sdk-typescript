import {DomainDnsTxtRecord} from './domainDnsTxtRecord';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsTxtRecord(writer: SerializationWriter, domainDnsTxtRecord: DomainDnsTxtRecord | undefined = {} as DomainDnsTxtRecord) : void {
        serializeDomainDnsRecord(writer, domainDnsTxtRecord)
        writer.writeStringValue("text", domainDnsTxtRecord.text);
}
