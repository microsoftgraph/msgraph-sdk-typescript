import {DomainDnsRecord} from './domainDnsRecord';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsTxtRecord extends DomainDnsRecord, Parsable {
    /**
     * Value used when configuring the text property at the DNS host.
     */
    text?: string | undefined;
}
