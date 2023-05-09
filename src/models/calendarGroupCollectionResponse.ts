import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {CalendarGroup} from './calendarGroup';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: CalendarGroup[] | undefined;
}
