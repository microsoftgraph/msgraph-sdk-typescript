import {DomainDnsRecord} from './domainDnsRecord';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsMxRecord extends DomainDnsRecord, Parsable {
    /**
     * Value used when configuring the answer/destination/value of the MX record at the DNS host.
     */
    mailExchange?: string | undefined;
    /**
     * Value used when configuring the Preference/Priority property of the MX record at the DNS host.
     */
    preference?: number | undefined;
}
