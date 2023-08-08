import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import type {DomainDnsUnavailableRecord} from './domainDnsUnavailableRecord';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsUnavailableRecord(domainDnsUnavailableRecord: DomainDnsUnavailableRecord | undefined = {} as DomainDnsUnavailableRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsUnavailableRecord),
        "description": n => { domainDnsUnavailableRecord.description = n.getStringValue(); },
    }
}
