import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {CalendarGroup} from './calendarGroup';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CalendarGroup[] | undefined;
}
