import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentScheduleRequest} from './serializeUnifiedRoleAssignmentScheduleRequest';
import type {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import type {UnifiedRoleAssignmentScheduleRequestCollectionResponse} from './unifiedRoleAssignmentScheduleRequestCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleRequestCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentScheduleRequestCollectionResponse: UnifiedRoleAssignmentScheduleRequestCollectionResponse | undefined = {} as UnifiedRoleAssignmentScheduleRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentScheduleRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>("value", unifiedRoleAssignmentScheduleRequestCollectionResponse.value, serializeUnifiedRoleAssignmentScheduleRequest);
}
