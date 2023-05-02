import {BaseCollectionPaginationCountResponse} from '../../models/baseCollectionPaginationCountResponse';
import {Reminder} from '../../models/reminder';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ReminderViewWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Reminder[] | undefined;
}
