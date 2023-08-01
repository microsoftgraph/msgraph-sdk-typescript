import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentSchedule} from './serializeUnifiedRoleAssignmentSchedule';
import type {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import type {UnifiedRoleAssignmentScheduleCollectionResponse} from './unifiedRoleAssignmentScheduleCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentScheduleCollectionResponse: UnifiedRoleAssignmentScheduleCollectionResponse | undefined = {} as UnifiedRoleAssignmentScheduleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentScheduleCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentSchedule>("value", unifiedRoleAssignmentScheduleCollectionResponse.value, serializeUnifiedRoleAssignmentSchedule);
}
