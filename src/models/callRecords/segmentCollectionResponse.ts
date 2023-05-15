import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {Segment} from './segment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SegmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Segment[] | undefined;
}
