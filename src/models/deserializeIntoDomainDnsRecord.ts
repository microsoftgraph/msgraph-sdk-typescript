import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DomainDnsRecord} from './domainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsRecord(domainDnsRecord: DomainDnsRecord | undefined = {} as DomainDnsRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(domainDnsRecord),
        "isOptional": n => { domainDnsRecord.isOptional = n.getBooleanValue(); },
        "label": n => { domainDnsRecord.label = n.getStringValue(); },
        "recordType": n => { domainDnsRecord.recordType = n.getStringValue(); },
        "supportedService": n => { domainDnsRecord.supportedService = n.getStringValue(); },
        "ttl": n => { domainDnsRecord.ttl = n.getNumberValue(); },
    }
}
