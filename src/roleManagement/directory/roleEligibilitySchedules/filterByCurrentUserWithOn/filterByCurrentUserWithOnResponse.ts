import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {UnifiedRoleEligibilitySchedule} from '../../../../models/unifiedRoleEligibilitySchedule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: UnifiedRoleEligibilitySchedule[] | undefined;
}
