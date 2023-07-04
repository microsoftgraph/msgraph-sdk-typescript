import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {CalendarPermission} from './calendarPermission';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarPermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CalendarPermission[] | undefined;
}
