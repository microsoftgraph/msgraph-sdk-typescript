import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsTxtRecord} from './domainDnsTxtRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsTxtRecord(domainDnsTxtRecord: DomainDnsTxtRecord | undefined = {} as DomainDnsTxtRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsTxtRecord),
        "text": n => { domainDnsTxtRecord.text = n.getStringValue(); },
    }
}
