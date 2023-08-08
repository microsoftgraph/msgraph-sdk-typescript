import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import type {DomainDnsTxtRecord} from './domainDnsTxtRecord';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsTxtRecord(domainDnsTxtRecord: DomainDnsTxtRecord | undefined = {} as DomainDnsTxtRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsTxtRecord),
        "text": n => { domainDnsTxtRecord.text = n.getStringValue(); },
    }
}
