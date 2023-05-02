import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsMxRecord} from './domainDnsMxRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsMxRecord(domainDnsMxRecord: DomainDnsMxRecord | undefined = {} as DomainDnsMxRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsMxRecord),
        "mailExchange": n => { domainDnsMxRecord.mailExchange = n.getStringValue(); },
        "preference": n => { domainDnsMxRecord.preference = n.getNumberValue(); },
    }
}
