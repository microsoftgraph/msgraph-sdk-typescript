import { createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue } from '../../../../models/createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleAssignmentScheduleRequest } from '../../../../models/serializeUnifiedRoleAssignmentScheduleRequest';
import { type UnifiedRoleAssignmentScheduleRequest } from '../../../../models/unifiedRoleAssignmentScheduleRequest';
import { type FilterByCurrentUserWithOnResponse } from './filterByCurrentUserWithOnResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>(createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue); },
    }
}
