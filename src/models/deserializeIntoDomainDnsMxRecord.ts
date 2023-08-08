import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import type {DomainDnsMxRecord} from './domainDnsMxRecord';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsMxRecord(domainDnsMxRecord: DomainDnsMxRecord | undefined = {} as DomainDnsMxRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsMxRecord),
        "mailExchange": n => { domainDnsMxRecord.mailExchange = n.getStringValue(); },
        "preference": n => { domainDnsMxRecord.preference = n.getNumberValue(); },
    }
}
