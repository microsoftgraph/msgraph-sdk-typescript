import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignment} from './serializeUnifiedRoleAssignment';
import type {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import type {UnifiedRoleAssignmentCollectionResponse} from './unifiedRoleAssignmentCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleAssignmentCollectionResponse(writer: SerializationWriter, unifiedRoleAssignmentCollectionResponse: UnifiedRoleAssignmentCollectionResponse | undefined = {} as UnifiedRoleAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignment>("value", unifiedRoleAssignmentCollectionResponse.value, serializeUnifiedRoleAssignment);
}
