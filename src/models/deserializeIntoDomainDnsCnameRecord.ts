import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import type {DomainDnsCnameRecord} from './domainDnsCnameRecord';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsCnameRecord(domainDnsCnameRecord: DomainDnsCnameRecord | undefined = {} as DomainDnsCnameRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsCnameRecord),
        "canonicalName": n => { domainDnsCnameRecord.canonicalName = n.getStringValue(); },
    }
}
