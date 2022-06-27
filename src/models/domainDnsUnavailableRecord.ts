import {DomainDnsRecord} from './domainDnsRecord';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsUnavailableRecord extends Partial<AdditionalDataHolder>, DomainDnsRecord, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Provides the reason why the DomainDnsUnavailableRecord entity is returned. */
    description?: string | undefined;
}
