import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type CalendarPermission } from './calendarPermission';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CalendarPermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CalendarPermission[] | undefined;
}
