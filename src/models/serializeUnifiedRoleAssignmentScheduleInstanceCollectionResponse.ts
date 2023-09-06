import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleAssignmentScheduleInstance } from './serializeUnifiedRoleAssignmentScheduleInstance';
import { type UnifiedRoleAssignmentScheduleInstance } from './unifiedRoleAssignmentScheduleInstance';
import { type UnifiedRoleAssignmentScheduleInstanceCollectionResponse } from './unifiedRoleAssignmentScheduleInstanceCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleInstanceCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentScheduleInstanceCollectionResponse: UnifiedRoleAssignmentScheduleInstanceCollectionResponse | undefined = {} as UnifiedRoleAssignmentScheduleInstanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentScheduleInstanceCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstance>("value", unifiedRoleAssignmentScheduleInstanceCollectionResponse.value, serializeUnifiedRoleAssignmentScheduleInstance);
}
