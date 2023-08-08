import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SchedulingGroup} from './schedulingGroup';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SchedulingGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SchedulingGroup[] | undefined;
}
