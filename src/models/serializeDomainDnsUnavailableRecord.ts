import {DomainDnsUnavailableRecord} from './domainDnsUnavailableRecord';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsUnavailableRecord(domainDnsUnavailableRecord: DomainDnsUnavailableRecord | undefined = {} as DomainDnsUnavailableRecord, writer: SerializationWriter) : void {
        serializeDomainDnsRecord(writer, domainDnsUnavailableRecord)
        writer.writeStringValue("description", domainDnsUnavailableRecord.description);
}
