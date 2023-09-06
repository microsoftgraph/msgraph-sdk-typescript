import { createUnifiedRoleAssignmentScheduleFromDiscriminatorValue } from './createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleAssignmentSchedule } from './serializeUnifiedRoleAssignmentSchedule';
import { type UnifiedRoleAssignmentSchedule } from './unifiedRoleAssignmentSchedule';
import { type UnifiedRoleAssignmentScheduleCollectionResponse } from './unifiedRoleAssignmentScheduleCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentScheduleCollectionResponse(unifiedRoleAssignmentScheduleCollectionResponse: UnifiedRoleAssignmentScheduleCollectionResponse | undefined = {} as UnifiedRoleAssignmentScheduleCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleAssignmentScheduleCollectionResponse),
        "value": n => { unifiedRoleAssignmentScheduleCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentSchedule>(createUnifiedRoleAssignmentScheduleFromDiscriminatorValue); },
    }
}
