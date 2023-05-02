import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsCnameRecord} from './domainDnsCnameRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsCnameRecord(domainDnsCnameRecord: DomainDnsCnameRecord | undefined = {} as DomainDnsCnameRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsCnameRecord),
        "canonicalName": n => { domainDnsCnameRecord.canonicalName = n.getStringValue(); },
    }
}
