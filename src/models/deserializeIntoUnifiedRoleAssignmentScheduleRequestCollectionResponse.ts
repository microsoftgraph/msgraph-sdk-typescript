import { createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue } from './createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleAssignmentScheduleRequest } from './serializeUnifiedRoleAssignmentScheduleRequest';
import { type UnifiedRoleAssignmentScheduleRequest } from './unifiedRoleAssignmentScheduleRequest';
import { type UnifiedRoleAssignmentScheduleRequestCollectionResponse } from './unifiedRoleAssignmentScheduleRequestCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentScheduleRequestCollectionResponse(unifiedRoleAssignmentScheduleRequestCollectionResponse: UnifiedRoleAssignmentScheduleRequestCollectionResponse | undefined = {} as UnifiedRoleAssignmentScheduleRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleAssignmentScheduleRequestCollectionResponse),
        "value": n => { unifiedRoleAssignmentScheduleRequestCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>(createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue); },
    }
}
