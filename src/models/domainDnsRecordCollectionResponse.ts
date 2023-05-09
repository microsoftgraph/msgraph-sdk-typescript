import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DomainDnsRecord} from './domainDnsRecord';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DomainDnsRecord[] | undefined;
}
