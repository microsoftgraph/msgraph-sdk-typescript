import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type PassiveDnsRecord } from './passiveDnsRecord';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PassiveDnsRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PassiveDnsRecord[] | undefined;
}
