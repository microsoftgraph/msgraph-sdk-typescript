import {createUnifiedRoleAssignmentScheduleFromDiscriminatorValue} from '../../../../models/createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentSchedule} from '../../../../models/serializeUnifiedRoleAssignmentSchedule';
import type {UnifiedRoleAssignmentSchedule} from '../../../../models/unifiedRoleAssignmentSchedule';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentSchedule>(createUnifiedRoleAssignmentScheduleFromDiscriminatorValue); },
    }
}
