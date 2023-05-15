import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsSrvRecord} from './domainDnsSrvRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsSrvRecord(domainDnsSrvRecord: DomainDnsSrvRecord | undefined = {} as DomainDnsSrvRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsSrvRecord),
        "nameTarget": n => { domainDnsSrvRecord.nameTarget = n.getStringValue(); },
        "port": n => { domainDnsSrvRecord.port = n.getNumberValue(); },
        "priority": n => { domainDnsSrvRecord.priority = n.getNumberValue(); },
        "protocol": n => { domainDnsSrvRecord.protocol = n.getStringValue(); },
        "service": n => { domainDnsSrvRecord.service = n.getStringValue(); },
        "weight": n => { domainDnsSrvRecord.weight = n.getNumberValue(); },
    }
}
