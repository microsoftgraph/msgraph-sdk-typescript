import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {CallRecord} from './callRecord';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallRecordCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CallRecord[] | undefined;
}
