import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import type {Reminder} from '../../../models/reminder';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ReminderViewWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Reminder[] | undefined;
}
