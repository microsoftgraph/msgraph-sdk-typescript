import {DomainDnsRecord} from './domainDnsRecord';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsTxtRecord extends Partial<AdditionalDataHolder>, DomainDnsRecord, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Value used when configuring the text property at the DNS host. */
    text?: string | undefined;
}
