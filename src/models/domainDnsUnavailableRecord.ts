import {DomainDnsRecord} from './domainDnsRecord';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsUnavailableRecord extends DomainDnsRecord, Partial<Parsable> {
    /** Provides the reason why the DomainDnsUnavailableRecord entity is returned. */
    description?: string | undefined;
}
