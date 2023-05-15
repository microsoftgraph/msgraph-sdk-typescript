import {createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue} from '../../../../models/createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentScheduleInstance} from '../../../../models/serializeUnifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleInstance} from '../../../../models/unifiedRoleAssignmentScheduleInstance';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstance>(createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue); },
    }
}
