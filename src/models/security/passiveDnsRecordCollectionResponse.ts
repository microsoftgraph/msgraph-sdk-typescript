import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {PassiveDnsRecord} from './passiveDnsRecord';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PassiveDnsRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PassiveDnsRecord[] | undefined;
}
