import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Segment} from './segment';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SegmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Segment[] | undefined;
}
