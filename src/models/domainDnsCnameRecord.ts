import {DomainDnsRecord} from './domainDnsRecord';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsCnameRecord extends Partial<AdditionalDataHolder>, DomainDnsRecord, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The canonical name of the CNAME record. Used to configure the CNAME record at the DNS host. */
    canonicalName?: string | undefined;
}
