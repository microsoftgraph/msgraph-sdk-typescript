import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type CallRecord } from './callRecord';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CallRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CallRecord[] | undefined;
}
