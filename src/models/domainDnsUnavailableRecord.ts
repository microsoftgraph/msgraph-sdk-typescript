import type {DomainDnsRecord} from './domainDnsRecord';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsUnavailableRecord extends DomainDnsRecord, Parsable {
    /**
     * Provides the reason why the DomainDnsUnavailableRecord entity is returned.
     */
    description?: string | undefined;
}
