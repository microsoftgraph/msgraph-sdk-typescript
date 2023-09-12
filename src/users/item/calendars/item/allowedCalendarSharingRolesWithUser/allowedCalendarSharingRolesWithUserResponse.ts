import { type BaseCollectionPaginationCountResponse } from '../../../../../models/baseCollectionPaginationCountResponse';
import { CalendarRoleType } from '../../../../../models/calendarRoleType';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AllowedCalendarSharingRolesWithUserResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CalendarRoleType[] | undefined;
}
