import { type DomainDnsRecord } from './domainDnsRecord';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DomainDnsTxtRecord extends DomainDnsRecord, Parsable {
    /**
     * Value used when configuring the text property at the DNS host.
     */
    text?: string | undefined;
}
