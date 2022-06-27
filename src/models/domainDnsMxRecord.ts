import {DomainDnsRecord} from './domainDnsRecord';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsMxRecord extends Partial<AdditionalDataHolder>, DomainDnsRecord, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Value used when configuring the answer/destination/value of the MX record at the DNS host. */
    mailExchange?: string | undefined;
    /** Value used when configuring the Preference/Priority property of the MX record at the DNS host. */
    preference?: number | undefined;
}
