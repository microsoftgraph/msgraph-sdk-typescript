import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SchedulingGroup} from './schedulingGroup';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SchedulingGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SchedulingGroup[] | undefined;
}
