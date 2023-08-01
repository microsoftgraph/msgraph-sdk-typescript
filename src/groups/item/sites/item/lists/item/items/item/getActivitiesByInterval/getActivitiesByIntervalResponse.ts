import type {BaseCollectionPaginationCountResponse} from '../../../../../../../../../models/baseCollectionPaginationCountResponse';
import type {ItemActivityStat} from '../../../../../../../../../models/itemActivityStat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetActivitiesByIntervalResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ItemActivityStat[] | undefined;
}
