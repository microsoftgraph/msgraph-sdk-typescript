import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DomainDnsRecord } from './domainDnsRecord';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DomainDnsRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DomainDnsRecord[] | undefined;
}
