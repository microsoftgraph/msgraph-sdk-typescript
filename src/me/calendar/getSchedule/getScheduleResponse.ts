import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import type {ScheduleInformation} from '../../../models/scheduleInformation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetScheduleResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ScheduleInformation[] | undefined;
}
