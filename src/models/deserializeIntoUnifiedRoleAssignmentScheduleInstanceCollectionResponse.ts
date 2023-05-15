import {createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentScheduleInstance} from './serializeUnifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleInstance} from './unifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleInstanceCollectionResponse} from './unifiedRoleAssignmentScheduleInstanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentScheduleInstanceCollectionResponse(unifiedRoleAssignmentScheduleInstanceCollectionResponse: UnifiedRoleAssignmentScheduleInstanceCollectionResponse | undefined = {} as UnifiedRoleAssignmentScheduleInstanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleAssignmentScheduleInstanceCollectionResponse),
        "value": n => { unifiedRoleAssignmentScheduleInstanceCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstance>(createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue); },
    }
}
