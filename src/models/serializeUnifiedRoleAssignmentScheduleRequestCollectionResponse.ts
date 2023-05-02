import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentScheduleRequest} from './serializeUnifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleAssignmentScheduleRequestCollectionResponse} from './unifiedRoleAssignmentScheduleRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentScheduleRequestCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentScheduleRequestCollectionResponse: UnifiedRoleAssignmentScheduleRequestCollectionResponse | undefined = {} as UnifiedRoleAssignmentScheduleRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentScheduleRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>("value", unifiedRoleAssignmentScheduleRequestCollectionResponse.value, serializeUnifiedRoleAssignmentScheduleRequest);
}
