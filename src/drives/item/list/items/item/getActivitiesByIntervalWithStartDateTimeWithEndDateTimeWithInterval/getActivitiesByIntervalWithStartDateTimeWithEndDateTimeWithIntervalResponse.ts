import type {BaseCollectionPaginationCountResponse} from '../../../../../../models/baseCollectionPaginationCountResponse';
import type {ItemActivityStat} from '../../../../../../models/itemActivityStat';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ItemActivityStat[] | undefined;
}
